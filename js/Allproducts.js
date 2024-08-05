async function allProductsFetch() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "Error fetching");
    return [];
  }
}
async function fetchedProducts() {
  try {
    const data = await allProductsFetch();

    const productsWrapper = document.getElementById("productswrapper");

    const allProductsHtml = data
      .map((item) => {
        return `
        <div key="${item.id}" class="single_item">
          <h1>${item.category}</h1>
          <h3>${item.title}</h3>
          <img src="${item.image}" class = "image"alt="${item.title}">
        </div>
      `;
      })
      .join("");

    // Set the innerHTML of the container
    productsWrapper.innerHTML = allProductsHtml;
  } catch (error) {
    console.error("Error processing products:", error);
  }
}

// Call the function to execute it
fetchedProducts();
