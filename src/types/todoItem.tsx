import {Todo} from "./todo"
export interface todoItem{
    todo: Todo,
    onCompletedChange: (id: number, completed: boolean) => void
        onDelete: (id: number) => void;

}