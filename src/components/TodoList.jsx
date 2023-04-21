import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className="rounded-t-md overflow-hidden bg-white [&>article]:p-4 mt-8">
          {
            todos.map((todo)=> (
                <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
           ))
           }
        </div>
    );
}

export default TodoList;