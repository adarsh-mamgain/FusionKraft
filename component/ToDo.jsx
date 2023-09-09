import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="mx-auto m-4 p-4 md:p-20 border rounded-xl">
      <h2 className="text-3xl font-semibold mb-4">Todo App</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow bg-gray-800 border rounded-l py-2 px-3"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-2 px-3 mb-2 rounded"
          >
            <span className="text-lg">{todo}</span>
            <button
              style={{ backgroundColor: "red" }}
              className="py-2 px-4 rounded"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
