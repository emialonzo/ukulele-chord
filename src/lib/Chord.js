import React from 'react';
import * as d3 from 'd3';

class Chord extends React.Component {
    constructor(props) {
        super(props);

        this.chordRef = React.createRef();
    }

    componentDidMount = () => {
        console.log('component did mount');
        console.log(this.chordRef.current);
        d3.select(this.chordRef.current).style('color', 'red');

        // It would safer to use this instead?
        // this.chordRef.current.addEvenetListener('load', this.someLocalFunction);
        // It MAKES the difference when we are talking about img, for instance
    };

    render() {
        return (
            <div>
                <h3>Tilte of a chord</h3>
                <div ref={this.chordRef}>Look, I'm the chord per se!</div>
            </div>
        );
    }
}
export default Chord;