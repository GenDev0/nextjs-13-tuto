import Link from "next/link";
import React from "react";
import { Todo } from "../../../typings";
import axios from "axios";

const fetchTodos = async () => {
  // timeout for random number of seconds between 1-5 sec
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        // <p key={todo.id}>Todo : {todo.id}</p>
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
