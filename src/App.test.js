import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("add a note", () => {
  render(<App initialNotes={[]} />);

  fireEvent.click(screen.getByRole("addNote"));

  const list = screen.getByTestId("notesList");

  expect(list.children.length).toEqual(1);
  expect(screen.getByTestId("noteTitle")).toHaveTextContent("New note");
});

test("open a note", () => {
  render(
    <App
      initialNotes={[{ id: 1, title: "testNote1", text: "testNote1Content" }]}
    />
  );

  fireEvent.click(screen.getByTestId("noteTitle"));

  expect(screen.getByTestId("noteContentEditable")).toBeInTheDocument();
  expect(screen.getByTestId("noteContentEditable")).toHaveValue(
    "testNote1Content"
  );
});

test("Search for a note", () => {
  render(
    <App
      initialNotes={[
        { id: 1, title: "testNote1", text: "testNote1Content" },
        { id: 2, title: "testNote2", text: "testNote2Content" },
        { id: 3, title: "testNote3", text: "testNote3Content" },
      ]}
    />
  );

  fireEvent.change(screen.getByRole("search"), {
    target: { value: "testNote2" },
  });

  expect(screen.getByTestId("notesList").children.length).toEqual(1);
});

test("delete a note", () => {
  render(
    <App
      initialNotes={[{ id: 1, title: "testNote1", text: "testNote1Content" }]}
    />
  );

  fireEvent.click(screen.getByTestId("noteTitle"));
  fireEvent.click(screen.getByRole("deleteNote"));

  expect(screen.getByTestId("notesList").children).toHaveLength(0);
});

test("edit note title in sidebar", () => {
  render(
    <App
      initialNotes={[{ id: 1, title: "testNote1", text: "testNote1Content" }]}
    />
  );

  fireEvent.click(screen.getByTestId("noteTitle"));
  fireEvent.click(screen.getByRole("editTitle"));
  fireEvent.change(screen.getByRole("titleInput"), {
    target: { value: "testNoteNewTitle" },
  });
  fireEvent.keyDown(screen.getByRole("titleInput"), {
    keyCode: 13,
  });

  expect(screen.getByTestId("noteTitle")).toHaveTextContent("testNoteNewTitle");
});

test("Note content preview in sidebar", () => {
  render(
    <App
      initialNotes={[{ id: 1, title: "testNote1", text: "testNote1Content" }]}
    />
  );

  fireEvent.click(screen.getByTestId("noteTitle"));
  fireEvent.change(screen.getByTestId("noteContentEditable"), {
    target: { value: "A quick brown fox jumps over the lazy dog" },
  });

  expect(screen.getByTestId("noteContentPreview")).toHaveTextContent(
    "A quick brown"
  );
});
