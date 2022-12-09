$(function () {
  const startingWidth = "calc(100% - 1.6rem)";

  /**
   * Generate a CSS HSL color value from a string. The color is generated by hashing the
   * string and converting the hash to a number between 0 and 360. The saturation and
   * lightness are set to 100% and 75% respectively.
   * @param {string} stringInput - The string to derive a color from
   * @returns {string} - A string of the format "hsl(x, 100%, 75%)" where x is a number
   * between 0 and 360
   */
  function stringToHashedHsl(stringInput) {
    let hash = 0;
    for (let i = 0; i < stringInput.length; i++) {
      hash = stringInput.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${hash % 360}, 100%, 75%)`;
  }

  function racerGoBtnGo() {
    const $racer = $(this).parents(".racer");
    const $name = $racer.find(".racer__name");
    $name.stop(true, false);
    $name.css("width", startingWidth);
    const name = $name.val();
    if (name !== "") {
      $racer.find(".racer__label").text(name);
      $name.css("background-color", stringToHashedHsl(name));
    }
    const distance = parseInt($racer.find(".racer__distance").val());
    if (isNaN(distance)) {
      return;
    }
    $name.animate({ width: "0%" }, distance);
  }

  $(".racer__go-btn").on("click", racerGoBtnGo);

  $(".race__go-all-btn").on("click", function () {
    const $race = $(this).parents(".race");
    $race.find(".racer__go-btn").trigger("click");
  });
});
