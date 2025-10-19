import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { colors, daisyColors } from '../utils/theme/colors';
import { getHexFromVar, getReadableTextColor } from '@/utils/funcs/color';

const meta: Meta = {
    title: 'ui/Colors',
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = {
    render: () => (
        <div>
            <h2>All Theme Colors</h2>

            {['light', 'dark'].map((theme) => (
                <div key={theme}>
                    <h3 style={{ marginTop: '1rem' }}>
                        {theme.toUpperCase()} Theme
                    </h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                            gap: '1rem',
                            background: 'transparent',
                        }}
                        data-theme={theme}
                    >
                        {daisyColors.map(({ name, var: bgVar, content }) => (
                            <div
                                key={name}
                                style={{
                                    backgroundColor: `var(${bgVar})`,
                                    color: content ? `var(${content})` : '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '80px',
                                    borderRadius: '0.5rem',
                                    fontWeight: 'bold',
                                    border: '1px solid #ddd',
                                    textAlign: 'center',
                                    padding: '0 0.5rem',
                                }}
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3rem',
                    marginTop: '1.5rem',
                }}
            >
                {colors.map((color) => (
                    <div key={color.name}>
                        <h4
                            style={{
                                marginBottom: '1rem',
                                textTransform: 'capitalize',
                            }}
                        >
                            {color.name}
                        </h4>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fill, minmax(100px, 1fr))',
                            }}
                        >
                            {color.shades.map((variable) => {
                                const hex = getHexFromVar(variable);
                                const textColor = getReadableTextColor(hex);
                                return (
                                    <div
                                        key={variable}
                                        style={{
                                            background: `var(${variable})`,
                                            color: textColor,
                                            height: '80px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            textShadow:
                                                '0 0 2px rgba(0,0,0,0.2)',
                                            transition: 'all 0.3s',
                                        }}
                                    >
                                        {hex}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ),
};
