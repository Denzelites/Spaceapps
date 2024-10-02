// Load the CSV file
d3.csv("cleaned_5250.csv").then(function(data) {
   // Log the first three rows to the console
   console.log("First three rows of the dataset:");
   console.log(data.slice(0, 3));
 
   // Set up SVG canvas dimensions
   const width = 600;
   const height = 400;
   const margin = { top: 20, right: 30, bottom: 50, left: 60 };
 
   // Create the SVG canvas
   const svg = d3.select("#visualization-area")
     .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
     .append("g")
     .attr("transform", `translate(${margin.left},${margin.top})`);
 
   // Set up scales for the x and y axes
   const xScale = d3.scaleLinear()
     .domain([0, d3.max(data, d => +d.orbital_radius)]) // X-axis represents orbital_radius
     .range([0, width]);
 
   const yScale = d3.scaleLinear()
     .domain([0, d3.max(data, d => +d.orbital_period)]) // Y-axis represents orbital_period
     .range([height, 0]);
 
   // Create and append the axes
   svg.append("g")
     .attr("transform", `translate(0, ${height})`)
     .call(d3.axisBottom(xScale));
 
   svg.append("g")
     .call(d3.axisLeft(yScale));
 
   // Add labels to the axes
   svg.append("text")
     .attr("text-anchor", "end")
     .attr("x", width / 2)
     .attr("y", height + margin.bottom)
     .text("Orbital Radius (AU)");
 
   svg.append("text")
     .attr("text-anchor", "end")
     .attr("transform", "rotate(-90)")
     .attr("y", -margin.left + 15)
     .attr("x", -height / 2)
     .text("Orbital Period (days)");
 
   // Define a color scale based on planet type
   const colorScale = d3.scaleOrdinal()
     .domain(["Gas Giant", "Super Earth", "Neptune-like", "Terrestrial"])
     .range(["#ff7f0e", "#1f77b4", "#2ca02c", "#d62728"]);
 
   // Create the scatter plot (add circles for each planet)
   svg.selectAll("circle")
     .data(data)
     .enter()
     .append("circle")
     .attr("cx", d => xScale(+d.orbital_radius))
     .attr("cy", d => yScale(+d.orbital_period))
     .attr("r", 5)
     .style("fill", d => colorScale(d.planet_type))
     .attr("stroke", "white");
 
   // Add text labels for each point (planet name)
   svg.selectAll("text.label")
     .data(data)
     .enter()
     .append("text")
     .attr("x", d => xScale(+d.orbital_radius) + 5)
     .attr("y", d => yScale(+d.orbital_period) - 5)
     .text(d => d.name)
     .attr("font-size", "10px")
     .attr("fill", "white");
 }).catch(function(error) {
   console.error("Error loading the CSV file:", error);
 });
 