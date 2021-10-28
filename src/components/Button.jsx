import React from 'react'
import cn from 'classnames'

const Button = ({onClick, className, outline, children}) => {
    return (
        <button onClick={onClick} className={cn('button',className,{
            'button--outline':outline,
        })}>{children}</button>
    )
}

export default Button
