import React, { FC } from 'react';
import { BadgeProps, BadgeVariant } from './badge.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const variantClasses: Record<BadgeVariant, string> = {
    dash: 'badge-dash',
    outline: 'badge-outline',
    soft: 'badge-soft',
    default: '',
};
const themeClasses: Record<Theme, string> = {
    accent: 'badge-accent',
    error: 'badge-error',
    info: 'badge-info',
    neutral: 'badge-neutral',
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    warning: 'badge-warning',
    default: '',
};
const sizeClasses: Record<Size, string> = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: '',
    lg: 'badge-lg',
    xl: 'badge-xl',
};
const iconProps = { size: 16 };

const variantDefaultIcons: Partial<Record<Theme, React.ReactNode>> = {
    error: <XCircle {...iconProps} />,
    info: <Info {...iconProps} />,
    success: <CheckCircle {...iconProps} />,
    warning: <AlertTriangle {...iconProps} />,
};

const Badge: FC<BadgeProps> = ({
    children,
    variant = 'default',
    size = 'md',
    theme = 'primary',
    classname,
    showIcon,
}) => {
    const classes = classNames(
        'badge',
        {
            [`${variantClasses[variant]}`]: variant,
        },
        { [`${sizeClasses[size]}`]: size },
        { [`${themeClasses[theme]}`]: theme },
        classname,
    );
    return (
        <div className={classes}>
            {showIcon && variantDefaultIcons[theme]}
            {children}
        </div>
    );
};

export default Badge;
