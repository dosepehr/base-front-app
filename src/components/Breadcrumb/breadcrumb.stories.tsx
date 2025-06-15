import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Breadcrumb from '.';
import { BreadcrumbProps } from './breadcrumb.type';

type Story = StoryObj<typeof Breadcrumb>;

const meta: Meta<typeof Breadcrumb> = {
    title: 'components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
};

export default meta;

// === SAMPLE DATA === //

const breadcrumbData1: BreadcrumbProps[] = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Settings', link: '/dashboard/settings' },
    { title: 'Profile', link: '/dashboard/settings/profile' },
];

const breadcrumbData2: BreadcrumbProps[] = [
    { title: 'Library', link: '/library' },
    { title: 'Genres', link: '/library/genres' },
    { title: 'Sci-Fi', link: '/library/genres/sci-fi' },
    { title: 'Top 10', link: '/library/genres/sci-fi/top-10' },
];

// === STORIES === //

export const Default: Story = {
    args: {
        breadcrumb: breadcrumbData1,
    },
};

export const DeepNavigation: Story = {
    args: {
        breadcrumb: breadcrumbData2,
    },
};

