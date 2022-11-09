import React from "react";
import axios from "axios";
import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type pageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: pageProps) => {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div className='p-10 bg-yellow-200 border-r-2 m-2 shadow-lg'>
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed : {todo.completed ? "Yes" : "No"}</p>
      <p className='border-t border-black mt-5 text-right'>
        By User : {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  // Avoid being rate limited by DEMO API
  const trimmedTodos = todos.slice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
