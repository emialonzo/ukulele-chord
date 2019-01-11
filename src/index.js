import React from 'react';
import ReactDOM from 'react-dom';

import UkuleleChord from './lib/UkuleleChord';

ReactDOM.render(
    <div>
        <UkuleleChord name="C"  frets={[3, 0, 0, 0]}/>
        <UkuleleChord name="Am" frets={[0, 0, 0, 2]}/>
        <UkuleleChord name="G#" frets={[6, 4, 3, 5]}/>
    </div>,
    document.querySelector('#root'));