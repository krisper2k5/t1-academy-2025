import { useState } from "react";

function TaskList() {
  const [title, setTitle] = useState(0);
  const [context, setContext] = useState(0);

  return (
    <>
      <div className="items">
        <div className="title">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="context">hhh</div>
        <div className="information">
          <p className="category"></p>
          <p className="status"></p>
          <p className="priority"></p>
        </div>
        <div className="date"></div>
        <div className="changing">
          <div className="edit"></div>
          <div className="delete"></div>
        </div>
      </div>
    </>
  );
}

export default TaskList;
