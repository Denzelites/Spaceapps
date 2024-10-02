document.addEventListener('DOMContentLoaded', function() {
  // Placeholder function for visualization selection
  document.querySelectorAll('#visualization-options a').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const visualjs=document.querySelector('#visual');
      const jsstring = this.textContent.toLowerCase().replace(" ", "");;
      visualjs.setAttribute("src", `../js/${jsstring}.js`)
      
      alert(`Selected Visualization: ${jsstring}`);
      // Here we will call the function to generate the appropriate D3.js visualization
    });
  });

  // Placeholder function for enhancement selection
  document.querySelectorAll('#enhancements-options a').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const enhancement = this.textContent;
      alert(`Selected Enhancement: ${enhancement}`);
      // Here we will call the function to apply the chosen enhancement to the visualization
    });
  });
});
