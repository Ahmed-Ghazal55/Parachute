const overlayQuickView = document.querySelector('.overlay-quick-view');
const closeViewBtn = document.querySelector('#close-quickView');
var showViewBtn = document.querySelector('.quickView');

showViewBtn.addEventListener('click', function() {
  if (overlayQuickView.style.display == 'flex') {
    overlayQuickView.style.display = 'none';
  }
  else {
    overlayQuickView.style.display = 'flex'
  }
});
closeViewBtn.addEventListener('click', function() {
  if (overlayQuickView.style.display == 'flex') {
    overlayQuickView.style.display = 'none'
  }
  else {
    overlayQuickView.style.display = 'flex'
  }
})

$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 6,
  dots: false,
  arrows: true,
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
  infinite: false
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


let headFilter = document.querySelector('.head-filter');
headFilter.addEventListener("click", function () {
  if (this.querySelector('.filter-list-container').style.display === 'flex'){
    this.querySelector('.filter-list-container').style.display = 'none';
  }
  else {
    this.querySelector('.filter-list-container').style.display = 'flex';
  }
});
  

// let headFilter = document.querySelector('.head-filter');
// let filterList = headFilter.querySelector('.filter-list-container');

// if (filterList.style.display === 'flex') {
//   filterList.style.display = 'none';
// }
// else {
//   filterList.style.display = 'flex';
// }

