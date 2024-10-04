d3.csv("cleaned_5250.csv").then(function(data) {

    // Filter rows with missing values in the 'column_name' column
    var filteredData = data.filter(function(d) {
      return d.stellar_magnitude !== "";
  
    });
    filteredData.forEach(function(d) {
        d.discovery_year = +d.discovery_year;
      });
      
      // Group data by discovery year and planet type/detection method (choose one)
      var groupedData = d3.group()
        .key(function(d) { return d.discovery_year; })
        .key(function(d) { return d.planet_type; }) // or d.detection_method
        .rollup(function(v) { return v.length; })
        .entries(data);
    
    // Create the SVG element
    var svg = d3.select("#chart") // Replace with your chart container's ID
      .append("svg")
      .attr("width", 800)
      .attr("height", 600);
    
    // Create scales for x and y axes
    var xScale = d3.scaleBand()
      .domain(groupedData.map(function(d) { return d.key; }))
      .range([0, 600])
      .padding(0.2);
    
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(groupedData, function(d) { return d3.max(d.values, function(v) { return v.value; }); })])
      .range([400, 0]);
    
    // Create x and y axes
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    // Append axes to the SVG
    svg.append("g")
      .attr("transform", "translate(0, 400)")
      .call(xAxis);
    
    svg.append("g")
      .attr("transform", "translate(0, 0)")
      .call(yAxis);
    
    // Create bars for each group
    var bars = svg.selectAll(".bar")
      .data(groupedData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return xScale(d.key); })
      .attr("y", function(d) { return yScale(d3.max(d.values, function(v) { return v.value; })); })
      .attr("width", xScale.bandwidth())
      .attr("height", function(d) { return 400 - yScale(d3.max(d.values, function(v) { return v.value; })); })
      .attr("fill", "steelblue");
    
    // Add tooltip
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    
    // Add mouseover and mouseout events to bars
    bars.on("mouseover", function(d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", 0.9);
      tooltip.html("Year: " + d.key + "<br/>Count: " + d3.max(d.values, function(v) { return v.value; }))
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
    })
      .on("mouseout", function() {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });
})
// Convert discovery_year to a number for numerical sorting
