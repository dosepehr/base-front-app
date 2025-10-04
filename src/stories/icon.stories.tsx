import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Icons from "../components/Icons";

const meta: Meta = {
  title: "Ui/Icon Pack",
  argTypes: {
    color: {
      control: "color",
      description: "Fill/Stroke color of the icon",
    },
    width: {
      control: { type: "number", min: 12, max: 200, step: 2 },
      description: "Width of the icon",
    },
    height: {
      control: { type: "number", min: 12, max: 200, step: 2 },
      description: "Height of the icon",
    },
    className: {
      control: "text",
      description: "Custom Tailwind / CSS class",
    },
  },
  args: {
    color: "#374151", // default gray-700
    width: 40,
    height: 40,
    className: "",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: (args) => (
    <div className="grid grid-cols-4 gap-6 p-6">
      {Object.entries(Icons).map(([name, Icon]) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <Icon
            style={{ color: args.color }}
            width={args.width}
            height={args.height}
            className={args.className}
          />
          <span className="text-sm text-gray-600">{name}</span>
        </div>
      ))}
    </div>
  ),
};
