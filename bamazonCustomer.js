var mysql = require("mysql");
var inquirer = require("inquirer");
// var cli-table2 = require("cli-table2")

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  // if (err) throw err;
  console.log("Connection Made");
  start();
});

function start() {
  // connection.query("SELECT * FROM products", function(err, results) {
  // if (err) throw err;
  console.log("Welcome to Bamazon");
  // connection.end()
  firstBuy();
  // });
}

function firstBuy() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "If you would like to buy an item, please press [1]. Otherwise, please press [2]",
      choices: ["1", "2"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "1") {
        // console.log("You are buying an item")
        purchase()
      } else {
        console.log("Thank you, come again")
        // connection.end()
        start()
      }
    });
}

function purchase() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
      .prompt([{
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "Which item would you like to buy?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }
        // determine  if there are enough
        if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
          // // bid was high enough, so update db, let the user know, and start over
          // connection.query(
          //   "UPDATE products SET ? WHERE ?", [{
          //       highest_bid: answer.stock_quantity
          //     },
          //     {
          //       id: chosenItem.id
          //     }
          //   ],
          // function(error) {
          console.log("Order placed successfully!");
          start();
        }
        // // );
        else  {
        console.log("There's not enough in store.");
        start();
          }
        })
      });
  };
