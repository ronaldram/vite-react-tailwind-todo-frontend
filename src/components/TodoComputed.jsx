const TodoComputed = ({computedItemLeft, clearCompleted}) => {
    return (
        <section className="duration-1000 dark:bg-gray-800 py-4 px-4 flex justify-between bg-white rounded-b-md">
            <span className="text-gray-400">{computedItemLeft} items left</span>
            <button className="text-gray-400" onClick={()=> clearCompleted()}>clear completed</button>
        </section>
    );
}

export default TodoComputed;