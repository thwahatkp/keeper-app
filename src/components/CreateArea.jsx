import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Collapse from '@mui/material/Collapse';
function CreateArea(props) {

  const [note, setNote] = useState({title: "", content: ""});
  const [toggle, setToggle] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleToggle(){
    setToggle(true);
  }
  return (
    <div>
      <form className="create-note">
      {toggle &&
      <Collapse in="checked">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      </Collapse> 
      }
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleToggle}
          onDoubleClick={()=>{ setToggle(!toggle) }}
          value={note.content}
          placeholder="Take a note..."
          rows={toggle ? "3" : "1"}
        />
        <Zoom in={toggle}>
        <Fab type="submit" onClick={submitNote}>
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
