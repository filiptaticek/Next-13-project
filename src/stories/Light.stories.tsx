import type { Meta, StoryObj } from "@storybook/react"
import { Light } from "./Light"

//define the whole Story
const meta: Meta<typeof Light> = {
  title: "Light",
  component: Light,
  tags: ["autodocs"], //this is set up in main.ts, so that docs are generated automatically
  argTypes: {
    //this is where you define how is your storybook console going to look like
    variant: {
      control: {
        radio: true, //we set only one control, which is radio button with three options, even though this is actually the default state
        options: ["red", "yellow", "green"]
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta> //define new type for story

//define specific parts of the story
export const Red: Story = {
  args: {
    variant: "red"
  }
}

export const Yellow: Story = {
  args: {
    variant: "yellow"
  }
}

export const Green: Story = {
  args: {
    variant: "green"
  }
}

export const TrafficLight: Story = {
  render: () => (
    <div>
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  )
}
