// Replace with your Unsplash API key
const accessKey = "3PRRZ0BmtlEUdjPmYDZPNbuSVmgu2ebpiFEVgW_5nAc";
// Get references to HTML elements
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

// Initialize variables for keyword and pagination
let keyword = "";
let page = 1;

// Function to search for images based on the keyword
async function searchImages(){
    // Get the keyword from the search box
    keyword = searchBox.value;
        // Construct the API request URL with query parameters
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    // Fetch data from the Unsplash API
    const response = await fetch(url);
    // Parse the JSON response
    const data = await response.json();

    // If it's the first page, clear previous results
    if(page === 1) {
        searchResult.innerHTML = "";
    }

    // Extract the results from the data
    const results = data.results;

     // Loop through each result and create image elements
    results.map((result) =>{
        // Create an image element
        const image = document.createElement("img");
        image.src = result.urls.small;
        // Create a link element for the image
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        // Append the image to the link
        imageLink.appendChild(image);
        // Append the link to the search results container
        searchResult.appendChild(imageLink);
    })
    // Show the "Show More" button after the first search
    showMoreBtn.style.display = "block";
}

// Event listener for the search form submission
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

// Event listener for the "Show More" button
showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})
