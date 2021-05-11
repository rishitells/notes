import plusIcon from './plus.svg';
import Button from "../Button";

const AddNote = ({handleClick}) => {
    return <Button onClick={handleClick}>
        <img alt="add" src={plusIcon}/>
    </Button>
}

export default AddNote;