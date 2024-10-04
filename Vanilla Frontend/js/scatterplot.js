// Load the CSV data
d3.csv("cleaned_5250.csv").then(function(data) {

  // Filter rows with missing values in the 'column_name' column
  var filteredData = data.filter(function(d) {
    return d.stellar_magnitude !== "";

  });
  console.log(filteredData.slice(0, 20));})