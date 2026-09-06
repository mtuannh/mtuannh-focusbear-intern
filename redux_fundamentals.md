## When should you use Redux instead of useState?

I would use `useState` when the state is simple and only needs to be used inside one component. For example, a form input, a toggle button, or a small piece of UI state can usually be handled with `useState`.

Redux is more useful when the same state needs to be shared between multiple components or different parts of an application. It provides a central place to manage the state and makes it easier to keep shared data consistent.

For example, a simple counter could be managed using `useState` if it only belongs to one component. However, if the counter or other data needs to be accessed by many different components, Redux can be a better option.

Through this task, I learned how to create a Redux store and slice using Redux Toolkit, and how to connect a React component to the store using `useSelector` and `useDispatch`.

### What are the benefits of using selectors instead of directly accessing state?

Selectors provide a simple and reusable way to access specific parts of the Redux state. Instead of directly writing the state path in every component, I can create a selector once and reuse it wherever I need the same data.

For example, I created a `selectCount` selector to get the current counter value. I then used this selector in multiple components with `useSelector`. This makes the code easier to read and helps keep the way state is accessed consistent across the application.

Selectors can also become more useful when the state becomes more complex because they can contain the logic needed to get or calculate specific data from the Redux store.