console.log("Friends JS file Working...");

let network_friends = [
    {
        name: "Jamie",
        photo: "/app/public/profilepic01.jpg",
        scores: [4, 2, 5, 5, 3, 4, 4, 4, 3, 4],
        total_score: 38,         
    },
    {
        name: "Jace Herondale",
        photo: "/app/public/profilepic02.jpg",
        scores: [4, 2, 5, 5, 3, 4, 4, 4, 3, 4],
        total_score: 20,      
    },
    {
        name: "Clary Fairchild",
        photo: "/app/public/profilepic03.jpg",
        scores: [4, 2, 5, 5, 3, 4, 4, 4, 3, 4],
        total_score: 14,         
    }
];




module.exports = {
    network_friends: network_friends,

};