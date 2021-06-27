
$(document).ready(function () {
  //dropdown下拉式選單
  $(".dropdown").click(function (event) {//點擊事件
    event.preventDefault();
    $(".dropdown").toggleClass("active");
    $(".dropdown-open").slideToggle();
  });

  //topIcon錨點 拉到最上面按鈕
  $(".topIcon").click(function (event) {//點擊事件
    event.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 2000);
  });

  //lightbox圖片燈箱
  lightbox.option({
    'albumLabel': "圖 %1",
    'positionFromTop': 300,
    'wrapAround': true,
  })

  //banner輪播
  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});