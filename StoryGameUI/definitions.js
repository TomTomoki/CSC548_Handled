class Story{
    constructor(story, options){
        this.story = story;
        this.options = options;
    }

    printStory(){
        console.log(this.story);
    }

    printOptions(){
        console.log(this.options);
    }
}

class Option{
    constructor(option, point){
      this.option = option;
      this.point = point;
    }
}

function nextStory (stories, index){
    index++;
    if(index < stories.length){
        $("#story")[0].textContent = stories[index].story;
        $("#option1")[0].textContent = stories[index].options[0].option;
        $("#option2")[0].textContent = stories[index].options[1].option;
        $("#option3")[0].textContent = stories[index].options[2].option;
        $("#option4")[0].textContent = stories[index].options[3].option;
    } else {
        var message = document.createElement("div");
        var text = document.createTextNode("Thank you for completing this short story! Taking after Handled’s focus on mental health, the main emphasis of these scenarios were to reveal the stressful situations that arise during one’s college career." +
                                      "Whether that may be school work, extracurricular engagements, or personal conflicts, we all go through times where we feel anxious and overwhelmed. Faced with these challenges, we have to choose our paths carefully and make time to complete the important tasks at hand, but also spare time for ourselves to relax, have fun, and enjoy our college experience. " +
                                      "College life doesn’t just have to be stress and distress, but can be fun, fulfilling, and adventurous!" +

                                      "Creighton University Counseling provides a variety of resources for stress management. In addition to one on one meetings with counseling staff, they recommend recognizing your stressor by finding its source and its cause, and then finding ways to de-stress. Whether that may be as simple as exercise, reading book, or a hot shower, anything that can get your mind away from the stressors you experience is not only beneficial to your mental well-being but" + "also to your physical health. Avoiding unhealthy behaviors such as smoking, overeating, drugs, etc. and placing emphasis on health techniques such as exercise, yoga, listening to music, etc. can greatly improve your mental health and allow you to be more productive in school and other activities." +

                                      "All in all, one must recognize they are stressed, find the stressor, and find ways to avoid the stressor through relaxing means. More information on stress management can be found at https://www.creighton.edu/chc/studentcounselingservices/resourcesforstudents/selfhelp/stressmanagement/, or contact the counseling center at (402) 280-2735. We hope you will enjoy or have enjoyed the Handled theatrical performance and the variety of interactive activities" + "provided in addition!");
        message.appendChild(text);
        message.setAttribute("id", "endMessage");
        $("#frame").replaceWith(message);
        alert("Game Completed!");
        index--;
    }
    return index;
}
