import { ComponentBase } from '@/utils/types/components/component-base.type';
import { SelectHTMLAttributes } from 'react';

export type SelectProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'size'
> &
    ComponentBase & {
        options: OptionsType;
        labelText?: string;
    };

export type OptionsType = {
    title: string;
    options: {
        title: string;
        value: string | number;
    }[];
};
