import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { increment, incrementAsync } from "./counterSlice";

test("increment updates the state", () => {
  const state = counterReducer(undefined, increment());
  expect(state.value).toBe(1);
});

test("incrementAsync updates the state when it finishes", async () => {
  const store = configureStore({
    reducer: { counter: counterReducer },
  });

  await store.dispatch(incrementAsync(2));

  expect(store.getState().counter.value).toBe(2);
});
