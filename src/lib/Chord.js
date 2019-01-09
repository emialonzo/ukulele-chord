import React from 'react';

class Chord extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount = () => {
        console.log('component did mount');
        console.log(this.chordRef.current);
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