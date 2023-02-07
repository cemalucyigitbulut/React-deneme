import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) =>{
    e.preventDefault()
    
    if(!text){
        alert('add text or something')
        return
    }
    
    onAdd({text, day ,reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-from" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Text</label>
        <input type="text" placeholder="Text" value={text} onChange={(e)=> setText(e.target.value)} />
      </div>

      <div className="form-control">
        <label>Day</label>
        <input type="text" placeholder="Day" value={day} onChange={(e)=> setDay(e.target.value)} />
      </div>

      <div className="form-control  form-control-check">
        <label>Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
