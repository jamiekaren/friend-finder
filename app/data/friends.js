console.log("Friends JS file Working...");

let network_friends = [
    {
        name: "Jamie",
        photo: "/app/public/profilepic01.jpg",
        scores: [4, 2, 5, 5, 3, 4, 4, 4, 3, 4],
        total_score: function () {
            for (let i = 0; i < this.scores.length; i++) {
                sum = 0;
                sum += scores[i];
               
            }
        }
    }
];




module.exports = {
    network_friends: network_friends,

};