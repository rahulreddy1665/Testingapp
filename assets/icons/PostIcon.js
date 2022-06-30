import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export const PostIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-clipboard"
            {...props}
        >
            <Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <Rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
        </Svg>
    );
};


