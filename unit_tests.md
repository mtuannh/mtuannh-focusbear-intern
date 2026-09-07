# Introduction to Unit Testing with Jest

## Why is automated testing important in software development?

Automated testing is important because it helps developers check that their code works as expected. Tests can be run whenever the code is changed, which helps catch problems early and prevents existing functionality from accidentally breaking.

Unit tests are especially useful because they test small parts of the code independently.

## What did you find challenging when writing your first Jest test?

The main challenge was understanding how Jest should be configured in my existing Vite React project. I also needed to make sure the test files and utility function were set up correctly.

After configuring Jest, I wrote simple tests for an `addNumbers` function. The tests were straightforward once I understood the `describe`, `test`, and `expect` functions.

## What I learned

This task helped me understand the basic structure of a Jest unit test. I learned how to test a small function with different inputs and check that the returned values are correct.

I also learned that having automated tests makes it easier to make changes to code because I can quickly check whether the existing functionality still works.

## Testing React components with React Testing Library

### What are the benefits of using React Testing Library instead of testing implementation details?

I think React Testing Library is useful because it tests the component like a real user. In my test I only checked if the message was on the screen and if it changed after I clicked the button. I did not test the state or other things inside the component.

This is better because if I change the code later but the UI still works the same, the test should still pass. If I tested implementation details, a small refactor could break the test even when the component still looks fine to the user.

### What challenges did you encounter when simulating user interaction?

The hardest part was not the click itself. It was setting up Jest so it could run a React component test. My project uses Vite, so I needed extra packages and config to handle JSX and a browser-like environment.

After that, clicking the button was quite simple. I just had to remember that `userEvent.click` is async, so I needed to wait for it. At first I was also a bit unsure how to find the button, but using `getByRole` made more sense when I thought about it from the user's point of view.