import React from 'react';

class Chord extends React.Component {
    defs = () => {
        return (
            <defs id="defs49">
                <linearGradient id="linearGradient1010">
                    <stop id="stop1006" stopColor="#424242" offset="0"/>
                    <stop id="stop1008" stopColor="#424242" stopOpacity="0" offset="1"/>
                </linearGradient>
                <linearGradient id="c" x1=".5" x2=".5" y1=".9731">
                    <stop id="stop12" stopColor="#464646" stopOpacity="0" offset="0"/>
                    <stop id="stop14" stopColor="#424242" offset=".1854"/>
                    <stop id="stop16" stopColor="#424242" offset=".805"/>
                    <stop id="stop18" stopColor="#464646" stopOpacity="0" offset="1"/>
                </linearGradient>
                <linearGradient id="linearGradient966" x1="28.284" x2="28.284" y1="55.047"
                                gradientTransform="matrix(.70711 0 0 1.4142 32 30)" gradientUnits="userSpaceOnUse"
                                href="#c"/>
                <linearGradient id="linearGradient1012" x1="32.35" x2="32.35" y1="93.251" y2="106.51"
                                gradientTransform="translate(0,2)" gradientUnits="userSpaceOnUse"
                                href="#linearGradient1010"/>
            </defs>
        );
    };

    frets = () => {
        return [
            <path key="1" id="fret1" d="m32 45v1h40v-1z" fill="#a6a6a6"/>,
            <path key="2" id="fret2" d="m32 61v1h40v-1z" fill="#a6a6a6"/>,
            <path key="3" id="fret3" d="m32 77v1h40v-1z" fill="#a6a6a6"/>,
            <path key="4" id="fret4" d="m32 93v1h40v-1z" fill="#a6a6a6"/>,
        ];
    };

    strings = (nut = true) => {
        if (nut) {
            return [
                <path key='0' id="nut" d="m33.5 27c-0.83 0-1.5 0.67-1.5 1.5v1.5h40v-1.5c0-0.83-0.68-1.5-1.5-1.5z" fill="#424242"/>,
                <path key='4' id="string4-nut" d="m32 30v80h1v-80z" fill="url(#linearGradient1012)"/>,
                <path key='3' id="string3-nut" d="m45 30v80h1v-80z" fill="url(#linearGradient1012)"/>,
                <path key='2' id="string2-nut" d="m58 30v80h1v-80z" fill="url(#linearGradient1012)"/>,
                <path key='1' id="string1-nut" d="m71 30v80h1v-80z" fill="url(#linearGradient1012)"/>,
            ];
        }

        return [
            <path key='4' id="string4" d="m32 30v80h1v-80z" fill="url(#linearGradient966)"/>,
            <path key='3' id="string3" d="m45 30v80h1v-80z" fill="url(#linearGradient966)"/>,
            <path key='2' id="string2" d="m58 30v80h1v-80z" fill="url(#linearGradient966)"/>,
            <path key='1' id="string1" d="m71 30v80h1v-80z" fill="url(#linearGradient966)"/>,
        ];
    };

    fingers = (fretset = []) => {
        const positions = {1: 37.5, 2: 53.5, 3: 69.5, 4: 85.5};

        return (Array.isArray(fretset) && fretset.length > 0) && [
            fretset[0] !== 0 && <circle key='1' id="finger-string1" cx="71.5" cy={positions[fretset[0]]} r="5.5" fill="#424242"/>,
            fretset[1] !== 0 && <circle key='2' id="finger-string2" cx="58.5" cy={positions[fretset[1]]} r="5.5" fill="#424242"/>,
            fretset[2] !== 0 && <circle key='3' id="finger-string3" cx="45.5" cy={positions[fretset[2]]} r="5.5" fill="#424242"/>,
            fretset[3] !== 0 && <circle key='4' id="finger-string4" cx="32.5" cy={positions[fretset[3]]} r="5.5" fill="#424242"/>
        ]
    };

    fretNumber = (fretNumber = null) => {
        return fretNumber && (
            <text id="fret" x="24.9464" y="41.382812" fill="#424242" fontFamily="sans-serif" fontSize="9.733px"
                  letterSpacing="0px" strokeWidth=".24332" text-align="end" textAnchor="end" wordSpacing="0px"
                  style={{lineHeight: 1.25}} xmlSpace="preserve">
                <tspan id="fret-value" x="24.9464" y="41.382812" fill="#424242" fontSize="10.667px"
                       strokeWidth=".24332" text-align="end" textAnchor="end">{fretNumber}
                </tspan>
            </text>
        )
    };

    chordName = (chordName = null) => {
        return chordName && (
            <text id="text2727" x="52.091145" y="18.297945" fill="#424242" fontFamily="sans-serif" fontSize="13.333px"
                  letterSpacing="0px" wordSpacing="0px" style={{lineHeight: 1.25}} xmlSpace="preserve">
                <tspan id="tspan2725" x="52.091145" y="18.297945" fill="#424242" fontFamily="sans-serif"
                       fontWeight="bold" text-align="center" textAnchor="middle">{chordName}
                </tspan>
            </text>
        )
    };

    normalizeFreset = (fretset = []) => {
        const max = Math.max(...fretset);

        if (max <= 4) {
            return {
                fret: null,
                fretset: fretset
            };
        }

        const min = Math.min(...fretset.filter(number => number !== 0));
        return {
            fret: `${min}º`,
            fretset: fretset.map(number => number === 0 ? 0 : number - min + 1)
        }
    };

    buildDiagram = (chordName = null, fretset = []) => {
        const normalizedFretset = this.normalizeFreset(fretset);
        return (
            <svg id="svg153" width="104" height="118" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 118">
                {this.defs()}
                {this.frets()}
                {this.strings(normalizedFretset.fret === null)}
                {this.fingers(normalizedFretset.fretset)}
                {this.fretNumber(normalizedFretset.fret)}
                {this.chordName(chordName)}
            </svg>
        )
    };

    render() {
        return this.buildDiagram(this.props.name, this.props.fretset);
    }
}

export default Chord;