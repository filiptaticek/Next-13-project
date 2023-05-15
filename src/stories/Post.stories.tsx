import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Post } from "../../src/components/client/Post"
import type { Meta, StoryObj } from "@storybook/react"

//define the whole Story
const meta: Meta<typeof Post> = {
  title: "Post",
  component: Post
}

export default meta

type Story = StoryObj<typeof meta> //define new type for story
const queryClient = new QueryClient()

//define specific parts of the story
export const Default: Story = {
  args: {
    post: {
      id: 2,
      title: "i can write posts as well sir!",
      content: "fds",
      user: {
        name: "Filip Tatíček",
        image:
          "https://lh3.googleusercontent.com/a/AGNmyxaUnYrirjyb-ASQHxVIqBySLMs2Ws1-ssPyxVwW=s96-c"
      }
    }
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
}
