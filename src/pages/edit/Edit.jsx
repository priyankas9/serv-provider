import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom";
import { useState } from "react";
const Edit = ({inputs,title}) => {
    const [focused, setFocused] = useState(false);
    const [data, setData] = useState({});
        const handleAdd = (e) => {
      e.preventDefault();
        }
    
        const handleFocus = (e) => {
          setFocused(true);
        }
    
      const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
    
        setData({ ...data, [id]: value });
      };
        console.log(data);
    return(
         <div className="new">
             <Sidebar/>
        <div className="newContainer">
            <Navbar/>
            <div className="top">
           
         
            <Link to="/drivers/test" style={{ color: "inherit",textDecoration: "none" }}>
        <h1>{title}</h1>
        </Link>

            </div>
            <div className="buttom">
        <div className="left">
       
        </div>
        <div className="right">
       <form action="" onSubmit={handleAdd}>
           

               {inputs.map((input) => (
                   <div className="formInput">
                       <label htmlFor="">{input.label}</label>
               <input type={input.type} 
               onChange={handleInput} 
               onBlur={handleFocus} 
               focused={focused.toString()} 
               pattern={input.pattern} 
               required
               
               />
               <span>
                   {input.errorMessage}
               </span>
           </div>
               ))}
               
           
           <button  type="submit">
               New 
           </button>
       </form>
        </div>
            </div>
        </div>
         </div>
    )

}
export default Edit;