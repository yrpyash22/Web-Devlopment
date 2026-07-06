const express = require('express');
const app = express();
let port = 8080;

// Faker -> to generate fake data
const { faker } = require('@faker-js/faker');

// require mysql2
const mysql = require('mysql2');  

// require uuid for random id give you and also unique
const {v4: uuidv4} = require('uuid'); 

// require method override for updating data in database
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

// it is used to convert url data to exesting data for analysis in request.body 
app.use(express.urlencoded( {extended: true} ));

// require path for give you existing .ejs files in folder views
const path = require('path');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/*
let createRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),

    // avatar: faker.image.avatar(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  };
}
console.log(createRandomUser());
*/


// create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'YOUR_DATABASE_NAME',     // here definen database
    password: 'YOUR_DATABASE_PASSWORD'
});
// on clm use this:-> mysql -u root -p
// Enter password: ***********
// mysql>




// Using Place holder INSERT user
// INSERT new data
/*
let q = "INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)";
let user = ["123b", "123_newuser", "abc@gmail.com", "abcb"];
*/ 
/*
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users =[
    ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
    ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
];
*/
/*
try{ 
    connection.query(q, [users], (err, result) =>{
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    });
}catch(err){
    console.log(err);
}
connection.end();
*/





// INSERT in Bulk using faker
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};
        
/*
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for(let i = 1;  i <= 100; i++)
{
    data.push(getRandomUser());
    // console.log(getRandomUser()); // 100 fake users made
}
*/
/*
try{ 
    connection.query(q, [data], (err, result) =>{
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    });
}catch(err){
    console.log(err);
}
connection.end();
*/








// Home rout
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;
    try{ 
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs", {count});
        });
    }catch(err){
        console.log(err);
        res.send("Some Error in Databaes");
    }
});


// Show rout
app.get("/user", (req, res) =>{
    let q = `SELECT * FROM user`; 
    try{ 
        connection.query(q, (err, users) =>{
            if(err) throw err;
            // res.send(result);
            res.render("user.ejs", {users});
        });
    }catch(err){
        console.log(err);
        res.send("Some Error in Databaes");
    }
});



// Edit Route
app.get("/user/:id/edit", (req, res) =>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{ 
        connection.query(q, (err, result) =>{
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log(err);
        res.send("Some Error in Databaes");
    }
});


// Update Route
app.patch("/user/:id", (req, res) =>{
    let {id} = req.params;
    let {password: formpass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{ 
        connection.query(q, (err, result) =>{
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            if(formpass != user.password)
            {
                res.send("Wrong Password");
            }
            else{
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) =>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        console.log(err);
        res.send("Some Error in Databaes");
    }
});



// ADD rout form
app.get("/user/newuser", (req, res) =>{
    res.render("newuser.ejs");
});
// Add Rout
app.post("/user/newuser" , (req, res) =>{
    let {username, email, password } = req.body;
    let id = uuidv4();

    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            console.log("ADDing User Successfully");
            res.redirect("/user");
        })
    }catch(err)
    {
        console.log(err);
        res.send("Some Error occur");
    }
});





// Delete route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});





app.listen(port, () =>{
    console.log(`Server is listin to port: ${port}`);
});
