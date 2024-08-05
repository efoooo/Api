async function categoriesData() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "Error fetching");
    return [];
  }
}
async function listed_categories() {
  try {
    const data = await categoriesData(); // Await the async function
    console.log(data); // Debugging: logs the resolved data
    const categoryWrapper = document.getElementById("category");
    // Create a <ul> element
    const ul = document.createElement("ul");
    // Generate list items and append them to the <ul>
    data.forEach((category) => {
      const a = document.createElement("a");
      const li = document.createElement("li");
      a.href = "/products?category=" + category; // Assuming category is the name of the category
      a.textContent = category;
      li.appendChild(a);
      ul.appendChild(li);
      a.style.textDecoration = "none";
      a.style.color = "black";
    });
    // Set the innerHTML of the container to the <ul> element
    categoryWrapper.innerHTML = ""; // Clear previous content
    categoryWrapper.appendChild(ul);
  } catch (error) {
    console.error("Error processing categories:", error);
  }
}
listed_categories();
