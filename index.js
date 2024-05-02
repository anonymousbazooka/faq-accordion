$(document).ready(function(){
    $('.questions').click(function(){
        var $answer = $(this).next('.answer');
        $answer.slideToggle();
        $('.answer').not($answer).slideUp();
        var $icon = $(this).find('.icon');
        $('.icon').not($icon).attr('src', './assets/images/icon-plus.svg');
        ToggleIcon($icon);
       
    })

    $('.icon').click(function(event){
        event.stopPropagation();
        var $question = $(this).closest('.questions');
        var $answer = $question.next('.answer');
        $answer.slideToggle();
          var $icon = $(this);
          $('.icon').not($icon).attr('src', './assets/images/icon-plus.svg');
          ToggleIcon($icon);
    })
    function ToggleIcon ($icon){
        if($icon.attr('src') === './assets/images/icon-plus.svg') {
            $icon.attr('src', './assets/images/icon-minus.svg');
        } else {
            $icon.attr('src', './assets/images/icon-plus.svg');
        }
    }
});
  