$(function () {
  const startingWidth = "calc(100% - 1.6rem)";

  function racerGoBtnGo() {
    var $racer = $(this).parents(".racer");
    var $name = $racer.find(".racer__name");
    $name.stop(true, false);
    $name.css("width", startingWidth);
    if ($name.val() !== "") {
      $racer.find(".racer__label").text($name.val());
    }
    var distance = parseInt($racer.find(".racer__distance").val());
    console.log("distance :>> ", distance);
    $name.animate({ width: "0%" }, distance);
  }

  $(".racer__go-btn").on("click", racerGoBtnGo);

  $(".race__go-all-btn").on("click", function () {
    const $race = $(this).parents(".race");
    $race.find(".racer__go-btn").trigger("click");
  });
});
