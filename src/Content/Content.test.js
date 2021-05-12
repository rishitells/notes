import { render, rerender, screen, fireEvent } from "@testing-library/react";
import Content from "./Content";

test("calls #onTextChange when user changes text content", () => {
  const onTextChange = jest.fn();

  render(
    <Content
      id={1}
      text="testText"
      title="testTitle"
      onTextChange={onTextChange}
    />
  );

  fireEvent.change(screen.getByTestId("noteContentEditable"), {
    target: { value: "A quick brown fox" },
  });

  expect(onTextChange).toHaveBeenCalledWith(1, "A quick brown fox");
});

test("should call #onDelete when user clicks delete button", () => {
  const onDelete = jest.fn();

  render(
    <Content id={1} text="testText" title="testTitle" onDelete={onDelete} />
  );

  fireEvent.click(screen.getByRole("deleteNote"));

  expect(onDelete).toHaveBeenCalledWith(1);
});

test("display number of characters in the note", () => {
  const { rerender } = render(<Content text="testText" title="testTitle" />);

  expect(screen.getByTestId("count")).toHaveTextContent(8);

  rerender(<Content text="testText123" title="testTitle" />);

  expect(screen.getByTestId("count")).toHaveTextContent(11);
});
