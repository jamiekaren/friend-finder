// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const friends = require("../data/friends.js");

// console.log(friends);

let newFriends = friends.user_answers;

console.log(newFriends);



module.exports = function (app) {

    app.post("/api/surveyanswers", function (req, res) {

        // req.body is available since we're using the body parsing middleware
        console.log(req.body);

        // currentUser = [];

        // console.log("This is the current user: " + currentUser);


    });

    // app.get("/api/friends", function (req, res) {
    //     res.json();
    // });




};
