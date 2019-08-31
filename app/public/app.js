console.log("App JS file is working...");

let current_user = {
    name: "Name",
    photo: "photo",
    scores: [],
    total_score: 0
};


function findTotal() {

    const add = (a,b)=>
    a + b;
    const sum = current_user.scores.reduce(add);
    console.log(sum);


    // let sum = 0;

    // for (let i = 0; i < current_user.scores.length; i++) {
    //     sum += current_user.scores[i];

        current_user.total_score = sum;
    // }
};

function addPerson() {

    let scores = [$("#answer-one").val(), $("#answer-two").val(),
    $("#answer-three").val(), $("#answer-four").val(),
    $("#answer-five").val(), $("#answer-six").val(),
    $("#answer-seven").val(), $("#answer-eight").val(),
    $("#answer-nine").val(), $("#answer-ten").val()];


    current_user.name = $("#user-name").val();
    current_user.photo = $("#user-photo").val();

    current_user.scores = scores;

    findTotal();

};








$("#user-submit").on("click", function (event) {
    event.preventDefault();
    console.log("Button clicked!");
    addPerson();
    console.log("This person was just added:");
    console.log(current_user);
    console.log("--------------------------");

    $.post("/api/surveyanswers", current_user);
});

