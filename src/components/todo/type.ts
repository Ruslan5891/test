import { ChangeEvent } from "react";

export type TodoShape = {
    id: string;
    text: string;
    completed: boolean;
 };

 export type TodosArr = Array<TodoShape> | null;

 export type Event = ChangeEvent<HTMLInputElement>;
