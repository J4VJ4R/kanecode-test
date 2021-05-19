
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
  //nextSlider is about change slider on home
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
  //changes about inputs on form to show password
  $('.js-form-eye').on('click', function(){
    let pass = $('.js-input-password').attr('type');
    let action = $('.js-input-password').attr('action');
    if(pass == 'password'){
      $('.js-input-password').attr('type', 'text')
        .add().attr('action', 'show');
      $('.js-form-eye').attr('src', './img/eye-open.svg');
      
    }
    if(action == 'show'){
      $('.js-input-password').attr('type', 'password');
      $('.js-input-password').add().attr('action', 'hide')
      $('.js-form-eye').attr('src', './img/close-eye.svg');
    }
  });
  //validating fields on form
  $('.js-form-button-secondary').on('click', function(){

    let email = $('.js-input-email').val();
    let pass = $('.js-input-password').val();
    
    if(email == ""){
      $('.js-input-email').addClass('form__error-email');
      $('.js-label-email').css({'color': '#EE5253'});
      $('.js-label-error-email').css({'display': 'block'});
      return false
    }
    if(pass == ""){
      $('.js-input-password').addClass('form__error-password');
      $('.js-label-pass').css({'color': '#EE5253'});
      $('.js-label-error-password').css({'display': 'block'});
      $('.js-form-eye').remove();
      return false;
    }
  })
  //dashboard
  //active buttons on menu left
  $(document).on('click', 'li', function(){
    $(this).addClass('nav__link--active').siblings().removeClass('nav__link--active');
    $('.js-nav-link').removeClass('nav__link--active');
    $('.js-nav-icon').removeClass('nav__icon--active');
  })
  //section slider on results
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
//burger menu
$('.js-icon-nav').on('click', function(){
  $(this).css('display', 'none');
  $('.js-icon-nav-2').addClass('nav__icon--small');
});
$('.js-icon-nav-2').on('click', function(){
  $(this).css('display', 'none');
  $('.js-icon-nav').css('display', 'block');
})
});
//section charts
let ctx = document.getElementById('chart1').getContext('2d');
let chartCircle = document.getElementById('chart-circle').getContext('2d');
//circle chart
const chartCircle1 = new Chart(chartCircle, {
  type: 'doughnut',
  data:{

    datasets: [{
      backgroundColor: [
        '#AEDDEB',
        '#6C5DD3'
      ],
      data: [4, 12],
      hoverOffset: 0,
      radius: 70,
    }]
  }
});
//bar chart
let chart2 = new Chart(ctx, {
  type: 'bar',
  data:{
    labels: ['Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar'],
    datasets:[{
      label: 'Nuevos',
      backgroundColor: 'rgba(117, 131, 222, 1)',
      data:[10, 9, 30, 33, 5, 16],
      "borderWidth":"0"
    },
    {
      backgroundColor: '#AEDDEB',
      data:[11, 8, 12, 16, 5, 18],
      label: 'Recurrentes',
    }],
    
  },
  options: {
    scales: {
      
      y: {
        grid: {
          display: false,
          borderColor: 'transparent'
        }
      },
      x: {
        grid: {
          display: false,
          borderColor: 'transparent'
        }
      }
    },
    plugins: {      
      legend: {
        display: false,
      }
    },
    
  },
  
});
