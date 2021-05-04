
// Movie object constructor
function Movie(pTitle, pRating){
    this.title = pTitle;
    this.rating = pRating;
    this.reviews = this.howManyReviews();

    this.GetAll = function (){
        return "Movie title : " + this.title + " | Movie rating : " + this.rating + " | Reviews : " + this.reviews;
    };
}

// prototype allows you to add new props and methods to objects 
Movie.prototype.isInputValid = function (movieTitle, movieRating){
    if(movieTitle == "" || movieRating < 1 || movieRating > 5){
        return false;
    }
    return true;
};

Movie.prototype.howManyReviews = function () {
    return Math.floor(Math.random() * 101);  
};

Movie.prototype.currentObject = function (){
    return this;
};