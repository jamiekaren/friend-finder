console.log("App JS file is working...");

let current_user = {
    name: "Name",
    photo: "photo",
    scores: []
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

