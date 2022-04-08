import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { DESCRIPTION, BUTTON_DATA } from "./constants";
import { Event, TodosArr } from "./types";
import styles from "./styles.module.css";

export const Todos = () => {
   const [todos, setTodos] = useState<TodosArr>([]);
   const [text, setText] = useState("");

   const inputHandler = (e: Event) => setText(e.target.value);

   const addTodo = () => {
      if (!text) return;
      let newTodo = { id: new Date().toISOString(), text, completed: false };
      if (!todos?.length) {
         setTodos([newTodo]);
         localStorage.setItem("todos", JSON.stringify([newTodo]));
      } else {
         setTodos([...todos, newTodo]);
         localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      }
      setText("");
   };

   const toggleTodoState = (id: string) => () => {
      const index = todos?.findIndex((todo) => todo.id === id);
      const filteredTodos = todos?.filter((todo) => todo.id !== id);
      const todoForChange = todos?.find((todo) => todo.id === id);
      if (filteredTodos && todoForChange) {
         if (!todoForChange.completed) {
            todoForChange.completed = !todoForChange.completed;
            filteredTodos.push(todoForChange);
            setTodos(filteredTodos);
            localStorage.setItem("todos", JSON.stringify(filteredTodos));
         } else {
            if (index === undefined) return;
            todoForChange.completed = !todoForChange.completed;
            filteredTodos.splice(index, 0, todoForChange);
            setTodos(filteredTodos);
            localStorage.setItem("todos", JSON.stringify(filteredTodos));
         }
      }
   };

   const showAllTodos = () => {
      const todoList = localStorage.getItem("todos");
      if (todoList) setTodos(JSON.parse(todoList));
   };

   const showDoneTodos = () => {
      const todoList = localStorage.getItem("todos");
      if (todoList) {
         const todosArrayData: TodosArr = JSON.parse(todoList);
         const filteredTodos = todosArrayData?.filter((todo) => todo.completed === true);
         filteredTodos ? setTodos(filteredTodos) : setTodos([]);
      } else {
         return;
      }
   };

   const showNotCompletedTodos = () => {
      const todoList = localStorage.getItem("todos");
      if (todoList) {
         const todosArrayData: TodosArr = JSON.parse(todoList);
         const filteredTodos = todosArrayData?.filter((todo) => todo.completed === false);
         filteredTodos ? setTodos(filteredTodos) : setTodos([]);
      } else {
         return;
      }
   };

   const removeTodo = (id: string) => () => {
      let newTodos = todos?.filter((todo) => todo.id !== id);
      if (newTodos) {
         setTodos(newTodos);
         localStorage.setItem("todos", JSON.stringify(newTodos));
      }
   };

   useEffect(() => {
      const todoList = localStorage.getItem("todos");
      if (!todoList) {
         return;
      } else {
         setTodos(JSON.parse(todoList));
      }
   }, []);

   return (
      <div className={styles.wrapper}>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                     }}
                  >
                     {DESCRIPTION.TITLE}
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box>
         <div className={styles.buttonWrapper}>
            <p>
               <button onClick={showAllTodos}>{BUTTON_DATA.ALL}</button>
               <span>{DESCRIPTION.ALLTODOS_MESSAGE}</span>
            </p>
            <p>
               <button onClick={showNotCompletedTodos}>{BUTTON_DATA.TODO}</button>
               <span>{DESCRIPTION.UNCOMPLETED_MESSAGE}</span>
            </p>
            <p>
               <button onClick={showDoneTodos}>{BUTTON_DATA.DONE}</button>
               <span>{DESCRIPTION.COMPLETED_MESSAGE}</span>
            </p>
         </div>
         <label className={styles.label}>
            <input value={text} onChange={inputHandler} />
            <button onClick={addTodo}>{BUTTON_DATA.ADD}</button>
         </label>
         <ul className={styles.list}>
            {todos &&
               todos.map((todo) => (
                  <li key={todo.id}>
                     <input type="checkbox" checked={todo.completed} onChange={toggleTodoState(todo.id)} />
                     <Link to={todo.id} state={{ ...todo }}>
                        <span>{todo.text}</span>
                     </Link>
                     <button onClick={removeTodo(todo.id)}>&times;</button>
                  </li>
               ))}
         </ul>
      </div>
   );
};
