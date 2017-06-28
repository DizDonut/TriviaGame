var game = {
  questionsArr: [{
    question: "What vehicle was driven by Caractacus Potts?",
    wrongAnswers: ["Mystery Machine","Anglia","Ecto-1"],
    correctAnswer: ["Chitty Chitty Bang Bang"]
  }, {
    question: "Which rock start plays the role of vampire in the 1983 movie 'The Hunger'?",
    wrongAnswers: ["Mystery Machine","Anglia","Ecto-1"],
    correctAnswers: ["David Bowie"],
  },{
    question: "What 1990 hit song by Jane's Addiction begins with the sound of dogs barking?",
    wrongAnswers: ["Mystery Machine","Anglia","Ecto-1"],
    correctAnswers: ["Been Caught Stealing"],
  },{
    question: "In the TV show 'The Simpsons' what is the name of the Springfield's music store?",
    wrongAnswers: ["Mystery Machine","Anglia","Ecto-1"],
    correctAnswers: ["King Toot's"],
  },{
    question: "What is singer Meat Loafs real name?",
    wrongAnswers: ["Mystery Machine","Anglia","Ecto-1"],
    correctAnswers: ["Michael Lee Aday"],
  },{
    question: "In the 1988 move, 'Die Hard', what does John McClane leave in the limo?",
    wrongAnswers: ["Mystery Machine","Anglia","Ecto-1"],
    correctAnswers: ["A teddy bear"],
  },{
    question: "What is the name of the prince in Disney's 'Sleeping Beauty'?",
    wrongAnswers: ["Florian","Henry","Eric"],
    correctAnswers: ["Phillip"],
  },{
    question: "Whose adventures on TV take place on the fictional island of Sodor?",
    wrongAnswers: ["Goku","Finn & Jake","Sayid Jarrah"],
    correctAnswers: ["Thomas the Tank Engine"],
  },{
    question: "For what does the 'T' stand in the name of Star Trek's captain James T. Kirk?",
    wrongAnswers: ["Thomas","Tranquility","Terrance"],
    correctAnswers: ["Tiberius"],
  },{
    question: "In what movie is $200,000 of Confederate gold buried in the grave marked 'Unknown' next to Arch Stanton?",
    wrongAnswers: ["True Grit","Anglia","Ecto-1"],
    correctAnswers: ["The Good, The Bad, & The Ugly"],
  },{
    question: "What Madonna video won the 1998 MTV Video of the Year Award?",
    wrongAnswers: ["Like a Virgin","Hung Up","Nothing Really Matters"],
    correctAnswers: ["Ray of Light"],
  },{
    question: "What actor died at the age of 24 while driving his Porsche Spyder?",
    wrongAnswers: ["Paul Walker","Bruce Lee","Brandon Lee"],
    correctAnswers: ["James Dean"],
  },{
    question: "What Broadway Musical is based off the opera 'La Bohen'?",
    wrongAnswers: ["Wicked","My Fair Lady","Les Miserables"],
    correctAnswers: ["Rent"],
  },{
    question: "What move featured the fictional band 'The Soggy Bottom Boys'?",
    wrongAnswers: ["The Great Outdoors","Get On Up","That Thing You Do!"],
    correctAnswers: ["O Brother, Where Art Thou"],
  },{
    question: "What year did 'The Tonight Show' first air?",
    wrongAnswers: ["1955","1956","1957"],
    correctAnswers: ["1954"],
  },{
    question: "In which US state was rapper 'Eminem' born?",
    wrongAnswers: ["Michigan","Indiana","Ohio"],
    correctAnswers: ["Missouri"],
  },{
    question: "What was Walt Disney's middle name?",
    wrongAnswers: ["Tobias","Ray","Thomas"],
    correctAnswers: ["Elias"],
  },{
    question: "For what movie did Dan Aykroyd receive an Oscar nomination?",
    wrongAnswers: ["Ghostbusters","Blues Brothers","Spies Like Us"],
    correctAnswers: ["Driving Miss Daisy"],
  },{
    question: "Singer Stefani Joanne Angelina Germanotta is better known by what stage name?",
    wrongAnswers: ["Gwen Stefani","Pink","Eve"],
    correctAnswers: ["Lady Gaga"],
  },{
    question: "What movie did the villain Norman Bates appear in?",
    wrongAnswers: ["Saw","One Flew Over the Cuckoos Nest","Birds"],
    correctAnswers: ["Pyscho"],
  },
],

  maxQuestions: 10,
  buttonDisabled: false,
  questionIncrement: 0,
  questionsAskedArr: [],
  optionsArr: [],
  startingScore: 100,
  accumScore: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  notAnswered: 0,

  randomNoRepeats: function(array){
    var copy = array.slice(0);
    if(copy.length < 1)
    {
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    console.log(index);
    var item = copy[index];
    console.log(item);
    copy.splice(index, 1);
    console.log(copy);
    return item;
  },

  displayQuestion: function(arg1){
    var ques = arg1.question;
    return ques;
  },

  displayAnswers: function(arg2){
    var answ = arg2.correctAnswers[0];
  },

};

$("document").ready(function(){



  $("#go").on("click", function(){
    $(".progress-bar").animate({
      width: "0%"
    }, 10 * 1000);
    random = game.randomNoRepeats(game.questionsArr);
    console.log(game.displayQuestion(random));

    $("#question").html(game.displayQuestion(random));
    $("#answer1").html(game.displayAnswer(random));

    $("go").disabled = true;

  });

});
