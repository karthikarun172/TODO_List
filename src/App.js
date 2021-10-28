/** @format */

import logo from "./logo.svg";
import "./App.css";
import AddTaskBtn from "./Components/AddTaskBtn";
import SearchInput from "./Components/SearchInput";
import TaskCard from "./Components/TaskCard";
import { useState } from "react";
import Divider from "./Components/Divider";
import CreateTaskModal from "./Components/CreateTaskModal";
import BriefCard from "./Components/BriefCard";
import { TodoList } from "./Dummies";
import DailyTaskList from "./Components/DailyTaskList";

function App() {
  const [list, setList] = useState(TodoList);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [brief, setBrief] = useState(false);
  const [BriefData, setBriefData] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevData) => [
      ...prevData,
      { id: `${list.length + 1}`, name: input },
    ]);
    setInput("");
  };
  const handleTaskClick = (id) => {
    let value = TodoList.filter((todos) => todos.id === id).map((v) => v.Brief);
    setBriefData(value[0]);
    setBrief(true);
  };

  const handleFilter = (id) => {
    setList(list.filter((l) => l.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          height: "100vh",
          width: "300px",
          backgroundColor: "#4D4141",
          position: "fixed",
        }}
      ></div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <SearchInput
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <AddTaskBtn onClick={handleOpen} />
        </div>
        <CreateTaskModal open={open} handleClose={handleClose} />
        <div style={{ width: "100%" }}>
          <div>
            <Divider date="today" />
            {list.map((todos) => (
              <TaskCard
                onClickTask={() => handleTaskClick(todos.id)}
                TaskName={todos.name}
                priority={todos.priority}
                key={todos.id}
                deleteData={() => handleFilter(todos.id)}
              />
            ))}
          </div>
          {brief ? <BriefCard datas={BriefData} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
