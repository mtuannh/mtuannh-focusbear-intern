## Buggy Example

For this task, I recreated the stale closure example from the React debugging article. The example uses a counter that should increase every second.

The original buggy behaviour was that the counter increased from 0 to 1 and then stayed at 1.

## What was the issue?

The problem was caused by a stale closure inside `useEffect`.

The interval was created when the component first rendered, when the value of `count` was 0. Because the `useEffect` had an empty dependency array, the effect only ran once.

The interval continued to use the original value of `count` instead of the updated value from later renders.

The problematic code was:

```jsx
setCount(count + 1);