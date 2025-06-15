import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Skeleton from '.';

const meta: Meta<typeof Skeleton> = {
    title: 'components/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    render: () => {
        return <Skeleton width='w-20' height='h-20' />;
    },
};
export const Multiple: Story = {
    render: () => (
        <div className='flex gap-4 items-center'>
            <Skeleton width='w-20' height='h-4' />
            <Skeleton width='w-20' height='h-20' classname='rounded-full' />
        </div>
    ),
};

