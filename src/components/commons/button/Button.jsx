import classNames from 'classnames';
import React from 'react';

const Button = ({txtColor, bgColor}) => {
    return (
        <button className={classNames(
            
            txtColor, bgColor,
        )}>
            Explore Projects
        </button>
    );
}

export default Button;
