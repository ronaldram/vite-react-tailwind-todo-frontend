import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo, updateTodo, removeTodo}) => {
    const {id, title, completed} = todo;

    return (
        <article className="duration-1000 flex gap-4 border-b-gray-300 border-b-2 dark:bg-gray-800">            
            <button className={`h-5 w-5 flex-none rounded-full border-2  ${
                completed ? "grid place-items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500": "inline-block"
            }`}
            onClick={()=> updateTodo(id)}
            >
                {completed && <CheckIcon/> } 
            </button>
            <p className={`text-gray-600 dark:text-gray-400 grow ${completed && "line-through"}`}>{title}</p>
            <button className="flex-none" onClick={()=> removeTodo(id)}>
              <CrossIcon/>
            </button>
        </article>
    );
}

export default TodoItem;