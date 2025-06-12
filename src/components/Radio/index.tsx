
import React, { FC } from 'react';
import { RadioProps } from './radio.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const Radio: FC<RadioProps> = ({
    theme = 'primary',
    size = 'sm',
    name,
    id,
    checked,
    onChange,
    ...rest
}) => {
    const themeClasses: Record<Theme, string> = {
        accent: 'radio-accent',
        error: 'radio-error',
        info: 'radio-info',
        neutral: 'radio-neutral',
        primary: 'radio-primary',
        secondary: 'radio-secondary',
        success: 'radio-success',
        warning: 'radio-warning',
        default: '',
    };

    const sizeClasses: Record<Size, string> = {
        xs: 'radio-xs',
        sm: 'radio-sm',
        md: 'radio-md',
        lg: 'radio-lg',
        xl: 'radio-xl',
    };

    const classes = classNames(
        'radio',
        theme && themeClasses[theme],
        size && sizeClasses[size]
    );

    return (
        <input
            type='radio'
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            className={classes}
            {...rest}
        />
    );
};

export default Radio;

