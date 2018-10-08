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
        alert("End");
        index--;
    }
    return index;
}
