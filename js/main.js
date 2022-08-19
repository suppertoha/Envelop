$(document).ready(function () {
  // ! Header__burger

  //$(".header__burger").on("click", function () {
  //  $(this).toggleClass("active");
  //  $(".header__mobile").toggleClass("active");
  //});

  //$(document).on("click", function (e) {
  //  if (!$(e.target).closest(".header__burger, .header__mobile").length) {
  //    $(".header__mobile").removeClass("active");
  //    $(".header__burger").removeClass("active");
  //  }
  //  e.stopPropagation();
  //});

  // ! Questions__body

  $(".questions__header").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });

  // ! Slider

  //var curSlide = 0;
  //var slides = $('.slider-body__contant').find('.slider-body__item');

  //function highLightSlide() {
  //  slides.removeClass('active');
  //  slides.eq(curSlide % slides.size(0)).addClass('active');
  //  curSlide++;
  //}

  //$('.slider-header__arrow').click(function () {
  //  highLightSlide();
  //});
  //highLightSlide();

  /**
   * Handle slider header
   */

  const $sliderHeader = $("[data-slider-header]");
  const $sliderButton = $sliderHeader.find("[data-slider-button]");
  const $sliderItem = $sliderHeader.find("[data-slider-item]");
  const $sliderBody = $("[data-slider-body]");
  const lastSlide = $sliderItem.length - 1;
  let curSlide = 0;

  const clickPrevSlider = () =>
    curSlide <= 0 ? (curSlide = lastSlide) : curSlide--;

  const clickNextSlider = () =>
    curSlide >= lastSlide ? (curSlide = 0) : curSlide++;

  const changeSliderBody = (element) =>
    element.removeClass("active").eq(curSlide).addClass("active");

  const handleClickSlider = (event) => {
    if ($(event.currentTarget).data("slider-button") === "prev") {
      clickPrevSlider();
    } else {
      clickNextSlider();
    }

    changeSliderBody($sliderBody);
    changeSliderBody($sliderItem);
  };

  $sliderButton.on("click", handleClickSlider);
});
