import { useState } from "react";


//Todo en mayusc porque es componente
export default function Todo({item, onUpdate, onDelete}) {

const [isEdit, setIsEdit] = useState(false);
function FormEdit(){

    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e){
        e.preventDefault();
    }
    function handleChange(e){
        const value = e.target.value;
        setNewValue(value);
    }

    function handleClickUpdateTodo(){
        onUpdate(item.id,newValue);
        setIsEdit(false);
    }

    return (
    
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
            <button className="button" onClick={handleClickUpdateTodo}>Actualizar</button>
    </form>);
}

function TodoElement(){

    return (
    
    <div className="todoInfo">
        
        <span className="todoTitle">{item.title}</span>
    <button className="button" onClick={()=> setIsEdit(true)} ><i className="fas fa-edit"></i> </button>
<button className="buttonDelete" onClick={(e)=> onDelete(item.id)}><i className="fas fa-trash"></i> </button>
</div>); 
}
    return (
    <div className="todo">
        
        {/* si mi estado edit es verdadero ? hacer tal vaina , los dos puntos son 
        el else que pasa ni no es verdadero: */}
    {isEdit? <FormEdit/>: <TodoElement/>}
    </div>
        
    );
}