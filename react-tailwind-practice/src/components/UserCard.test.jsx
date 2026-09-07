import { render, screen } from "@testing-library/react";
import { getUser } from "../api/getUser.cjs";
import UserCard from "./UserCard";

jest.mock("../api/getUser.cjs", () => ({
  getUser: jest.fn(),
}));

test("shows the user name from the mocked API", async () => {
  getUser.mockResolvedValue({ name: "Leanne Graham" });

  render(<UserCard />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("Leanne Graham")).toBeInTheDocument();
});
