import plusIcon from "./plus.svg";
import Button from "../Button/Button";

const AddNote = ({ handleClick }) => {
  return (
    <Button role="addNote" onClick={handleClick}>
      <img alt="add" src={plusIcon} />
    </Button>
  );
};

export default AddNote;
