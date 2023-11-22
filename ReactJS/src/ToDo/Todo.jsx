import { useState } from "react";

const MyTodo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editInput, setEditInput] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    let todoObj = {
      id: Date.now(),
      todo: todo,
      edit: false,
      disable: false,
    };
    todoList.push(todoObj);
    setTodoList(todoList);
    setTodo("");
    console.log(todoList);
  };

  const deleteTodo = (id) => {
    const abc = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(abc);
  };

  const editTodo = (id) => {
    const updateTodo = todoList.map((item) => {
      if (item.id === id) {
        if (item.edit === false) {
          item.edit = true;
          setEditInput(item.todo);
        } else {
          item.edit = false;
          item.todo = editInput;
        }
      } else {
        item.disable = true;
      }
      return item;
    });
    setTodoList(updateTodo);
  };

  return (
    <div>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todoList.map((item, index) => {
          return (
            <div key={index}>
              {item.edit ? (
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
              ) : (
                <p>{item.todo}</p>
              )}
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button disabled={item.disable} onClick={() => editTodo(item.id)}>
                {item.edit ? "Update" : "Edit"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MyTodo;
