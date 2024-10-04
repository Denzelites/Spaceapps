const dropbtn = document.getElementById('vis');
const dropbtn1 = document.getElementById('enh');
const dropbtn2 = document.getElementById('fea');
const dropdownContent = document.getElementById('visualization-options');
const dropdownLinks = dropdownContent.querySelectorAll('a');
const visualjs=document.querySelector('#visual');
dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropbtn.textContent = link.textContent;
    const jsstring = link.textContent.toLowerCase().replace(" ", "");
    visualjs.setAttribute("src", `../js/${jsstring}.js`);
   
  });
});


// Placeholder function for enhancement selection
document.querySelectorAll('#enhancements-options a').forEach(option => {
  option.addEventListener('click', () => {
    dropbtn1.textContent =option.textContent;
  });
});

// const features = ["name", "distance", "stellar_magnitude", "planet_type", "discovery_year", "mass_multiplier", "mass_wrt", "radius_multiplier", "radius_wrt", "orbital_radius", "orbital_period", "eccentricity", "detection_method"];   

// const dropdownContent1 = document.getElementById("features");

// features.forEach(feature => {
//   const link = document.createElement("a");
//   link.href = "#";
//   link.textContent = feature; 
//   dropdownContent1.appendChild(link);
//   link.addEventListener('click', () => {
//     dropbtn2.textContent =link.textContent;
//   });
// });
const features = ["name", "distance", "stellar_magnitude", "planet_type", "discovery_year", "mass_multiplier", "mass_wrt", "radius_multiplier", "radius_wrt", "orbital_radius", "orbital_period", "eccentricity", "detection_method"];
const dropdownContent1 = document.getElementById("features");
let selectedFeatures = [];

features.forEach(feature => {
const label = document.createElement("label");
const input = document.createElement("input");
input.type = "checkbox";
input.value = feature;
input.addEventListener("change", () => {
  if (input.checked) {
    if (selectedFeatures.length >= 2) {
      input.checked = false;
      alert("You can only select two features at a time.");
    } else {
      selectedFeatures.push(feature);
    }
  } else {
    selectedFeatures = selectedFeatures.filter(f => f !== feature);
  }
});
label.appendChild(input);
label.appendChild(document.createTextNode(feature));
dropdownContent.appendChild(label);
});

