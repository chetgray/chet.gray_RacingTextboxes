$(function () {
  const startingWidth = "calc(100% - 1.6rem)";

  function racerGoBtnGo() {
    var $racer = $(this).parents(".racer");
    var $name = $racer.find(".racer__name");
    if ($name.val() !== "") {
      $racer.find(".racer__label").text($name.val());
    }
    $name.css("width", startingWidth);
    var distance = parseInt($racer.find(".racer__distance").val());
    console.log("distance :>> ", distance);
    $name.animate({ width: "0%" }, distance);
  }

  $(".racer__go-btn").on("click", racerGoBtnGo);
});
