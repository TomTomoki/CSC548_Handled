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
          var option5_1 = new Option("Go anyway. Your grade is the most important, and it doesn’t matter if you vomit in class or infect your peers.", 8);
          var option5_2 = new Option("Email your professors and explain the situation. Is there anyway they can record the lectures or get a fellow student to take notes for you?", 4);
          var option5_3 = new Option("Try to do the best you can by going over the test, and rely on office hours once you’re well again.", 5);
          var option5_4 = new Option("Relax! These last few lectures probably won’t even be that many points on the test. You’ll do fine if you study the previous lectures.", -5);
          var options5 = [option5_1, option5_2, option5_3, option5_4];
          var story5 = new Story("Uh oh! You’ve just come down with the stomach flu, but you need to attend these last few lectures. They contain critical material for the midterms exams.",
                            options5);
          var option6_1 = new Option("Spend the free time you have during this week studying for the remaining exams.", 8);
          var option6_2 = new Option("You’ve worked hard and studied hard this whole semester. There are huge parties going on, and you deserve to have fun.", -5);
          var option6_3 = new Option("Study as much as you can before midterms week. Spend midterms week studying some and partying some.", 3);
          var option6_4 = new Option("You seem to have a lot of exams on one single day. Try to ask your professors if they would be able to push a few back so they aren’t all on the same day.", 5);
          var options6 = [option6_1, option6_2, option6_3, option6_4];
          var story6 = new Story("It’s midterms week. All your courses have exams. How do you ensure your success?",
                            options6);
          var option7_1 = new Option("Tell your group members the situation, and fly back for the week to be with your dad and help around the house.", 9);
          var option7_2 = new Option("Focus on your education. Your dad is a tough guy and he’s already looking for new jobs.", 5);
          var option7_3 = new Option("Ask you dad what he wants. Does he need you? Does he think you should come home or stay? Go from there.", 2);
          var option7_4 = new Option("This volunteer project is a nuisance! Quit and fly back home to spend time with dad and relax.", -5);
          var options7 = [option7_1, option7_2, option7_3, option7_4];
          var story7 = new Story("Midterms are over, but you are planning to stick around campus to continue your volunteer project. Yet, your dad just lost the job he’s had for 25 years. What do you do?",
                            options7);
          var option8_1 = new Option("Ask them to put in more time to finish before the deadline, and work with them to make sure all requirements are met.", 4);
          var option8_2 = new Option("Who needs them? You’ve always worked better by yourself. Go ahead and get their parts done. You’ll probably like it better and be more proud.", 9);
          var option8_3 = new Option("Ask your supervisor for a deadline after Thanksgiving.", -3);
          var option8_4 = new Option("Deliver a subpar project. You can go back and polish up the holes after Thanksgiving break. You still have time before the final project is due.", 7);
          var options8 = [option8_1, option8_2, option8_3, option8_4];
          var story8 = new Story("Fall break is over and the back half of the semester is well under way, but Thanksgiving is in less than a week! But your volunteer project partners are all flying home for thanksgiving right when a big milestone is due.",
                            options8);
          var option9_1 = new Option("You’ll have to put in a lot of time at the campus library. Make sure to finish as much work as you can before you come home.", 9);
          var option9_2 = new Option("Move into your best friend’s place for a week and work off their wifi.", 5);
          var option9_3 = new Option("It doesn’t really matter. You don’t have any major assignments due or any exams until finals week. Use this as a natural time to relax and enjoy some quiet time reading a book.", -3);
          var option9_4 = new Option("There is this new internet cafe you’ve been wanting to try. It has gotten great reviews, and you can use this as an opportunity to explore new venues.", 2);
          var options9 = [option9_1, option9_2, option9_3, option9_4];
          var story9 = new Story("You’ve just returned from your Thanksgiving at grandma’s, but come back to fact that your apartment’s internet is down. It will take them almost a week to fix it! What are you going to do?",
                            options9);
          var option10_1 = new Option("Fight through the cold. You’ve been through this before. You need to go to your classes to get the final lectures.", 9);
          var option10_2 = new Option("Ask a friend who has a car for a ride so you don’t have to suffer in these dangerous conditions.", 2);
          var option10_3 = new Option("Work with your professors to get final lecture slides.", 2);
          var option10_4 = new Option("Who cares? You’ve done so well this semester! As long as you don’t bomb these final exams you’ll get great grades in all your courses.", -2);
          var options10 = [option10_1, option10_2, option10_3, option10_4];
          var story10 = new Story("Winter has officially arrived and Omaha is hit with a massive snowstorm. Blistering winds, iced roads, and below freezing temperatures prevent you from walking to campus. Yet it’s dead week and classes are still in session.",
                            options10);
          var option11_1 = new Option("Study together. You’ve known eachother since freshman year RSP, and she’s been a great friend to you.", 5);
          var option11_2 = new Option("Tell her to work with her professors. They seem to be very understanding people, and will most probably work with her so she can succeed in class.", 2);
          var option11_3 = new Option("Ignore her. You need to study and you can’t be dragged down by her endless questions.", 6);
          var option11_4 = new Option("Offer to tutor her during the evenings and try to get her to study by herself to see how much material she can retain. This way you can study by yourself, but also help her when you are free.", 8);
          var options11 = [option11_1, option11_2, option11_3, option11_4];
          var story11 = new Story("As you study for final exams you get texts from your friend. She is really struggling in class, and wants your help to at least pass her classes.",
                            options11);
          var option12_1 = new Option("Spend all your time preparing for the presentation and studying.", 5);
          var option12_2 = new Option("It looks like your group members have pretty easy finals schedules. Make them put the presentation together so you can focus on studying for your exams.", 3);
          var option12_3 = new Option("Ask you supervisor to push the final presentation to a dater after finals week. Sure, you’ll have to stay after finals, but you won’t have to worry about both simultaneously.", 5);
          var option12_4 = new Option("Ask your professors for earlier finals. You want to get everything out of the way so you can focus solely on the final presentation.", 8);
          var options12 = [option12_1, option12_2, option12_3, option12_4];
          var story12 = new Story("Finals week is here, but your semester long volunteer project presentation is also this week.",
                            options12);

          stories[1] = story1;
          stories[2] = story2;
          stories[3] = story3;
          stories[4] = story4;
          stories[5] = story1;
          stories[6] = story2;
          stories[7] = story3;
          stories[8] = story4;
          stories[9] = story1;
          stories[10] = story2;
          stories[11] = story3;
          stories[12] = story4;

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
