
import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm} from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";



const Create = () => {
const [todos, settodos] = useContext(todocontext)


// using react form hook,
// object destructuring
const{
  register,
  handleSubmit,
  reset,
  formState : {errors},
}=useForm();



const submitHandler = (data)=>{
data.isCompleted = false,
data.id = nanoid()
 const copytodos = [...todos]
 copytodos.push(data)
 settodos(copytodos);
 toast.success("Todo Created!");
 reset();

 }

  return (
    <div className=" w-[60%] p-6 mx-auto">
         <h1 className="text-4xl font-thin mb-5">
          Set <span className="text-red-700 font-semibold">Reminders </span>For <br /> Tasks</h1>
         
          <form onSubmit={handleSubmit(submitHandler)}>
            <input
              {...register("title", {
                required : "titile Can't be empty "
              })}   //syntax hai man lo
              className=" border-b w-full text-2xl font-thin p-2 outline-0"
               type="text" 
               placeholder="title"
             />

             {/* {errors && errors.title && errors.title.message && 
             (<small>{errors.title.message}</small>)} */}

               {/* short form */}
               <small className="text-red-500">{errors?.title?.message}</small>

            <br /> <br />

            <button className="px-10 py-2 border rounded mt-2">Create todo</button>
          
          </form>
    </div>
  )
}

export default Create