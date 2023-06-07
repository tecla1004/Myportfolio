import classNames from 'classnames';
import React from 'react';

const Box = ({width, height, rotate, right, top, position, backgroundColor, borderColor, border, round}  ) => {
    return (
        <div className={classNames(
            // "w-300 h-300",
            // `w-${width} h-${height}`,
            width, height,top, right,
            border || 'border-0',
            round,
            right || "right-0",
            top || "top-0",
            position,
            rotate || "rotate-0",
            backgroundColor || "none",
            borderColor || "black"
        )}>
            
        </div>
    );
}

export default Box;
