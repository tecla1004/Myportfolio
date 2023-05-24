import classNames from 'classnames';
import React from 'react';

const Button = ({txtColor, bgColor, label}) => {
    return (
        <div>
            <button className={classNames(
                'px-4 py-2 rounded-full',
                bgColor
            )}>
                {label}
            </button>
        </div>
    );
}

export default Button;
