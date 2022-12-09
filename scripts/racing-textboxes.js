$(function () {
  const startingWidth = "calc(100% - 1.6rem)";

  function racerGoBtnGo() {
    const $racer = $(this).parents(".racer");
    const $name = $racer.find(".racer__name");
    $name.stop(true, false);
    $name.css("width", startingWidth);
    if ($name.val() !== "") {
      $racer.find(".racer__label").text($name.val());
    }
    const distance = parseInt($racer.find(".racer__distance").val());
    console.log("distance :>> ", distance);
    $name.animate({ width: "0%" }, distance);
  }

  $(".racer__go-btn").on("click", racerGoBtnGo);

  $(".race__go-all-btn").on("click", function () {
    const $race = $(this).parents(".race");
    $race.find(".racer__go-btn").trigger("click");
  });
});
