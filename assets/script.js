$(document).ready(function(){
  var $overlayQuickView = $('.overlay-quick-view');
  var $closeViewBtn = $('#close-quickView');
  var $showViewBtn = $('.quickView');
  var $filterHeader = $('.filter-header');
  // var $headFilter = $('.head-filter');
  // var $filterHeadIcon = $('.filter-head-icon .bi');


  $showViewBtn.each(function () {
    $(this).on('click', function () {
      $overlayQuickView.toggle();
    })
    $closeViewBtn.on('click', function(){
      $overlayQuickView.toggle();
    })
  })

  $filterHeader.each(function(){
    $(this).on('click', function() {
      // $(this).find('.filter-list-container').toggle();
      $(this).next().toggle('');
      $(this).find('.filter-head-icon .bi-plus').hide('');
      $(this).find('.filter-head-icon .bi-plus').show();
      $(this).find('.filter-head-icon .bi-dash').show('');
      $(this).find('.filter-head-icon .bi-dash').hide();
      }
    )
  })

  $('.btn-select').on('click', function(){
    $('.product-overlay').show();
    $('.close-quickView').click(function(){
      $('.product-overlay').hide();
    })
  })


  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 4000
  });
  
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



const products = [
  {
    id: 0,
    imgs: ['classic-turkish-cotton-towels_blush_detail_0384.jpg', 'classic-turkish-cotton-towels_blush_lightbox_0194.jpg'],
    name: 'Classic Turkish Cotton Towels',
    size: 'lareg',
    price: 45,
  },
  {
    id: 1,
    imgs: ['classic-turkish-cotton-towels_blush_detail_0384.jpg', 'classic-turkish-cotton-towels_blush_lightbox_0194.jpg'],
    name: 'Classic Turkish Cotton',
    size: 'x-lareg',
    price: 40,
  },
  {
    id: 2,
    imgs: ['classic-turkish-cotton-towels_blush_detail_0384.jpg', 'classic-turkish-cotton-towels_blush_lightbox_0194.jpg'],
    name: 'Classic Turkish',
    size: 'xx-lareg',
    price: 35,
  },
];
const categories = [...new Set(products.map((item)=>
  {return item}))]
  let i = 0;

document.querySelector(".product-overlay").innerHTML = categories.map((item)=>
{
  var {imgs, name, size, price} = item;
  return(
    `<i class="bi bi-x-circle close-quickView"></i>
      <div class="single-img single-item m-1 p-2">
        <div class="single-img-con">
          <img src="assets/imgs/${imgs[0]}" alt="">
        </div>
        <div class="single-img-con">
          <img src="assets/imgs/${imgs[1]}" alt="">
        </div>
      </div>
      <div class="text-quick-view">
        <h2 class="text-dark text-start text-capitalize fw-bold">
          ${name}
        </h2>
        <p class="lead">
          $ ${price}
          <br>
          Lorem ipsum dolor sit amet.
          <a href="" class="text-muted">learn more</a>
        </p>
        <p class="text-dark text-capitalize">size: <span class="text-muted">choose one</span></p>
        <div class="btns-quick-ivew-size">
          <button class="btn btn-light">${size}</button>
        </div>
        <p class="text-muted text-capitalize d-flex flex-row w-100 align-items-center">
          <i class="fa fa-ruler-horizontal"></i> 
          size guide
        </p>

        <ul class="list-unstyled list-colors">
          <li class="color-name">color: wihte</li>
          <li class="color">
            <button class="thems active" role="button">
              <svg viewBox="0 0 250 250" height="45px" width="45px">
                <circle cy="125" cx="125" r="100" stroke="#000" stroke-width="10" fill="#fff"></circle>
              </svg>
            </button>
            <button class="thems" role="button">
              <svg viewBox="0 0 250 250" height="45px" width="45px">
                <circle cy="125" cx="125" r="100" stroke="#000" stroke-width="10" fill="#0aa"></circle>
              </svg>
            </button>
            <button class="thems" role="button">
              <svg viewBox="0 0 250 250" height="45px" width="45px">
                <circle cy="125" cx="125" r="100" stroke="#000" stroke-width="10" fill="#888"></circle>
              </svg>
            </button>
            <button class="thems" role="button">
              <svg viewBox="0 0 250 250" height="45px" width="45px">
                <circle cy="125" cx="125" r="100" stroke="#000" stroke-width="10" fill="#ec1"></circle>
              </svg>
            </button>
          </li>
        </ul>` + 
        "<button type='button' class='btn btn-secondary text-uppercase btn-addToCart' onclick='addToCart("+(i++)+")'>" + "add to cart" + "</button>" + 
        `<h6 class="py-4 pb-0">
          <a href="" class="text-dark text-capitalize">view full details</a>
        </h6>
      </div>`
  )
}).join('');

