import React from 'react';

class Chord extends React.Component {
    constructor(props) {
        super(props);

    }

    svg = <svg width="104" height="118" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 118">
        <title>ukulele chord</title>
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
        <path id="fret1" d="m32 45v1h40v-1z" fill="#a6a6a6"/>
        <path id="fret2" d="m32 61v1h40v-1z" fill="#a6a6a6"/>
        <path id="fret3" d="m32 77v1h40v-1z" fill="#a6a6a6"/>
        <path id="fret4" d="m32 93v1h40v-1z" fill="#a6a6a6"/>
        <path id="string4" d="m32 30v80h1v-80z" fill="url(#linearGradient966)"/>
        <path id="string3" d="m45 30v80h1v-80z" fill="url(#linearGradient966)"/>
        <path id="string2" d="m58 30v80h1v-80z" fill="url(#linearGradient966)"/>
        <path id="string1" d="m71 30v80h1v-80z" fill="url(#linearGradient966)"/>
        <path id="nut" d="m33.5 27c-0.83 0-1.5 0.67-1.5 1.5v1.5h40v-1.5c0-0.83-0.68-1.5-1.5-1.5z" fill="#424242"/>
        <path id="string4-nut" d="m32 30v80h1v-80z" fill="url(#linearGradient1012)"/>
        <path id="string3-nut" d="m45 30v80h1v-80z" fill="url(#linearGradient1012)"/>
        <path id="string2-nut" d="m58 30v80h1v-80z" fill="url(#linearGradient1012)"/>
        <path id="string1-nut" d="m71 30v80h1v-80z" fill="url(#linearGradient1012)"/>
        <circle id="finger-string1" cx="71.5" cy="85.5" r="5.5" fill="#424242"/>
        <circle id="finger-string2" cx="58.5" cy="69.5" r="5.5" fill="#424242"/>
        <circle id="finger-string3" cx="45.5" cy="53.5" r="5.5" fill="#424242"/>
        <circle id="finger-string4" cx="32.5" cy="37.5" r="5.5" fill="#424242"/>
        <text id="chord-name" x="32.652344" y="18.894535" fill="#424242" fontFamily="sans-serif" fontSize="14.781px"
              letterSpacing="0px" strokeWidth=".36952" wordSpacing="0px" style={{lineHeight: '1.25'}}
              xmlSpace="preserve">
            <tspan id="chord-name-value" x="32.652344" y="18.894535" fill="#424242" fontSize="16px"
                   strokeWidth=".36952">A#m
            </tspan>
        </text>
        <text id="fret" x="2.0141068" y="42.353516" fill="#424242" fontFamily="sans-serif" fontSize="9.733px"
              letterSpacing="0px" strokeWidth=".24332" wordSpacing="0px" style={{lineHeight: '1.25'}}
              xmlSpace="preserve">
            <tspan id="fret-value" x="2.0141068" y="42.353516" fill="#424242" fontSize="13.333px"
                   strokeWidth=".24332">13º
            </tspan>
        </text>
    </svg>;

    componentDidMount = () => {
        console.log('component did mount');
        // console.log(this.chordRef.current);
    };

    render() {
        return (
            <div>
                <h3>Tilte of a chord</h3>
                <div ref={this.chordRef}>Look, I'm the chord per se!</div>
                <div ref={this.gridRef}/>
                {this.svg}
            </div>
        );
    }
}
export default Chord;