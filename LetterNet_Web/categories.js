// Get the category dropdown element
/*const categoryDropdown = document.querySelector('#categoryDropdown');

// Get the newsletters container element
const newslettersContainer = document.querySelector('#newsletters');

// Define the newsletters data
const newslettersData = {
  category1: 
    'title: Newsletter 1 for Academics, content: Lor' ,


  category2: 
    'title: Newsletter 1 for Motivation, content: Lorem ipsum dolor sit amet.' ,
  
  category3: 
    'title: Newsletter 1 for Daily Devotion, content: Lorem ipsum dolor sit amet.' ,
  
  category4: 
    'title: Newsletter 1 for Stories, content: Lorem ipsum dolor sit amet.' ,
   
}
categoryDropdown.addEventListener('change', () =>{
  const selectedCategory = categoryDropdown.value;
  newslettersContainer.innerHTML=newslettersData[selectedCategory];
});
function loadContent(){
  const categoryDropdown = document.getElementById('categoryDropdown');
  const newsletters = document.getElementById('newsletters');
  categoryDropdown.addEventListener('change', function() {
    const selectedCategory = categoryDropdown.value;
    const categories = selectedCategory.toLowerCase() + 'categories.txt';
    
    fetch(categories.txt)

    .then(response =>
      response.text())
      .then(content => {
        newsletters.textContent = content;
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
    });
  }
   */   

  const dropdown = document.getElementById("categoryDropdown");
  const contentArea = document.getElementById("newsletters");

  // Event listener for dropdown change
  dropdown.addEventListener("change", () => {
      const selectedCategory = dropdown.value;
      loadContent(selectedCategory);
  });

  // Function to load content based on selected category
  function loadContent(category) {
    console.log("selectedCategory:", category);
      // Map category values to corresponding HTML file names
      const categoryToFileName = {
          category1: "academics.html",
          category2: "motivation.html",
          category3: "daily_devotion.html",
          category4: "stories.html"
      };

      // Fetch the HTML file content
      const fileName = categoryToFileName[category];
      fetch(fileName)
          .then(response => response.text())
          .then(htmlContent => {
              infobox.innerHTML = htmlContent;

              infobox.classList.toggle("show-background", !!category);
          })
          .catch(error => {
              console.error("Error loading content:", error);
          });
  }