import { Position, Todo } from "../../pages/TodoListPage/types";

export interface TodoCardProps {
  item: Todo;
  index: number;
  updatePositionTodo: (data: Position, index: number) => void;
  deleteTodo: (index: number) => void;
}