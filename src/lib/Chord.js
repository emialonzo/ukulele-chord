import React from 'react';
import * as d3 from 'd3';

class Chord extends React.Component {
    constructor(props) {
        super(props);

        this.chordRef = React.createRef();
        this.gridRef = React.createRef();
    }

    gridData() {
        const [width, height] = [25, 25];
        let [data, xpos, ypos] = [[], 25, 30];

        // iterate for rows
        for (let row = 0; row < 4; row++) {
            data.push([]);

            // iterate for cells / columns inside row
            for (let column = 0; column < 3; column++) {
                data[row].push({
                    x: xpos,
                    y: ypos,
                    width: width,
                    height: height
                });
                // increment the x position. i.e mov it over by 50 (width variable)
                xpos += width;
            }
            // reset the x position after a row is complete
            xpos = 25;
            // increment the y position for the new row. move it down 50 (height variable)
            ypos += height;
        }
        return data;

    };


    componentDidMount = () => {
        console.log('component did mount');
        console.log(this.chordRef.current);
        d3.select(this.chordRef.current).style("color", function() {
            return "hsl(" + Math.random() * 360 + ",100%,100%)";
        });

        const gridData = this.gridData();
        console.log(gridData);

        // It would safer to use this instead?
        // this.chordRef.current.addEvenetListener('load', this.someLocalFunction);
        // It MAKES the difference when we are talking about img, for instance

        const grid = d3.select(this.gridRef.current)
            .append("svg")
            .attr("width", "300px")
            .attr("height", "300px")
            .style("border", "1px solid black");


        const row = grid.selectAll(".row")
            .data(gridData)
            .enter().append("g")
            .attr("class", "row");

        const column = row.selectAll(".square")
            .data(d => d)
            .enter().append("rect")
            .attr('class', 'square')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('width', d => d.width)
            .attr('height', d => d.height)
            .attr('shape-rendering', 'crispEdges')
            .style('fill', 'white')
            .style('stroke', 'black');

        d3.select("svg")
            .append('circle')
            .attr('cx', 25)
            .attr('cy', 66)
            .attr('r', 8);

        d3.select("svg")
            .append('circle')
            .attr('cx', 49)
            .attr('cy', 20)
            .attr('r', 5)
            .style('fill', 'white')
            .style('stroke', 'black');

        d3.select("svg")
            .append('circle')
            .attr('cx', 74)
            .attr('cy', 20)
            .attr('r', 5)
            .style('fill', 'white')
            .style('stroke', 'black');

        d3.select("svg")
            .append('circle')
            .attr('cx', 98)
            .attr('cy', 20)
            .attr('r', 5)
            .style('fill', 'white')
            .style('stroke', 'black');

    };

    render() {
        return (
            <div>
                <h3>Tilte of a chord</h3>
                <div ref={this.chordRef}>Look, I'm the chord per se!</div>
                <div ref={this.gridRef}/>
            </div>
        );
    }
}
export default Chord;