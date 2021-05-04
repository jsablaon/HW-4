

// definitions
let movies = new Array();

// DOM listeners
document.addEventListener("DOMContentLoaded", function (event){
    // put code here that we dont want to execute until
    // all html and css are loaded

    //document.getElementById("button").addEventListener("click", addMovies());
});

// functions
function AddMovie(){
    console.log("in the AddMovie()...");
    let movieName = document.getElementById("movieName").value;
    let movieRating = document.getElementById("movieRating").value;

    let m = new Movie(movieName, movieRating);
    console.log("isInputvalid = " + m.isInputValid(movieName, movieRating));
    if(m.isInputValid(movieName, movieRating)){
        movies.push(m);
    }
    else {
        alert("Please ensure all inputs are correct. Not saving any data at the moment.");
    }

    // clears the input boxes
    document.getElementById('movieName').value = ""
    document.getElementById('movieRating').value = ""
}

function ShowMovies() {
    console.log("in the ShowMovies()...");
    let outputlist = document.getElementById("outputlist");
    outputlist.innerHTML = "";
    for(i = 0; i < movies.length; i++){
        console.log(movies[i].GetAll());
        outputlist.innerHTML += "<br/>" + movies[i].GetAll()// + "====> " + movies[i].currentObject();
    }
}
