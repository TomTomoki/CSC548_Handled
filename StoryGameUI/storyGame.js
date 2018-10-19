//To do
//1. Shared design part. (Switch our games/Contact...?)
//2. Use callbacks when ending the game
//3. Handle touches too on mobile devices

(function($){
  $(document).ready(function(){
      var first_PageLoaded = true;
      if(sessionStorage.getItem("firstTrial")){
          var firstTrial = false;
          var currentStress = parseInt(sessionStorage.getItem("stress"));
          var currentStoryIndex = parseInt(sessionStorage.getItem("index"));
          var stories = JSON.parse(sessionStorage.getItem("stories"));
      } else {
          console.log("First trial");
          var firstTrial = true;
          var currentStress = 0;
          var currentStoryIndex = 1;

          sessionStorage.setItem("firstTrial", false);
          sessionStorage.setItem("stress", currentStress);
          sessionStorage.setItem("index", currentStoryIndex);
      }

//Use filereader API to read these stories from the story file?
      if(firstTrial){
          var stories = [];
          var option1_1 = new Option("Hunker down and study for the upcoming onslaught of exams.", 8);
          var option1_2 = new Option("Set a schedule for yourself: Study and attend to extracurricular duties on the weekdays, and have fun on the weekends.", 5);
          var option1_3 = new Option("Consider dropping the volunteer project as it may be too difficult to do it all.", 2);
          var option1_4 = new Option("Relax a little: You worked hard last semester and it really paid. Now is a good time to back off and take a break.", 0);
          var options1 = [option1_1, option1_2, option1_3, option1_4];
          var story1 = new Story("It has been a great summer, but all good things must come to an end. The fall semester has just started, and although you are excited to see your friends and undertake a new course load, things are winding up. " +
                                  "Professors are already discussing material for upcoming exams, the introductory meeting for your semester long volunteer project is tomorrow, and friends are already planning parties. Do you…",
                                  options1);
          var option2_1 = new Option("You should use this whole weekend to study. These exams are important, and setting a good precedent in these classes will help you succeed the whole semester.", 8);
          var option2_2 = new Option("Maybe just attending for a little bit won’t be too much of an issue. You’ve been working hard so far and deserve a little bit of fun.", -2);
          var option2_3 = new Option("Put in more study time the week before so you can free up the weekend for fun and festivities.", 5);
          var option2_4 = new Option("Who cares? These tests are a fraction of the grade, and you’ll have a whole semester ahead of you to bring it up to an A.", 5);
          var options2 = [option2_1, option2_2, option2_3, option2_4];
          var story2 = new Story("The first group of exams are next week. These aren’t just short quizzes or easy As, but difficult exams in your most challenging classes. " +
                                  "You know you can ace them, but the first major student get together is planned for the weekend before. What do you do?",
                                   options2);
          var option3_1 = new Option("Get the paper done before you even fly out. All you have to do is turn it in when you come back.", 3);
          var option3_2 = new Option("You’ll have plenty of free time at the conference. You can just work on it there. Maybe write a rough draft before you leave, and polish it during the small breaks you get.", 6);
          var option3_3 = new Option("Talk to your professor. She is very understanding and makes accommodations, but you need to warn her immediately or risk losing points.", -5);
          var option3_4 = new Option("You present on the final day of the conference. Maybe you can put in all your time finishing the paper, and work on the final presentation at the conference.", 5);
          var options3 = [option3_1, option3_2, option3_3, option3_4];
          var story3 = new Story("A major conference for your research project is approaching. You are presenting your findings that you made last semester, and need to prepare. Though, the biggest paper of the semester is due right after you get back. Do you…",
                                   options3);
          var option4_1 = new Option("Skip the meeting and go to the party. You’ve been actively engaged so far, and it won’t matter if you miss this one meeting.", 8);
          var option4_2 = new Option("Tell your friend you’ll make it up to him later by buying him dinner, and explain the important meeting you have to attend.", -4);
          var option4_3 = new Option("Work with your project group and try to reschedule for a later or earlier time.", 3);
          var option4_4 = new Option("Skype in to the meeting so you can quickly make your points and go to the party afterwards.", 4);
          var options4 = [option4_1, option4_2, option4_3, option4_4];
          var story4 = new Story("A very close friend that you’ve known since high school is having his 21st birthday part, but you have an important checkpoint meeting for your semester volunteer project on the same day.",
                            options4);

          stories[1] = story1;
          stories[2] = story2;
          stories[3] = story3;
          stories[4] = story4;

          sessionStorage.setItem("stories", JSON.stringify(stories));
      }

      $("#story")[0].textContent = stories[currentStoryIndex].story;
      $("#option1")[0].textContent = stories[currentStoryIndex].options[0].option;
      $("#option2")[0].textContent = stories[currentStoryIndex].options[1].option;
      $("#option3")[0].textContent = stories[currentStoryIndex].options[2].option;
      $("#option4")[0].textContent = stories[currentStoryIndex].options[3].option;


//Append events
      $('#sample_goal').goalProgress({
          currentAmount: currentStress,}, first_PageLoaded
      );
      first_PageLoaded = false;

      $('#restart').on("click", function(){
          sessionStorage.clear();
          location.reload();
      });

      $('#option1').on("click", function(event){
          if(currentStress+stories[currentStoryIndex].options[0].point >= 0){
              currentStress += stories[currentStoryIndex].options[0].point;
              $('#sample_goal').goalProgress({
                  currentAmount: currentStress
              });
          } else {
            currentStress = 0;
            $('#sample_goal').goalProgress({
                currentAmount: 0
            });
          }
          currentStoryIndex = nextStory(stories, currentStoryIndex);
          sessionStorage.setItem("stress", currentStress);
          sessionStorage.setItem("index", currentStoryIndex);
      });

      $('#option2').on("click", function(event){
          if(currentStress+stories[currentStoryIndex].options[1].point >= 0){
              currentStress += stories[currentStoryIndex].options[1].point;
              $('#sample_goal').goalProgress({
                  currentAmount: currentStress
              });
          } else {
            currentStress = 0;
            $('#sample_goal').goalProgress({
                currentAmount: 0
            });
          }
          currentStoryIndex = nextStory(stories, currentStoryIndex);
          sessionStorage.setItem("stress", currentStress);
          sessionStorage.setItem("index", currentStoryIndex);
      });

      $('#option3').on("click", function(event){
          if(currentStress+stories[currentStoryIndex].options[2].point >= 0){
              currentStress += stories[currentStoryIndex].options[2].point;
              $('#sample_goal').goalProgress({
                  currentAmount: currentStress
              });
          } else {
            currentStress = 0;
            $('#sample_goal').goalProgress({
                currentAmount: 0
            });
          }
          currentStoryIndex = nextStory(stories, currentStoryIndex);
          sessionStorage.setItem("stress", currentStress);
          sessionStorage.setItem("index", currentStoryIndex);
      });

      $('#option4').on("click", function(event){
          if(currentStress+stories[currentStoryIndex].options[3].point >= 0){
              currentStress += stories[currentStoryIndex].options[3].point;
              $('#sample_goal').goalProgress({
                  currentAmount: currentStress
              });
          } else {
            currentStress = 0;
            $('#sample_goal').goalProgress({
                currentAmount: 0
            });
          }
          currentStoryIndex = nextStory(stories, currentStoryIndex);
          sessionStorage.setItem("stress", currentStress);
          sessionStorage.setItem("index", currentStoryIndex);
      });
  });
})(window.jQuery);
