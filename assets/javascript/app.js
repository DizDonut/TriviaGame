var game = {
  questionsArr: [{
    question: "What vehicle was driven by Caractacus Potts?",
    answer: "Chitty Chitty Bang Bang",
  }, {
    question: "Which rock start plays the role of vampire in the 1983 movie 'The Hunger'?",
    answer: "David Bowie",
  },{
    question: "What 1990 hit song by Jane's Addiction begins with the sound of dogs barking?",
    answer: "Been Caught Stealing",
  },{
    question: "In the TV show 'The Simpsons' what is the name of the Springfield's music store?",
    answer: "King Toot's",
  },{
    question: "What is singer Meat Loafs real name?",
    answer: "Michael Lee Aday",
  },{
    question: "In the 1988 move, 'Die Hard', what does John McClane leave in the limo?",
    answer: "A teddy bear",
  },{
    question: "What is the name of the prince in Disney's 'Sleeping Beauty'?",
    answer: "Phillip",
  },{
    question: "Whose adventures on TV take place on the fictional island of Sodor?",
    answer: "Thomas the Tank Engine",
  },{
    question: "For what does the 'T' stand in the name of Star Trek's captain James T. Kirk?",
    answer: "Tiberius",
  },{
    question: "In what movie is $200,000 of Confederate gold buried in the grave marked 'Unknown' next to Arch Stanton?",
    answer: "The Good, The Bad, & The Ugly",
  },{
    question: "What Madonna video won the 1998 MTV Video of the Year Award?",
    answer: "Ray of Light",
  },{
    question: "What actor died at the age of 24 while driving his Porsche Spyder?",
    answer: "James Dean",
  },{
    question: "What Broadway Musical is based off the opera 'La Bohen'?",
    answer: "Rent",
  },{
    question: "What move featured the fictional band 'The Soggy Bottom Boys'?",
    answer: "O Brother, Where Art Thou",
  },{
    question: "What year did 'The Tonight Show' first air?",
    answer: "1954",
  },{
    question: "In which US state was rapper 'Eminem' born?",
    answer: "Missouri",
  },{
    question: "What was Walt Disney's middle name?",
    answer: "Elias",
  },{
    question: "For what movie did Dan Aykroyd receive an Oscar nomination?",
    answer: "Driving Miss Daisy",
  },{
    question: "Singer Stefani Joanne Angelina Germanotta is better known by what stage name?",
    answer: "Lady Gaga",
  },{
    question: "What movie did the villain Norman Bates appear in?",
    answer: "Pyscho",
  },
],

  maxQuestions: 10,
  buttonDisabled: false,
  questionIncrement: 0,
  optionsArr: [],
  startingScore: 100,
  accumScore: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  notAnswered: 0,

  randomQuestion: function(){
    var random = this.questionsArr[Math.floor(Math.random() * this.questionsArr.length)].question;
    console.log(random);
    $("#question").html(random);
    this.buttonDisabled = true;
    if(this.buttonDisabled){
      $("#question").prop("disabled", true);
    }
  },

};

$("document").ready(function(){

  $("#go").on("click", function(){
    game.randomQuestion();
  });

});
