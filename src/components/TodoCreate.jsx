import { useState } from "react";

const TodoCreate = ({createTodo}) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        console.log(title);
        e.preventDefault();

        if(!title.trim()){
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmitAddTodo} 
            className="duration-1000 dark:bg-gray-800 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4">
          <span className="inline-block h-3 w-3 rounded-full border-2 py-4 px-4 ml-2"></span>
          <input type="test" placeholder="Create a new todo..." className="dark:bg-gray-800 w-full outline-none text-gray-400 mr-5" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </form>
    );
}

export default TodoCreate;