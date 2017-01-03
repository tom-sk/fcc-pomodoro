$(function(){
    
    
    
    
    $('.timer').startTimer({
      onComplete: function(){
        console.log('Complete');
      },
      allowPause: true,
    });
});