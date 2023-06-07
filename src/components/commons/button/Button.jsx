import classNames from 'classnames';
import React from 'react';

const Button = ({txtColor, bgColor, label, padding, txtSize}) => {
    return (
        <div>
            <button className={classNames(
                `px-8 py-2 rounded-full bg-gradient-to-r from-puple via-darkblue to-skyblue`,
                txtColor,
                txtSize
                
            )}>
                {label}
            </button>
        </div>
    );
}

export default Button;
