# ukulele-chord
A React component that renders ukulele chord diagrams.

It expects you to have the chord name and its numerical representation. See below.

## Installation
Run the following command:

    npm install -s ukulele-chord

## Usage

```jsx
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
```
    
## Examples
There are only two required arguments:
* `name`: the name of the chord per ser. C, F major, Emin(maj7) you name it.
* `frets`: is the numeric representation of the chord as an `array` of 4 numbers. Use `0` to represent no pressed string.

```jsx
<UkuleleChord name="C" frets={[0, 0, 0, 3]}/>
```
![C major](./chords/c-major.svg)

----

There is no need to calculate the initial chord's fret. Just set the real fret position and let the component do the rest:

```jsx
<UkuleleChord name="Db7+" frets={[6, 5, 4, 3]}/>
```

![Db augmented seventh](./chords/d-b-augmented-seventh.svg)

```jsx
<UkuleleChord name="B7" frets={[8, 6, 7, 0]}/>
```

![B seventh](./chords/b-seventh.svg)


