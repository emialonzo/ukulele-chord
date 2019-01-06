import React from 'react';
import * as d3 from 'd3';

class Chord extends React.Component {
    componentDidMount = () => {
        d3.selectAll("div").style('background-color', 'red');
    };

    render() {
        console.log('render');
        return <div>I'm the Chord component</div>;
    }
}
export default Chord;