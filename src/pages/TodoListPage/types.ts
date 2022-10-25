export interface TodoListViewProps {
  todos: Todo[];
  value: string;
  onChangeValue: (value: EventProps) => void;
  addTodo: () => void;
  updatePositionTodo: (data: Position, index: number) => void; 
  deleteTodo: (index: number) => void; 
};

export interface Todo {
  id: string;
  text: string;
  color: string;
  defaultPos: Position;
};

export interface Position {
  x: number;
  y: number;
};

export interface EventProps  {
  target: { value: string; }
}
