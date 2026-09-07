import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WelcomeMessage from "./WelcomeMessage";

test("renders the welcome message", () => {
  render(<WelcomeMessage />);
  expect(screen.getByText("Hello intern")).toBeInTheDocument();
});

test("changes the message when the button is clicked", async () => {
  render(<WelcomeMessage />);
  await userEvent.click(screen.getByRole("button", { name: "Click me" }));
  expect(screen.getByText("Button clicked")).toBeInTheDocument();
});
