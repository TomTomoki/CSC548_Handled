(function($){
  $(document).ready(function(){
//Save these variables on a server/browser's storage
      var firstTrial = true;
      var currentStress = 0; //Take a specific action if this reaches the max stress

      $('#sample_goal').goalProgress({
          currentAmount: currentStress,
      }, firstTrial);
      firstTrial = false;

      $('#reduce').on("click", function(event){
        if(currentStress-50 >= 0){
            currentStress -= 50;
        }
        $('#sample_goal').goalProgress({
            currentAmount: currentStress
        });
      });

      $('#increase').on("click", function(event){
        if(currentStress+50 <= 200){
            currentStress += 50;
        }
        $('#sample_goal').goalProgress({
            currentAmount: currentStress
        });
      });
  });
})(jQuery);
