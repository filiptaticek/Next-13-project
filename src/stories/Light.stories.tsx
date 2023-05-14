import type { Meta, StoryObj } from "@storybook/react"
import { Light } from "./Light"

const meta: Meta<typeof Light> = {
  title: "Light",
  component: Light
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}
