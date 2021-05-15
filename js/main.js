//slider on home
$(document).ready(function () {
  let imgItem = $('.slider__item').length;
  let imgPos = 1;
  //changes on pagination
  for (i = 0; i < imgItem; i++) {
    $('.js-slider-pagination').append('<li class="slider__pagination-item js-slider-pagination-item"><span class="fa fa-circle"></span></li>');
  }
  $('.js-slider-item').hide();
  $('.js-slider-item:first').show();
  $('.js-slider-pagination-item:first').addClass('active')
  //start functions
  $('.js-slider-item').click(nextSlider);
  $('.js-slider-pagination-item').click(pagination);
  //group of functions
  //pagination is about change de item on slider and change color on pagination
  function pagination(){
    let paginationPos = $(this).index() + 1;
    $('.js-slider-item').hide();
    $('.js-slider-item:nth-child('+ paginationPos + ')').fadeIn();
    $('.js-slider-pagination-item').css({'color': '#fff'});
    $(this).css({'color': '#F9B76B'});
  };
  //nextSlider is for change slider on home
  function nextSlider(){
    if(imgPos >= imgItem){
      imgPos = 1;
    }else{
      imgPos++;
    }
    $('.js-slider-pagination-item').css({'color': '#fff'});
    $('.js-slider-pagination-item:nth-child('+ imgPos +')').css({'color': '#F9B76B'});

    $('.js-slider-item').hide();
    $('.js-slider-item:nth-child('+ imgPos + ')').fadeIn();
  };
});