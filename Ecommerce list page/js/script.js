var rangeSlider = $(".price-range"),
minamount = $("#minamount"),
maxamount = $("#maxamount"),
minPrice = rangeSlider.data('min'),
maxPrice = rangeSlider.data('max');
rangeSlider.slider({
range: true,
min: minPrice,
max: maxPrice,
values: [minPrice, maxPrice],
slide: function (event, ui) {
    minamount.val('$' + ui.values[0]);
    maxamount.val('$' + ui.values[1]);
}
});
minamount.val('$' + rangeSlider.slider("values", 0));
maxamount.val('$' + rangeSlider.slider("values", 1));


//filter
const grid = document.querySelector('.filter-button button.grid');
const list = document.querySelector('.filter-button button.list');
const productView = document.querySelector('.prdov-blk');
list.onclick = function(){
    productView.classList.add('list-view');
    productView.classList.remove('grid-view');
    list.classList.add('active');
    grid.classList.remove('active');
}
grid.onclick = function(){
    productView.classList.add('grid-view');
    productView.classList.remove('list-view');
    list.classList.remove('active');
    grid.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");
    const scrollToTop = document.getElementById("scroll-to-top");
    const loader = document.getElementById("loader");
    const toastContainer = document.getElementById("toast-container");
  
    const products = [
      { id: 1, name: "Product 1", price: 139.95, image: "./images/product1-img.webp" },
      { id: 2, name: "Product 2", price: 59.95, image: "./images/product2-img.webp" },
      { id: 3, name: "Product 3", price: 14.95, image: "./images/product3-img.webp" },
      { id: 4, name: "Product 4", price: 288.00, image: "./images/product4-img.webp" },
      { id: 5, name: "Product 5", price: 49.95, image: "./images/product8-img.webp" },
      { id: 6, name: "Product 6", price: 17.50, image: "./images/product6-img.webp" },
      { id: 7, name: "Product 7", price: 139.95, image: "./images/product7-img.webp" },
      { id: 8, name: "Product 8", price: 59.95, image: "./images/product8-img.webp" },
      { id: 9, name: "Product 9", price: 14.95, image: "./images/product9-img.webp" },
      { id: 10, name: "Product 10", price: 288.00, image: "./images/product10-img.webp" },
      { id: 11, name: "Product 11", price: 49.95, image: "./images/product11-img.webp" },
      { id: 12, name: "Product 12", price: 17.50, image: "./images/product12-img.webp" },
    ];
    let cart = [];
    function renderProducts() {
      loader.style.display = "block";
      setTimeout(() => {
        products.forEach((product) => {
          const card = document.createElement("div");
          card.classList.add("product-card");
          card.innerHTML = `
            <a href="#"><img src="${product.image}" alt="${product.name}" loading="lazy"></a>
            <div class="product-details">
              <div class="product-info">
                <a href="#"><b>${product.name}</b></a>
                <p>€${product.price.toFixed(2)}</p>
              </div>
               <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>`;
          productGrid.appendChild(card);
        });
        loader.style.display = "none"; 
      }, 1000); 
    }
      productGrid.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-to-cart-btn")) {
          const button = event.target;
          const productId = button.getAttribute("data-id");
          if (!cart.includes(productId)) {
            cart.push(productId);
            button.innerHTML = "Added to Cart";
            button.classList.add("added");
            const product = products.find((p) => p.id == productId);
            showToast(product.name, product.image);
          }
        }
      });
      function showToast(productName, productImage) {
        const toast = document.createElement("div");
        toast.classList.add("toast-cart");
        toast.innerHTML = `
          <img src="${productImage}" alt="${productName}" class="toast-image">
          <div class="toast-content">
            <p><strong>${productName}</strong> added to the cart!</p>
          </div>
          <span class="toast-close">&times;</span>
        `;
        toastContainer.appendChild(toast);
        toast.querySelector(".toast-close").addEventListener("click", () => {
          toast.classList.add("hide");
          setTimeout(() => toast.remove(), 300); 
        });
    
        setTimeout(() => {
          toast.classList.add("hide");
          setTimeout(() => toast.remove(), 300); 
        }, 2000);
      }
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    });
  
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    renderProducts();
  });

  $(function (){
    $('.product-blk .row .lft .filter-mob button').click(function (){
        $(this).parents('.lft').addClass('open-filter');
        $('body').addClass('no-scroll');
    });
    $('button.hide').click(function(){
        $('.product-blk .row .lft').removeClass('open-filter');
        $('body').removeClass('no-scroll');
    })
  });

  $(document).mouseup(function (e) {
    var container = $(".product-blk .row .sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".lft").removeClass("open-filter");
      $("body").removeClass("no-scroll");
    }
  });
  

  
  
  