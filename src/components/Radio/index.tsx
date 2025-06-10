
import React, { FC } from 'react';
import { RadioProps } from './radio.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const Radio: FC<RadioProps> = ({
    theme = 'secondary',
    size = 'sm',
    name,
    id,
    checked,
    onChange,
    ...rest
}) => {
    const themeClasses: Record<Theme, string> = {
        accent: 'checkbox-accent',
        error: 'checkbox-error',
        info: 'checkbox-info',
        neutral: 'checkbox-neutral',
        primary: 'checkbox-primary',
        secondary: 'checkbox-secondary',
        success: 'checkbox-success',
        warning: 'checkbox-warning',
        default: '',
    };

    const sizeClasses: Record<Size, string> = {
        xs: 'checkbox-xs',
        sm: 'checkbox-sm',
        md: 'checkbox-md',
        lg: 'checkbox-lg',
        xl: 'checkbox-xl',
    };

    const classes = classNames(
        'radio checked:text-secondary bg-white',
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

