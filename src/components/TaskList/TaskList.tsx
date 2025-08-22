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
      </div>
    </>
  );
}

export default TaskList;
