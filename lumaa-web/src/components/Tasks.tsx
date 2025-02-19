import React, { useEffect, useState } from "react";
import { createTask, deleteTask, fetchTasks, updateTask } from "../api";

interface Task {
  id: number;
  title: string;
  description?: string;
  isComplete: boolean;
}

interface Props {
  token: string;
}

const Tasks: React.FC<Props> = ({ token }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadTasks = async () => {
    const data = await fetchTasks(token);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      await createTask(token, title, description);
      setDescription("");
      setTitle("");
      loadTasks();
    }
  };

  const handleToggleComplete = async (task: Task) => {
    await updateTask(token, task.id, { isComplete: !task.isComplete });
    loadTasks();
  };

  const handleDelete = async (id: number) => {
    await deleteTask(token, id);
    loadTasks();
  };

  return (
    <div>
      <h2>Tasks</h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleCreate}
      >
        <div>
          <input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          style={{
            padding: "10px 40px",
            borderRadius: "10px",
            background: "#B7B1F2",
            color: "white",
            outline: "none",
            border: "0px",
            fontWeight: "600",
          }}
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ul>
        {tasks?.map((task) => {
          return (
            <li style={{ display: "flex", gap: "5px" }} key={task?.id}>
              <span
                style={{
                  textDecoration: task.isComplete ? "line-through" : "none",
                }}
              >
                {task.title} {task.description && `- ${task.description}`}
              </span>
              <button
                style={{
                  padding: "10px 40px",
                  borderRadius: "10px",
                  background: "#B7B1F2",
                  color: "white",
                  outline: "none",
                  border: "0px",
                  fontWeight: "600",
                }}
                onClick={() => handleToggleComplete(task)}
              >
                {task.isComplete ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                style={{
                  padding: "10px 40px",
                  borderRadius: "10px",
                  background: "#B7B1F2",
                  color: "white",
                  outline: "none",
                  border: "0px",
                  fontWeight: "600",
                }}
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
