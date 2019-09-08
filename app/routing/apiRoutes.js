// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const friends = require("../data/friends.js");


// console.log(friends);

let newFriends = friends.network_friends;

console.log(newFriends);

let newUser = {};

// var difference = [];

// let number_check = 0;



// function checkDifference() {

//     newFriends.forEach((entry) => {
//         if (newUser.total_score != entry.total_score) {
//             user1 = entry.total_score - newUser.total_score;
//             entry.difference = user1;
//             console.log("Current difference " + user1);
//         } else
//             console.log("Match found!" + entry);
//         // console.log(Math.min(newFriends.difference));
//     });

//     console.log("All friends: ");
//     console.log(newFriends);
//     pickMatch(newUser.total_score, newFriends);

// };



function pickMatch() {
    let current = 60;
    let difference = Math.abs(newUser.total_score - current);

    console.log("This is current total score " + current);
    console.log(difference);

    for (let i = 0; i > newFriends.length; i++) {
        let newDifference = Math.abs(newUser.total_score - [i].total_score);

        if (newDifference < difference) {
            difference = newDifference;
            current = [i];
        }
        return current;
    };
    
    
};




// newFriends.push(newUser);


module.exports = function (app) {

    app.post("/api/surveyanswers", function (req, res) {

        // req.body is available since we're using the body parsing middleware
        newUser = req.body;

        console.log("************ USER JUST ADDED! ************ ");
        console.log(newUser);

        pickMatch();
        newFriends.push(newUser);
        console.log("These are all new friends: ")
        console.log(newFriends);

        // now we check user scores against current friend list imported above


        // After that, we let the user know who their match is
        // And then we add the new user to our current friend array in friends.js


    });

    // app.get("/api/friends", function (req, res) {
    //     res.json();
    // });


};
