import React, { FC } from 'react';
import classNames from 'classnames';
import './style.css';

import { Size, Theme } from '@/utils/types/components/component-base.type';
import { InputProps } from './input.type';

const sizeClasses: Record<Size, string> = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
    xl: 'input-xl',
};

const themeClasses: Record<Theme, string> = {
    accent: 'input-accent',
    error: 'input-error',
    info: 'input-info',
    neutral: 'input-neutral',
    primary: 'input-primary',
    secondary: 'input-secondary',
    success: 'input-success',
    warning: 'input-warning',
    default: '',
};

const Input: FC<InputProps> = ({
    className,
    type = 'text',
    theme = 'primary',
    size = 'md',
    icon,
    isAnimated,
    animatedText,
    iconReverse = false,
    labelText,
    errors,
    name,
    hideError,
    ...rest
}) => {
    const message = name && errors?.[name]?.message;

    const classes = classNames(
        'input w-full',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        {
            ['floating-label']: isAnimated,
        },
        className,
    );

    return (
        <div className='fieldset'>
            {labelText && (
                <legend className='fieldset-legend'>{labelText}</legend>
            )}
            <label className={classes}>
                {isAnimated && <span>{animatedText ?? rest.placeholder}</span>}
                {!iconReverse && icon}
                <input type={type} name={name} {...rest} />
                {iconReverse && icon}
            </label>
            {!hideError && message && (
                <p className='text-error text-sm mt-1'>{String(message)}</p>
            )}
        </div>
    );
};

export default Input;
