$(document).ready(function(){
  var $overlayQuickView = $('.overlay-quick-view');
  var $closeViewBtn = $('#close-quickView');
  var $showViewBtn = $('.quickView');
  var $headFilter = $('.head-filter');
  var $filterHeader = $('.filter-header');

  $showViewBtn.each(function () {
    $(this).on('click', function () {
      if ($overlayQuickView.css("display", "none")) {
        $overlayQuickView.css("display", "flex")
      }
    })
  })

  $closeViewBtn.on('click', function(){
    if ($overlayQuickView.css("display", "flex")){
      $overlayQuickView.css("display", "none");
    }
  })

  $headFilter.each(function(){
    $(this).on('click', function() {
      $(this).find('.filter-list-container').toggle();
      }
    )
  })
})

function clickFilter() {
  let btnFilter = document.querySelector('#btn-filter-id');
  let allBeddingCards = document.querySelector('.all-bedding-cards');
  let filterContainer = document.querySelector('#filter');
  let closeIcon = document.querySelector('#filter-close-icon');

  if (filterContainer.style.display === 'block') {
    filterContainer.style.display = 'none';
    allBeddingCards.style.width = '100%';
    btnFilter.innerHTML = 'filter <span class="ps-3"> <i class="bi bi-funnel-fill"></i> </span>';
  }
  else {
    filterContainer.style.display = 'block';
    allBeddingCards.style.width = '81%';
    btnFilter.textContent = 'hide filter';
  }
  closeIcon.addEventListener("click", function(){
    if (filterContainer.style.display === 'block') {
      filterContainer.style.display = 'none';
      allBeddingCards.style.width = '100%';
      btnFilter.innerHTML = 'filter <span class="ps-3"> <i class="bi bi-funnel-fill"></i> </span>';
    };
  });
};

$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 6,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      }
    },
  ]
});

$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite:false
});


$('.featured').slick({
  slidesToShow:3,
  infinite: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },
  ]
});