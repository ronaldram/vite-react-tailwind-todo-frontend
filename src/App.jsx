import CrossIcon from "./components/icons/CrossIcon"; 
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat bg-gray-100 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-400"/>
          </button>
        </div>                
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4">
          <span className="inline-block h-3 w-3 rounded-full border-2 py-4 px-4 ml-2"></span>
          <input type="test" placeholder="Create a new todo..." className="w-full outline-none text-gray-400 mr-5" />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-400 border-b-2">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online javascript curse </p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b-2">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online javascript curse </p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b-2">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online javascript curse </p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">clear completed</button>
          </section>
        </div>
        
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className="flex justify-center gap-4 rounded-md bg-white p-8">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Complete</button>
        </div>        
      </section>
      <p className="text-center">Drag and drop to reorder list</p>
    </div>    
  )
}

export default App;