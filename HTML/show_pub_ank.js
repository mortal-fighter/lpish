$( document ).ready(function() {
  if ($("#mode_show").val()==0) {
//PUB - режим просмотра
    $("#ank_sum_balls").html("");
    $("#contact_owner").html("");
    $(".inf_butt").html("");
    $(".num_balls").parent().html(""); 
    $(".ball_after_check").html("");
    $(".ball_first").remove();
    $(".ball_last").remove();
    $(".str_act").remove();
  }
 return;
});
