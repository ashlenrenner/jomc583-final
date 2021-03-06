var margin = {top: 40, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


//var formatPercent = d3.format(".0%");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    //.tickFormat(formatPercent);


var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return d.county + "<br><strong>MGD:</strong> <span style='color:#6abee1'>" + d.mgd + "</span>";

  });

var svg = d3.select("#barChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);
//This causes an error "d3.tip.v0.6.3.js:225 Uncaught TypeError: Cannot read property 'tagName' of null" that could not be resolved,
//but doesn't affect the functionality of the app

d3.json("/data/waterUse.json", function(error, data) {
  x.domain(data.map(function(d) { return d.county; }));
  y.domain([0, d3.max(data, function(d) { return d.mgd; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Millions of Gallons/Day");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.county); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.mgd); })
      .attr("height", function(d) { return height - y(d.mgd); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});

function type(d) {
  d.mgd = +d.mgd;
  return d;
}

//liquidGraph
var gauge1 = loadLiquidFillGauge("fillgauge1", 87);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#2c374b";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#5ca7c7";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 5000;

    function clickValue(){
      //  if(Math.random() > .5){
      //      return Math.round(Math.random()*100);
      //  } else {
      //      return (Math.random()*100).toFixed(1);
      //  }
    //  loadLiquidFillGauge("fillgauge1", 57);
   }
