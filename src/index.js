import React from 'react';
import ReactDOM from 'react-dom';

import UkuleleChord from './lib/UkuleleChord';

ReactDOM.render(
    <div>
        <UkuleleChord name="C" frets={[0, 0, 0, 3]}/>
        <UkuleleChord name="Db7+" frets={[6, 5, 4, 3]}/>
        <UkuleleChord name="B7" frets={[8, 6, 7, 0]}/>
    </div>,
    document.querySelector('#root')
);