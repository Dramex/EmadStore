// load cart
let cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];

window.onunload = function (event) {
  // save cart with unload
  localStorage.cart = JSON.stringify(cart);
};

let discountApplied = false;

// Toast alert object to be used later
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const items = [
  {
    name: "Fancy Hoodie 1",
    image: "./images/hoodie1.png",
    price: 24,
    sale: true,
  },
  {
    name: "Fancy Hoodie 2",
    image: "./images/hoodie2.jpg",
    price: 24,
  },
  {
    name: "Fancy Hoodie 3",
    image: "./images/hoodie3.png",
    price: 24,
  },
  {
    name: "Fancy Hoodie 4",
    image: "./images/hoodie4.jpeg",
    price: 24,
  },
  {
    name: "Fancy Hoodie 5",
    image: "./images/hoodie5.jfif",
    price: 24,
    sale: true,
  },
  {
    name: "Fancy Hoodie 6",
    image: "./images/hoodie6.webp",
    price: 24,
  },
  {
    name: "Fancy Hoodie 7",
    image: "./images/hoodie7.jpg",
    price: 24,
  },
  {
    name: "Fancy Hoodie 8",
    image: "./images/hoodie8.jpg",
    price: 24,
    sale: true,
  },
  {
    name: "Fancy Hoodie 9",
    image: "./images/hoodie9.jpg",
    price: 24,
  },
  {
    name: "Fancy Hoodie 10",
    image: "./images/hoodie10.jpg",
    price: 24,
  },
  {
    name: "Fancy Hoodie 11",
    image: "./images/hoodie11.jpg",
    price: 24,
    sale: true,
  },
  {
    name: "Fancy Hoodie 12",
    image: "./images/hoodie12.jfif",
    price: 24,
  },
];
const currentPage = window.location.pathname.split("/").pop();

// header && footer - so we do it once not multiple times for each page

const updateHeader = () => {
  document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Emad Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link ${
                    currentPage === "index.html" ? "active" : ""
                  }" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${
                    currentPage === "about.html" ? "active" : ""
                  }" href="./about.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${
                    currentPage === "team.html" ? "active" : ""
                  }" href="./team.html">Meet the team</a>
                </li>


                
              </ul>

              <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                  <a class="nav-link me-2 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-shopping-cart"></i> ${cart.length} Items
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      ${cart
                        .map((item) => {
                          return `<li><a class="dropdown-item" href="#">${item.name}</a></li>`;
                        })
                        .join("")}
                      <center><button type="button" onclick="clearCart();" class="btn btn-warning">Clear</button> <a href="checkout.html" class="btn btn-primary">Checkout</a></center>

                  </ul>
                 
              </li>
          </ul>
            </div>
        </div>
    </nav>`;
};
updateHeader();

document.getElementById("footer").innerHTML = `
  <!-- Grid container -->
  <div class="container p-4">

    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Twitter -->
      <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee" href="#!" role="button"><i class="fab fa-twitter"></i></a>
      <!-- Linkedin -->
      <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
      <!-- Github -->
      <a class="btn btn-primary btn-floating m-1" style="background-color: #333333" href="#!" role="button"><i class="fab fa-github"></i></a>
    </section>
    <!-- Section: Social media -->


    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <!--Grid column-->





          <!--Grid column-->
          <div class="col-md-5 col-12">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" placeholder="Email address" id="form5Example2" class="form-control" />
              <div class="inline">
                  <input type="radio" id="html" name="fav_language" value="HTML" checked>
                  <label for="html">Promitons</label>
                  <input type="radio" id="css" name="fav_language" value="CSS">
                  <label for="css">New items</label>
              </div>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-auto">

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary mb-4">
              Subscribe
            </button>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->


    <!-- Section: Text -->
    <section class="mb-4">
      <q>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        distinctio earum repellat quaerat voluptatibus placeat nam,
        commodi optio pariatur est quia magnam eum harum corrupti dicta,
        aliquam sequi voluptate quas.
      </q>
    </section>
    <!-- Section: Text -->


    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="mailto:ea@ea.sa" class="text-dark">Contact Us</a>
            </li>
            <li>
              <a href="https://ea.sa" class="text-dark">Company</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->

  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">© 2021 Copyright</div>
  <!-- Copyright -->

