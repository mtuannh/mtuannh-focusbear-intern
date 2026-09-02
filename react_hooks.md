## useEffect

`useEffect` is a React Hook used to synchronize a component with something outside of React. It can run code after a component is rendered and can also return a cleanup function.

In this task, I used `useEffect` to log a message when the component mounts and another message when it unmounts. I used an empty dependency array because this effect does not need to run again when the component state changes.

## Reflection

### When should you use `useEffect` instead of handling logic inside event handlers?

I should use `useEffect` when the code needs to happen because of the component being rendered or because a dependency changes, especially when synchronizing with an external system.

For actions that happen because the user does something, such as clicking a button, an event handler is usually more appropriate. In this task, I used an event handler to fetch data when the button is clicked.

### What happens if you don’t provide a dependency array?

If I don't provide a dependency array, the effect runs after every render. This can cause the effect to run more often than needed and may cause performance problems or unexpected behaviour.

Using an appropriate dependency array helps control when the effect needs to run.

### How can improper use of `useEffect` cause performance issues?

Improper use of `useEffect` can cause unnecessary work if the effect runs after every render or runs more often than needed. For example, an effect that updates state can cause another render, which may cause the effect to run again.

This can create repeated renders, unnecessary API requests, or even an infinite loop. It is better to only use `useEffect` when it is needed and make sure its dependencies are correct.