'use client';
import React, { FC, useState } from 'react';
import Input from '.';
import { Eye, EyeClosed } from 'lucide-react';
import { InputProps } from './input.type';

const PasswordInput: FC<InputProps> = ({ ...args }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input
            type={showPassword ? 'text' : 'password'}
            icon={
                showPassword ? (
                    <EyeClosed
                        className='cursor-pointer'
                        onClick={() => setShowPassword(false)}
                    />
                ) : (
                    <Eye
                        className='cursor-pointer'
                        onClick={() => setShowPassword(true)}
                    />
                )
            }
            iconReverse
            {...args}
        />
    );
};

export default PasswordInput;
