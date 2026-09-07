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

## Mocking API calls in Jest

### Why is it important to mock API calls in tests?

It is important because tests should not depend on a real API. If the API is down or slow, my test might fail even when the component is actually fine. Mocking also makes the test faster and more predictable, because I can decide what data the API should return.

In this task I used `jest.mock()` and `jest.fn()` so the component still thought it got a user from the API, but no real network request was made.

### What are some common pitfalls when testing asynchronous code?

One common mistake is not waiting for the data. At first my component shows "Loading...", so if I look for the user name too early the test will fail. I had to use `findByText` so Jest waits until the mocked data appears on the screen.

Another problem is forgetting to mock the API. Then the test might try to call the real server, which can be slow or fail. I also learned that async tests need `async/await`, otherwise Jest might finish before the UI updates.

## Testing Redux with Jest

### What was the most challenging part of testing Redux?

The most challenging part was understanding that I can test the reducer directly, without rendering a React component. At first I thought I had to click buttons in the UI to check Redux, but I only needed to send an action and check the new state.

The async test was also a bit new for me. I had to dispatch `incrementAsync` and wait for it to finish before checking the store. Once I understood that, the test was quite short.

### How do Redux tests differ from React component tests?

React component tests check what the user sees, like text on the screen or clicking a button. Redux tests check the state instead. I call a reducer or dispatch an action and then look at `state.value`.

I think this is simpler in some ways, because I do not need React Testing Library for these tests. But it is also different, because a passing Redux test does not always mean the UI is correct. It only means the slice and actions work as expected.