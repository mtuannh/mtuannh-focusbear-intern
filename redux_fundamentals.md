## When should you use Redux instead of useState?

I would use `useState` when the state is simple and only needs to be used inside one component. For example, a form input, a toggle button, or a small piece of UI state can usually be handled with `useState`.

Redux is more useful when the same state needs to be shared between multiple components or different parts of an application. It provides a central place to manage the state and makes it easier to keep shared data consistent.

For example, a simple counter could be managed using `useState` if it only belongs to one component. However, if the counter or other data needs to be accessed by many different components, Redux can be a better option.

Through this task, I learned how to create a Redux store and slice using Redux Toolkit, and how to connect a React component to the store using `useSelector` and `useDispatch`.