import React, { FC } from 'react';
import { TextareaProps } from './textarea.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const Textarea: FC<TextareaProps> = ({
    className,
    theme = 'primary',
    size = 'md',
    icon,
    placeholder,
    ...rest
}) => {
    const sizeClasses: Record<Size, string> = {
        xs: 'textarea-xs',
        sm: 'textarea-sm',
        md: 'textarea-md',
        lg: 'textarea-lg',
        xl: 'textarea-xl',
    };
    const themeClasses: Record<Theme, string> = {
        accent: 'textarea-accent',
        error: 'textarea-error',
        info: 'textarea-info',
        neutral: 'textarea-neutral',
        primary: 'textarea-primary',
        secondary: 'textarea-secondary',
        success: 'textarea-success',
        warning: 'textarea-warning',
        default: '',
    };
    const classes = classNames(
        'w-full textarea placeholder:mr-4',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        {
            'pr-10': icon,
        },
        className
    );
    return (
        <div className='relative'>
            <textarea
                placeholder={placeholder}
                className={`${classes}`}
                {...rest}
            ></textarea>
            <div className='absolute top-2 right-3'>{icon}</div>
        </div>
    );
};

export default Textarea;

