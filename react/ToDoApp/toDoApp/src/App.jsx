import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]); // This makes a new array by coppying old content in the array
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Todo App
      </h1>

      {/* Input Section */}
      <div className="max-w-md mx-auto flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a todo ..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 outline-none"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="max-w-md mx-auto mt-6 ">
        {todos.map((todo, index) => (
          <div
            key={index}
             className="bg-white px-4 py-3 rounded-lg mb-2 shadow-sm flex justify-between items-center"
          >
            <p
              className={`text-gray-700 cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </p>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
