import { Meta, StoryFn } from "@storybook/react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { BoxAttribute, IBoxAttribute } from ".";

const meta: Meta<typeof BoxAttribute> = {
  title: "feedback/BoxAttribute",
  component: BoxAttribute,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default: StoryFn<IBoxAttribute> = (args) => <BoxAttribute {...args} />;
Default.args = {
  label: "Label",
  value: "Value",
};

const WithButton: StoryFn<IBoxAttribute> = (args) => <BoxAttribute {...args} />;

WithButton.args = {
  label: "Label",
  value: "Value",
  withButton: true,
  buttonValue: 2,
  buttonIcon: <MdAndroid />,
};

export { Default, WithButton };
export default meta;
