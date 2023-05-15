import { Button } from "../components/client/Button"
import type { Meta, StoryObj } from "@storybook/react"

//define the whole Story
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button
}

export default meta

type Story = StoryObj<typeof meta> //define new type for story

//define specific parts of the story
export const Default: Story = {
  args: {
    text: "Click me"
  }
}
