// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const friends = require("../data/friends.js");


// console.log(friends);

let newFriends = friends.network_friends;

console.log(newFriends);

let newUser = {};

let difference = [];

function checkDifference() {

    newFriends.forEach((entry) => {
        if (newUser.total_score != entry.total_score) {
            user1 = entry.total_score - newUser.total_score;
            difference.push (user1);
            console.log (user1);
            console.log(difference);
          

        } else
        console.log ("Match found!" + entry);
    });
    newFriends.push(newUser);
    pickMatch();
    
};

function pickMatch () {
    for (let i=0; i < difference.length; i++){
        if ([i])
    }


    difference.length = 0;
};

console.log(newFriends);


// newFriends.push(person);



module.exports = function (app) {

    app.post("/api/surveyanswers", function (req, res) {

        // req.body is available since we're using the body parsing middleware
        newUser = req.body;

        console.log("************ USER JUST ADDED! ************ ");
        console.log(newUser);

        checkDifference();

        // now we check user scores against current friend list imported above


        // After that, we let the user know who their match is
        // And then we add the new user to our current friend array in friends.js


    });

    // app.get("/api/friends", function (req, res) {
    //     res.json();
    // });


};
