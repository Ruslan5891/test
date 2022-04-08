import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Todos } from "./pages/todos";
import { Todo } from "./components/todo";
import { Photos } from "./pages/photos";

export const App = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="todos" element={<Todos />} />
            <Route path="todos/:id" element = {<Todo/>}/>
         <Route path="photos" element={<Photos />} />
      </Routes>
   </BrowserRouter>
);
