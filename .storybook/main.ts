import type { StorybookConfig } from "@storybook/nextjs"
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    //this file says what should be included in the storybook client page
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y" //this addons automatically checks if our components our accessible
    //"@storybook-addon-designs", //Install this library to see your Figma design side by side
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: "tag" //if a story has a tag, docs will be generated
  }
}
export default config
