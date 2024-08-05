async function getProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  if (productId) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const product = await response.json();
      const productDetails = document.getElementById("product-details");

      productDetails.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}" />
          `;
    } catch (error) {
      console.error("Error fetching product details:", error);
      document.getElementById("product-details").innerHTML =
        "<p>Error loading product details.</p>";
    }
  } else {
    document.getElementById("product-details").innerHTML =
      "<p>No product ID specified.</p>";
  }
}
getProductDetails();
