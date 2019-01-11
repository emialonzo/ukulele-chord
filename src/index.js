import React from 'react';
import ReactDOM from 'react-dom';

import Chord from './lib/Chord';

ReactDOM.render(
    <div>
        <Chord name="C"  fretset={[3,0,0,0]}/>
        <Chord name="Am" fretset={[0,0,0,2]}/>
        <Chord name="G#" fretset={[6,4,3,5]}/>
    </div>,
    document.querySelector('#root'));