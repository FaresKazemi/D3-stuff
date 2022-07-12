// @TODO: YOUR CODE HERE!


//scatter plot
//setting up margin
var svgWidth = 960;
var svgHeight = 660;
var chartMargin = {
    top:20,
    right: 40,
    bottom: 60,
    left:100,
};
var width = svgWidth - chartMargin.left - chartMargin.right;
var height = svgHeight - chartMargin.top - chartMargin.bottom;
//svg wrapper, appending svg group that will hold chart
var svg = d3.select('#scatter')
    .append("svg")
    .attr("width","svgWidth")
    .attr("height","svgHeight");
var chartGroup = svg.append("g")
    .attr("transform", 'translate(${margin.left}, ${margin.top})');


//Importing Data
d3.csv("../data/data.csv").then(function(USCensusData) {
    //Parsing Data
    USCensusData.foreach(function(data){
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
        console.log(data)
    });
})