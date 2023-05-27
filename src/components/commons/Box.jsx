import classNames from 'classnames';
import React from 'react';

const Box = ({width, height, rotate, right, top, position, backgroundColor, borderColor}  ) => {
    return (
        <div className={classNames(
            `w-${width} h-${height} border-2`,
            right ? `right-${right}` : "right-0",
            top ? `top-${top}` : "top-0",
            position ||  "static",
            rotate || "rotate-0",
            backgroundColor || "bg-white",
            borderColor || "white"
        )}>
            
        </div>
    );
}

export default Box;
