// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

const express = require("express");
const app = express.Router();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

app.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("index");
});

app.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
app.get("/members", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../public/members.html"));
});

// search dates
app.get("/api/dates", (req, res) => {
  db.Dates.findAll({
    where: {
      type: "dates"
    },
    include: [db.name, db.where, db.typeOfDate]
  }).then((results) => {
    res.json(results);
  });


  app.get("/signup", (req, res) => {
    // If the user doesn't hava an account send them to the signup page
    if (req.user) {
      res.redirect("/signup");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
};

//  // user member
// app.get("/members", isAuthenticated, function(req, res) {
//   // find user that by id that matches req.user.id
//   // include the Dates table that matches the user(id).
//   db.User.findOne({
//     where: {
//       id: req.user.id
//     },
//     include: [db.Dates]
//   }).then(users => {
//     let usersDV = users.dataValues;
//     // stringify the return object so we can access array values
//     let usersJSON = JSON.stringify(users, null, 2);
//     // create a json object
//     let data = JSON.parse(usersJSON);
//     // create an array from the Dates array inside data
//     let Dates = data.Dates.map(o => o);
//     // create an array that contains an object that has key value pairs matching the users info.
//     let userData = [{
//       id: usersDV.id,
//       email:usersDV.email,
//       password:usersDV.password
//     }];
//     // render the user template that has 2 partials one for rendering the users info one for handling the users Dates.
//     return res.render('profile', {Dates: Dates, User: userData});
//   }).catch(err => res.status(401).json(err));
// });

// app.get('/user/:id', function(req, res) {
//   // find user that by id that matches req.params.id
//   // include the Dates table that matches the user(id).
//   db.User.findOne({
//     where: {
//       id: req.params.id
//     },
//       include: [db.Dates]
//   }).then(users => {
//     let usersDV = users.dataValues;
//     // stringify the return object so we can access array values
//     let usersJSON = JSON.stringify(users, null, 2);
//     // create a json object
//     let data = JSON.parse(usersJSON);
//     // create an array from the Dates array inside data
//     let Dates = data.Dates.map(o => o);
//     // create an array that contains an object that has key value pairs matching the users info.
//     let userData = [{
//       id: usersDV.id,
//       email:usersDV.email,
//       password:usersDV.password
//     }];
//     // render the user template that has 2 partials one for rendering the users info one for handling the users Dates.
//     return res.render('user', {Dates: Dates, User: userData});
//   }).catch(err => res.status(401).json(err));
// });

//date ROUTES
// =========================================================================
