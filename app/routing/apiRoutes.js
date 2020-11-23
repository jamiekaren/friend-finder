// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const friends = require("../data/friends.js");

let newFriends = friends.network_friends;

console.log(newFriends);

let newUser = {};

let logUser = newUser;

// let currentMatch = {};


//Need to create a function that checks our current user with all friends in our "database"
//Using Math.abs finds the absolute value (ie value closest to 0 regardness of negative or positive number)
//

function pickMatch() {
    // Set variable of the person we currently our at in our array total score...??
    //Then we find the difference as noted above with our new user minus current
    var currentPick = newFriends[0].total_score;
    //var userFriend;
    var difference = Math.abs(newUser.total_score - currentPick);

    // we want to go through our array starting at index 1 (since we did 0 above)

    newFriends.forEach((entry) => {

        var newDifference = Math.abs(newUser.total_score - entry.total_score);
        console.log(newDifference);
        //compare new difference to our previous difference
        if (newDifference < difference) {
            difference = newDifference;
            currentPick = entry;
            //userFriend = entry.name;
            
        }
        
        // else if the new difference is not less than our previous difference
        //we want to return the whole object as our selected match to user
        //Then we want to add the current user to our friends array (database)
    });

    console.log("This is our current match:");
    console.log(currentPick);
    newFriends.push(logUser);

};




module.exports = function (app) {

    app.post("/api/surveyanswers", function (req, res) {

        // req.body is available since we're using the body parsing middleware
        newUser = req.body;

        console.log("************ USER JUST ADDED! ************ ");
        console.log(newUser);

        pickMatch();
        // newFriends.push(newUser);
        console.log("These are all new friends: ")
        console.log(newFriends);



    });

    // app.get("/api/friends", function (req, res) {
    //     res.json();
    // });


};
