Project Overview
This project is an interactive e-commerce webpage that includes a range of features for filtering, adding to cart, product views, and animations. Below is a detailed explanation of the structure, functionality, and design elements of the project.

Features

1. Price Range Slider

The price range slider is initialized using jQuery UI Slider.
Minimum and maximum values are dynamically fetched from data-min and data-max attributes.
Updates the min and max price input fields in real time.
Relevant code snippet:
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

2. Grid and List View Toggle

Toggles between grid and list views for product display.
Adds or removes respective classes grid-view and list-view for the container.
Relevant code snippet:
list.onclick = function() {
    productView.classList.add('list-view');
    productView.classList.remove('grid-view');
    list.classList.add('active');
    grid.classList.remove('active');
};
grid.onclick = function() {
    productView.classList.add('grid-view');
    productView.classList.remove('list-view');
    list.classList.remove('active');
    grid.classList.add('active');
};

3. Product Rendering and Add to Cart

Products are dynamically rendered using the products array.
Add to Cart button adds items to the cart and changes its text to Added to Cart.
Displays a toast notification with product image and name.
Relevant code snippet:
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

4. Toast Notifications

Displays a toast notification when a product is added to the cart.
Includes a product image, name, and a close button.
Auto-dismisses after 3 seconds with fade-out animation.
Relevant code snippet:
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
    }, 3000);
}

5. Loader Animation

Displays a loader animation while the product data is being rendered.
Loader is hidden once rendering is complete.
Animation styles can be customized using CSS keyframes.

6. Mobile Filter Toggle

Opens and closes the sidebar filter menu on mobile view.
Adds or removes the no-scroll class to the body for preventing background scrolling.
Relevant code snippet:
$(function() {
    $('.product-blk .row .lft .filter-mob button').click(function() {
        $(this).parents('.lft').addClass('open-filter');
        $('body').addClass('no-scroll');
    });
    $('button.hide').click(function() {
        $('.product-blk .row .lft').removeClass('open-filter');
        $('body').removeClass('no-scroll');
    });
});

CSS Enhancements

1. Toast Notification Animations
.toast-cart {
    animation: fadeIn 0.3s ease, fadeOut 0.3s ease 3s;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes fadeOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
}
2. Loader Keyframes
.loader {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
3. Grid/List View Styling
.grid-view .product-card {
    width: 30%;
    margin: 1%;
}
.list-view .product-card {
    width: 100%;
    display: flex;
}
.list-view .product-card img {
    width: 30%;
    margin-right: 20px;
}

File Structure

index.html: Contains the structure of the webpage.
style.css: Contains all the styling for the page.
script.js: Contains all the JavaScript for functionality and interactivity.
images/: Folder containing all product images.



