import React from 'react';
import ReactDOM from 'react-dom';

import UkuleleChord from './lib/UkuleleChord';

ReactDOM.render(
    <div>
        <UkuleleChord name="C" frets={[3, 0, 0, 0]}/>
        <UkuleleChord name="Db7+" frets={[3, 4, 5, 6]}/>
        <UkuleleChord name="B7" frets={[0, 7, 6, 8]}/>
    </div>,
    document.querySelector('#root')
);