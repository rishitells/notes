import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("add new note", () => {
  render(<App initialNotes={[]} />);

  fireEvent.click(screen.getByRole("addNote"));

  expect(screen.getByTestId("notesList").children.length).toEqual(1);
});

test("edit a note title", () => {
  const defaultNewNoteTitle = "New note";
  render(<App initialNotes={[]} />);

  fireEvent.click(screen.getByRole("addNote"));
  fireEvent.click(screen.getByText(defaultNewNoteTitle));
  fireEvent.click(screen.getByRole("editTitle"));

  // screen.debug(screen.getByTestId("notesList"));

  userEvent.type(screen.getByRole("titleInput"), "New title");
  fireEvent.keyDown(screen.getByRole("titleInput"), {
    keyCode: 13,
  });

  expect(screen.getByTestId("noteTitle")).toHaveTextContent("New title");
});

test("open a note", () => {
  render(
    <App initialNotes={[{ id: 1, title: "testTitle1", text: "testText1" }]} />
  );

  fireEvent.click(screen.getByText("testTitle1"));

  expect(screen.getByTestId("noteContentEditable")).toBeInTheDocument();
});

test("view note content preview in sidebar", () => {
  const defaultNewNoteTitle = "New note";
  render(<App initialNotes={[]} />);

  fireEvent.click(screen.getByRole("addNote"));
  fireEvent.click(screen.getByText(defaultNewNoteTitle));
  userEvent.type(
    screen.getByTestId("noteContentEditable"),
    "A quick brown fox jumps over the lazy dog"
  );

  expect(screen.getByTestId("noteContentPreview")).toHaveTextContent(
    "A quick brown fox"
  );
});

test("search for notes", () => {
  render(
    <App
      initialNotes={[
        { id: 1, title: "testTitle1", text: "testText1" },
        {
          id: 2,
          title: "testTitle2",
          text: "testText2",
        },
        { id: 3, title: "testTitle3", text: "testText3" },
      ]}
    />
  );

  userEvent.type(screen.getByRole("search"), "testTitle2");

  expect(screen.getByTestId("notesList").children.length).toEqual(1);
});

test("delete a note", () => {
  render(
    <App initialNotes={[{ id: 1, title: "testTitle1", text: "testText1" }]} />
  );

  fireEvent.click(screen.getByText("testTitle1"));
});