`;

// Home index page
if (document.getElementById("myGrid")) {
  items.forEach((item, index) => {
    const node = document.createElement("div");
    const addToCartButton = document.createElement("a");

    node.innerHTML = `
    <div class="card h-100">
    <!-- Sale badge-->
    ${
      item.sale
        ? `<div class="badge badge-sale text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>`
        : ``
    }
    <!-- Product image-->
    <img class="card-img-top" src="${item.image}" id="view-${index}">
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder"><a id="view-${index}-a">${item.name}</a></h5>
            <!-- Product reviews-->
            <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
            </div>
            <!-- Product price-->
            $${item.price}
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a id="add-${index}" class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
  </div>`;

    document.getElementById("myGrid").appendChild(node);
    document.getElementById("view-"+ index).addEventListener("click", () => viewModal(item))
    document.getElementById(`view-${index}-a`).addEventListener("click", () => viewModal(item))
    document.getElementById("add-" + index).addEventListener("click", () => {
      cart.push(item);
      Toast.fire({
        icon: "success",
        title: "added to cart successfully.",
      });
 
      updateHeader();
    });
  });
}




const viewModal = (item) => {
  console.log("hi", item)
  let modal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  });
  modal.show();
  document.getElementById("modalTitle").innerText = item.name;
  document.getElementById("modalTitle").innerText = item.name;
  document.getElementById("modalBody").innerHTML = `
  <div class="row">
  <div class="col">
    <img src="${item.image}" width="200px" />
  </div>
  <div class="col">
  <h6>Color: ${item.color || "black"}</h6>
  <h6>Price: ${item.price}</h6>
  </div>
</div>
  `;

  let addToCartButton =  document.getElementById('previewAddToCart');
  addToCartButton.replaceWith(addToCartButton.cloneNode(true)); // remove old listeners by recreating the element 
  addToCartButton = document.getElementById('previewAddToCart');

  addToCartButton.addEventListener("click", (e) => {
    console.log("added to cart", item);
    modal.hide();
    cart.push(item);
    Toast.fire({
      icon: "success",
      title: "added to cart successfully.",
    });

    updateHeader();

  })

}
const clearCart = () => {
  Toast.fire({
    icon: "success",
    title: "cart has been successfully.",
  });
  cart = [];
  updateHeader();
  updateCheckout();
}
// CHECKOUT PAGE
const promoButton = document.getElementById("promoButton");
if(promoButton) promoButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default browser behavior

  if(discountApplied) {
    promoButton.innerText = "Redeem";
    document.getElementById("promo").value = '';
    document.getElementById("promo").disabled = false;
    discountApplied = undefined;
    updateCheckout();
    return;
  }

  let code = document.getElementById("promo").value;

  if (code === "EMAD") {
    discountApplied = code;
    Toast.fire({
      icon: "success",
      title: "discount has been applied successfully.",
    });
    promoButton.innerText = "Clear Discount";
    document.getElementById("promo").disabled = true;
  } else {
    Toast.fire({
      icon: "error",
      title: "wrong coupon.",
    });
  }
  updateCheckout();
});

const delivery = (bool) => {
    if(bool) {
      document.getElementById("deliverAddress").style = "display: none";
    } else {
      document.getElementById("deliverAddress").style = "display: block";

    }
}
const updateCheckout = () => {
  const checkoutList = document.getElementById("checkoutCartList");
  if(!checkoutList) return;
  checkoutList.innerText = ""; // clear current elements
  if (!document.getElementById("cartCount").innerText) return;
  document.getElementById("cartCount").innerText = cart.length;
  // add items to checkout page
  cart.forEach((item) => {
    const node = document.createElement("li");
    node.className = "list-group-item d-flex justify-content-between lh-sm";
    node.innerHTML = `
                  <div>
                    <h6 class="my-0">${item.name}</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$${item.price}</span>`;
    checkoutList.appendChild(node);
  });
  // apply vat, discount, total
  let total = cart.map((it) => it.price).reduce((a, b) => a + b, 0);
  const vat = parseFloat(((total / 100) * 15).toFixed(2)); // i used parseFloat becouse toFixed converted the number to string
  const discount = discountApplied ? parseFloat(((total / 100) * 20).toFixed(2)) : 0;
  total = parseFloat((total + vat - discount).toFixed(2));

  checkoutList.innerHTML =
    checkoutList.innerHTML +
    `
  <li class="list-group-item d-flex justify-content-between bg-light">
    <span>VAT (+15%)</span>
    <strong>$${vat}</strong>
  </li>

  ${
    discountApplied
      ? `
  <li class="list-group-item d-flex justify-content-between bg-light">
  <div class="text-success">
  <h6 class="my-0">Promo code (-20%)</h6>
  <small>EMAD</small>
  </div>
  <span class="text-success">−$${discount}</span>
</li>
  `
      : ``
  }


  <li class="list-group-item d-flex justify-content-between bg-light">
    <span>Total (SAR)</span>
    <strong>$${total}</strong>
  </li>`;
};

processOrder = () => {
  let orderNumber = Math.floor(Math.random() * 100000);
  const container = document.getElementById("container");
  container.innerHTML = `<h3>Order number: ${orderNumber}</h3>`;
  scroll(0,0);
  Swal.fire(
    'Order has been submited successfuly!',
    `Your order number is ${orderNumber}`,
    'success'
  )

}

window.onload = () => {
  updateCheckout();
};