var cart = [];

function addToCart(a) {
  cart.push({...categories[a]});
  displayCart();
}

function deletCart(a){
  cart.splice(a, 1);
  displayCart();
}

function displayCart(a){
  let j = 0;
  if(cart.length==0) {
    document.getElementById('myCart').innerHTML = `
    <div class="p-2 empty">
      <h1>
        your cart is empty
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, dolor?
      </p>
      <div class="container col-lg-6 col-md-10 col-sm-12">
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, esse!
        </h6>
        <div class="row w-100 justify-content-center align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-10 justify-content-center">
            <img src="assets/imgs/classic-turkish-cotton-towels_blush_lightbox_0194.jpg" alt="" class="img-fluid">
          </div>
          <div class="col-lg-6 col-md-8 col-sm-10 justify-content-center">
            <p class="d-flex flex-row">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, laudantium?
            </p>
            <button type="button" class="btn btn-select">
              select + add to cart
            </button>
          </div>
        </div>
      </div>
      <a class="btn btn-shop" href="shop.html">
        shop now
      </a>
    </div>`
  }
  else {
    document.getElementById('myCart').innerHTML = cart.map((items)=>{
      var {imgs, name, size, price} = items;
      var total = 0 ;
      total += price;
      return(
        `
        <div class="my-carts w-100 p-1 m-1">
          <div class="col p-1 h-100">
            <div class="row w-100 h-100">
              <div class="col-lg-8 col-md-8 col-sm-12">
                <div class="container col-12 select-add">
                  <h6 class="col-12">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, esse!
                  </h6>
                  <div class="row w-100 justify-content-center align-items-center">
                    <div class="col-lg-3 col-md-3 col-sm-10 justify-content-center">
                      <img src="assets/imgs/classic-turkish-cotton-towels_blush_lightbox_0194.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-10 justify-content-center">
                      <p class="d-flex flex-row">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, laudantium?
                      </p>
                      <button type="button" class="btn btn-select">
                        select + add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-100 p-3 d-flex flex-row justify-content-between border-bottom">
                  <h2 class="text-muted text-capitalize">cart</h2>
                  <h5 class="text-muted">( ${cart.length} Items )</h5>
                </div>
                <div class="cart-item p-2">
                  <div class="row h-100">
                    <div class="col-3 p-1 d-flex flex-column align-items-center h-100">
                      <img src="assets/imgs/${imgs[0]}" alt="" class="img-fluid h-75">
                    </div>
                    <div class="p-2 col-6 d-flex flex-column justify-content-center align-items-start text-muted">
                      <h5>${name}</h5>
                      <br>
                      <h6 class="small">${size}</h6>
                    </div>
                    <div class="col d-flex flex-column text-end justify-content-between">` +
                      "<button class='btn-close ms-auto' onclick='deletCart("+(j++)+")'> </button>" +
                      `<h6 class="small">
                        $ ${price}
                        <br>
                        <span class="text-capitalize">final sale</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-3 col-lg-4 col-md-4 col-sm-12 micro-checkout">  
                <div class="row">
                  <div class="col-12">
                    <div class="summary">
                      <h2>
                        <p>summary</p>
                      </h2>
                      <h6>
                        <p>subtotal</p>
                        <p>$ 7</p>
                      </h6>
                      <h6>
                        <p>shipping</p>
                        <p>calculated at next step</p>
                      </h6>
                      <h6>
                        <p>tax</p>
                        <p>calculated at next step</p>
                      </h6>
                    </div>
                    <div class="total">
                      <p>total</p>
                      <p>usd <strong>$ ${total}</strong></p>
                    </div>
                    <div class="btns">
                      <a class="btn" href="checkout.html">
                        checkout
                      </a>
                      <a class="btn">
                        express checkout
                      </a>
                    </div>
                    <div class="free text-capitalize p-2 bg-body-secondary">
                      <h5 class="text-center p-2">
                        Free Carbon Neutral Shipping + Returns
                      </h5>
                      <p class="text-start text-wrap">
                        We're Climate Neutral certified, which means we offset our emissions on everything from product to shipping. Learn More
                        <br>
                        If you are unsatisfied with your purchase for any reason, we are happy to accept returns within 60 days (excludes final sale items).
                        <br>
                        White glove delivery fees, expedited and oversize shipping fees cannot be refunded.
                        <br>
                        Select furniture items are subject to restocking fees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
      )
    }).join('');
  }
}

