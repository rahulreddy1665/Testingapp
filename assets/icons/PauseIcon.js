import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const PauseIcon = props => {
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
            className="feather feather-pause"
            {...props}
        >
            <Path d="M6 4h4v16H6zM14 4h4v16h-4z" />
        </Svg>
    );
};




