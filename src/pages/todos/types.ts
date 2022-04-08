import { ChangeEvent } from "react";

export type Event = ChangeEvent<HTMLInputElement>;

export type TodosArr = Array<TodoShape> | null;

export type TodoShape = {
   id: string;
   text: string;
   completed: boolean;
};
