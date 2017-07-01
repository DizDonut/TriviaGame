var game = {
  questionsArr: [{
    question: "What vehicle was driven by Caractacus Potts?",
    Answers: ["Chitty Chitty Bang Bang","Mystery Machine","Anglia","Ecto-1"],
  }, {
    question: "Which rock start plays the role of vampire in the 1983 movie 'The Hunger'?",
    Answers: ["David Bowie","Billy Idol","Gene Simmons","Ozzie Osbourne"],
  },{
    question: "What 1990 hit song by Jane's Addiction begins with the sound of dogs barking?",
    Answers: ["Been Caught Stealing","Jane Says","Ocean Size","Just Because"],
  },{
    question: "In the TV show 'The Simpsons' what is the name of the Springfield's music store?",
    Answers: ["King Toot's","Moe's","Kwik-E-Mart","Lard Lad Donuts"],
  },{
    question: "What is singer Meat Loafs real name?",
    Answers: ["Michael Lee Aday","Prince Rogers Nelson","Georgios Kyriacos Panayiotou","Richard Bachman"],
  },{
    question: "In the 1988 move, 'Die Hard', what does John McClane leave in the limo?",
    Answers: ["A teddy bear","His lighter","A TV Dinner","A walkie talkie"],
  },{
    question: "What is the name of the prince in Disney's 'Sleeping Beauty'?",
    Answers: ["Phillip","Florian","Henry","Eric"],
  },{
    question: "Whose adventures on TV take place on the fictional island of Sodor?",
    Answers: ["Thomas the Tank Engine","Goku","Finn & Jake","Sayid Jarrah"],
  },{
    question: "For what does the 'T' stand in the name of Star Trek's captain James T. Kirk?",
    Answers: ["Tiberius","Thomas","Tranquility","Terrance"],
  },{
    question: "In what movie is $200,000 of Confederate gold buried in the grave marked 'Unknown' next to Arch Stanton?",
    Answers: ["The Good, The Bad, & The Ugly","True Grit","No Country for Old Men","A Fistful of Dollars"],
  },{
    question: "What Madonna video won the 1998 MTV Video of the Year Award?",
    Answers: ["Ray of Light","Like a Virgin","Hung Up","Nothing Really Matters"],
  },{
    question: "What actor died at the age of 24 while driving his Porsche Spyder?",
    Answers: ["James Dean","Paul Walker","Bruce Lee","Brandon Lee"],
  },{
    question: "What Broadway Musical is based off the opera 'La Bohen'?",
    Answers: ["Rent","Wicked","My Fair Lady","Les Miserables"],
  },{
    question: "What movie featured the fictional band 'The Soggy Bottom Boys'?",
    Answers: ["O Brother, Where Art Thou","The Great Outdoors","Get On Up","That Thing You Do!"],
  },{
    question: "What year did 'The Tonight Show' first air?",
    Answers: ["1954","1955","1956","1957"],
  },{
    question: "In which US state was rapper 'Eminem' born?",
    Answers: ["Missouri","Michigan","Indiana","Ohio"],
  },{
    question: "What was Walt Disney's middle name?",
    Answers: ["Elias","Tobias","Ray","Thomas"],
  },{
    question: "For what movie did Dan Aykroyd receive an Oscar nomination?",
    Answers: ["Driving Miss Daisy","Ghostbusters","Blues Brothers","Spies Like Us"],
  },{
    question: "Singer Stefani Joanne Angelina Germanotta is better known by what stage name?",
    Answers: ["Lady Gaga","Gwen Stefani","Pink","Eve"],
  },{
    question: "What movie did the villain Norman Bates appear in?",
    Answers: ["Pyscho","Saw","One Flew Over the Cuckoos Nest","Birds"],
  },
],

  maxQuestions: 10,
  buttonDisabled: false,
  questionIncrement: 0,
  questionsAskedArr: [],
  startingScore: 1000,
  accumScore: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  notAnswered: 0,

  randomNoRepeats: function(){
    var index = Math.floor(Math.random() * this.questionsArr.length);
    var item = this.questionsArr[index];
    var removedItem = this.questionsArr.splice(index, 1);
    this.questionsAskedArr.push(removedItem);

    if(this.questionsAskedArr.length === this.maxQuestions){
      alert("Game Over!");
    }
    return removedItem;
  },

  displayQuestion: function(arg1){
    var ques = arg1[0].question;
    return ques;
  },

  displayAnswers: function(arg2){
    var answ = arg2[0].Answers[0];
    return answ;
  },

  startProgress: function(){
    var i = 100;
    var that = this;
    var progressCounter = setInterval(function(){
      i--;
      if(i > 0)
      {
        $(".progress-bar").css("width", i+"%");
      }else{
        clearInterval(progressCounter);
      }
      $("#answer1").on("click", function(){
        that.accumScore += that.startingScore;
        clearInterval(progressCounter);
      });
    }, 100);
  },

  startScore: function(){
    var that = this;
    var scoreInterval = setInterval(function() {
      console.log(that.startingScore);
      $("#score").html(that.startingScore);
      that.startingScore--;
      $("#score").html(that.startingScore);
      if(that.startingScore === 0)
      {
        clearInterval(scoreInterval);
        alert("Time's Up!");
      }
      $("#answer1").on("click", function(){
        that.accumScore += that.startingScore;
        clearInterval(scoreInterval)
      });
    }, 10);

    this.startingScore = 1000;

  },

};

$("document").ready(function(){


  $("#go").on("click", function(){

    game.startScore();
    var progress = game.startProgress();
    random = game.randomNoRepeats();

    $("#question").html(game.displayQuestion(random));
    $("#answer1").html(game.displayAnswers(random));
    $("go").disabled = true;

  }); //end on click event

}); //end document ready
