## React + Tailwind CSS Setup

For this task, I set up a new React project using Vite and added Tailwind CSS to the project. I used JavaScript for the React project and configured Tailwind CSS with the Vite plugin.

After setting up the project, I created a simple React page to test whether Tailwind CSS was working correctly. I used Tailwind utility classes for the page layout, spacing, text styling, background, card, shadow, rounded corners, and button.

I then ran the project using `npm run dev` and checked the result in the browser. The page loaded successfully and the Tailwind styles were applied correctly.

## Challenges During Setup

The main challenge I faced was setting up Tailwind CSS because I was not familiar with the latest Tailwind CSS setup.

At first, I needed to understand how Tailwind CSS should be connected to a Vite project. I had to install the required packages and update the `vite.config.js` file to include the Tailwind Vite plugin. I also needed to update `src/index.css` to import Tailwind CSS.

Another thing I needed to understand was how to check whether Tailwind was actually working. Instead of only checking that the project could run, I added different Tailwind classes to my React component and checked the result in the browser. This helped me confirm that the Tailwind configuration was working correctly.

After completing the setup, I was able to run the React project successfully and use Tailwind CSS to style the interface.

## What I Learned

This task helped me understand the basic setup of a React project with Vite and how Tailwind CSS can be integrated into it. I also became more familiar with using Tailwind utility classes directly in React components.

One useful thing I learned is that Tailwind allows me to build and adjust the UI by adding utility classes to elements instead of writing a lot of separate CSS. This can make it easier to quickly change the layout and styling of a component.

Overall, I now have a better understanding of how to set up a React frontend environment and verify that the styling tools are working correctly.

### Why are components important in React? (#32)

Components are important because they help break a React application into smaller and reusable parts. Each component can handle a specific part of the UI, which makes the code easier to understand and maintain.

Components can also receive different data through props, so the same component can be reused with different information. In my task, the `HelloWorld` component uses the `name` prop to display different names without changing the component itself.

### What happens if we modify state directly instead of using `setState`? (#31)

If we modify state directly instead of using `setState`, React may not know that the state has changed, so the component may not re-render and show the updated value.

Using `setState` is the correct way to update state because it tells React that the state has changed and the UI needs to be updated.