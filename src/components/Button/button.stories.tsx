import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'components/Button',
    tags: ['autodocs'],
};
export const Main: Story = {
    args: {
        children: 'Main',
        theme:'info'
    },
};
export const Primary: Story = {
    render: () => <Button className='btn-primary'>Primary</Button>,
};

export default meta;

