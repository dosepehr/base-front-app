import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Dnd from '.';
const meta: Meta<typeof Dnd> = {
    title: 'Components/Dnd',
    component: Dnd,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'accent',
                'info',
                'success',
                'warning',
                'error',
                'neutral',
                'default',
            ],
        },
        showDetails: {
            control: 'boolean',
        },
        allowMultiple: {
            control: 'boolean',
        },
        enableDelete: {
            control: 'boolean',
        },
        enableDownload: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Dnd>;

const defaultChildren = (
    <div className='text-white bg-primary border-secondary border-dashed rounded-xl text-sm p-4'>
        <strong>Click or drop PDF file here</strong>
    </div>
);

export const SingleFileUpload: Story = {
    args: {
        children: defaultChildren,
        showDetails: true,
        theme: 'primary',
        maxFiles: 1,
        allowMultiple: false,
        enableDelete: true,
        enableDownload: true,
    },
};

export const MultipleFileUpload: Story = {
    args: {
        children: (
            <div className='text-white bg-primary border-secondary border-dashed rounded-xl text-sm p-4'>
                <strong>Upload multiple PDF files</strong>
            </div>
        ),
        showDetails: true,
        theme: 'success',
        maxFiles: 5,
        allowMultiple: true,
        enableDelete: true,
        enableDownload: true,
    },
};

export const NoDetails: Story = {
    args: {
        children: (
            <div className='text-white bg-primary border-secondary border-dashed rounded-xl p-4 text-center'>
                <strong>Upload file (no details shown)</strong>
            </div>
        ),
        showDetails: false,
        theme: 'info',
        maxFiles: 1,
        allowMultiple: false,
        enableDelete: false,
        enableDownload: false,
    },
};

export const CustomStyles: Story = {
    args: {
        children: (
            <div className='text-white bg-primary border-secondary border-dashed rounded-xl text-center text-base py-6 px-2'>
                <strong>Stylish DND Area</strong>
            </div>
        ),
        showDetails: true,
        theme: 'secondary',
        classname:
            'rounded-xl border border-dashed border-secondary',
        fileItemStyle: 'shadow-md border border-gray-200',
        maxFiles: 3,
        allowMultiple: true,
        enableDelete: true,
        enableDownload: true,
    },
};

export const DisabledDownloadDelete: Story = {
    args: {
        children: (
            <div className='text-white bg-primary border-secondary border-dashed rounded-xl text-center py-4'>
                Drop a file – no delete/download allowed
            </div>
        ),
        showDetails: true,
        theme: 'neutral',
        maxFiles: 1,
        allowMultiple: false,
        enableDelete: false,
        enableDownload: false,
    },
};
