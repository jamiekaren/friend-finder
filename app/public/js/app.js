console.log("App JS file is working...");

let newFriend = {
    name: "Name",
    photo: "photo",
    scores: [],
    total_score: 0,
};


function findTotal() {

    const add = (a, b) =>
        parseInt(a) + parseInt(b);

    const sum = newFriend.scores.reduce(add);
    console.log(sum);

    newFriend.total_score = parseInt(sum);

};

function addPerson() {

    let scores = [$("#answer-one").val(), $("#answer-two").val(),
    $("#answer-three").val(), $("#answer-four").val(),
    $("#answer-five").val(), $("#answer-six").val(),
    $("#answer-seven").val(), $("#answer-eight").val(),
    $("#answer-nine").val(), $("#answer-ten").val()];


    newFriend.name = $("#user-name").val();
    newFriend.photo = $("#user-photo").val();

    newFriend.scores = scores;

    findTotal();

};



$("#user-submit").on("click", (event) => {
    event.preventDefault();
    console.log("Button clicked!");
    addPerson();
    console.log("This person was just added:");
    console.log(newFriend);
    console.log("--------------------------");

    $.post("/api/surveyanswers", newFriend);
});




