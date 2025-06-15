import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Rating from '.';
const meta: Meta<typeof Rating> = {
    title: 'components/Rating',
    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        score: {
            control: { type: 'number', min: 0, max: 5 },
        },
        disabled: {
            control: 'boolean',
        },
        ratingId: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {
        ratingId: 'rating-default',
        score: 3,
        disabled: false,
    },
};

export const DisabledRating: Story = {
    args: {
        ratingId: 'rating-disabled',
        score: 4,
        disabled: true,
    },
};

export const AllScores: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24 }}>
            {[1, 2, 3, 4, 5].map((score) => (
                <div key={score} style={{ textAlign: 'center' }}>
                    <Rating
                        ratingId={`rating-${score}`}
                        score={score}
                        disabled={false}
                    />
                    <div>
                        {score} star{score > 1 ? 's' : ''}
                    </div>
                </div>
            ))}
        </div>
    ),
};

