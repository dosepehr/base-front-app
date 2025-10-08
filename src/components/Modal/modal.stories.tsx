import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Modal from '.';
import Button from '../Button';
import { Info } from 'icons';

const meta: Meta<typeof Modal> = {
    title: 'components/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A customizable modal dialog component with support for different sizes (`sm`, `md`, `xl`), optional icon, and description.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['md', 'xl'],
            description: 'Defines modal size.',
        },
        title: {
            control: 'text',
            description: 'Modal header title.',
        },
        description: {
            control: 'text',
            description: 'Short description below the title.',
        },
        icon: {
            control: false,
            description: 'Optional icon displayed beside the title.',
        },
        id: {
            control: false,
            description: 'HTML ID used to reference this modal.',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template: Story = {
    render: (args) => (
        <>
            <Button
                onClick={() =>
                    (
                        document.getElementById(args.id) as HTMLDialogElement
                    )?.showModal()
                }
            >
                Open Modal
            </Button>
            <Modal {...args}>
                <p className='text-sm text-gray-600'>
                    This is an example modal content area. You can place forms,
                    confirmation messages, or any other interactive UI elements
                    here.
                </p>
            </Modal>
        </>
    ),
};

// 👇 Stories
export const Small: Story = {
    ...Template,
    args: {
        id: 'modal-sm',
        title: 'Small Modal',
        description: 'This is a small-sized modal example.',
        icon: <Info className='text-primary-500' />,
        size: 'sm',
    },
};
export const Medium: Story = {
    ...Template,
    args: {
        id: 'modal-md',
        title: 'Medium Modal',
        description: 'This is a medium-sized modal example.',
        icon: <Info className='text-primary-500' />,
        size: 'md',
    },
};

export const ExtraLarge: Story = {
    ...Template,
    args: {
        id: 'modal-xl',
        title: 'Extra Large Modal',
        description: 'This one has extra space for more content.',
        icon: <Info className='text-primary-500' />,
        size: 'xl',
    },
};
