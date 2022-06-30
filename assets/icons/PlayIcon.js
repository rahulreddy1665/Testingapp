import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const PlayIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={36}
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-play"
            {...props}
        >
            <Path d="m5 3 14 9-14 9V3z" />
        </Svg>
    );
};




