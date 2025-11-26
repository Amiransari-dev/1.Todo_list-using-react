

import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";



const Read = () => {
    const [todos, settodos] = useContext(todocontext)
    
  
    const DeleteHandler = (id) => {
     const filtertodo = todos.filter((todo) => todo.id != id)
    //  console.log(filtertodo);
    settodos(filtertodo);
    toast.error("deleted")

    }

     const rendertodos = todos.map((todo) => {
      return <li
      //  key={todo.id}
        className="mb-1 flex justify-between items-center p-2 bg-cyan-800 rounded"> 
      <span className="font-thin text-xl"> {todo.title} </span>

       <button 
       className=" text-red-600 text-sm"
       onClick={() => DeleteHandler(todo.id)}>
        Delete
        </button></li>;
    })

  return (
    <div className="w-[40%] p-6">
         <h1 className="text-4xl font-thin mb-5">
          <span className="text-pink-800">Pending</span> todos</h1>
          <ol>{rendertodos}</ol>
    </div>
  )
}

export default Read