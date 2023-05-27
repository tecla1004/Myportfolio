import classNames from 'classnames';
import React from 'react';

const Button = ({txtColor, bgColor, label, padding}) => {
    return (
        <div>
            <button className={classNames(
                `px-${padding} py-2 rounded-full`,
                bgColor || 'bg-gradientBtn',
                
            )}>
                {label}
            </button>
        </div>
    );
}

export default Button;
