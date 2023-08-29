import { useState } from "react";
import Todo from "./todo";

import"./todoApp.css";

// primera letra en mayusculas TodoApp para que react sepa que es un componente
//className es como class pero en jsx
export default function TodoApp(){
    //title tiene el valor de hi y es como un getterque llamo en el input
    //y setTitle me sirve para cambiar o setear el valor del estado o sea cambiar el hi x otra cosa
    const [title, setTitle] =useState("");
    const [todos, setTodos] =useState([]); //Estado donde voy guardando to dos o sea una lista (arreglo) necesito k cada valor de title+click se inserte en ese arreglo

// function handleClick(e){
//     e.preventDefault();
//     setTitle('Stefano');
// }

//Esta funcion hace que el title cambie cuando escribo en el input y que se actualice al valor que le doy a medida que escribo
function handleChange(event){
    const value = event.target.value; // Asi capturo lo que escribo en el input: event:objeto con info del evento ocurrido (evento onChange). target:elemento en el que se desencadenó el evento o sea el input. .value:valor actual del elemento. texto ingresado en el campo. 
    setTitle(value); //llamo el valor a que se muestre

}

function handleSubmit(e){
    e.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
    };
    const temp= [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
    setTitle("");
}

function handleUpdate(id, value){
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title =value;
    setTodos(temp);
}

function handleDelete(id){
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp);
}

    return ( 
    <div className="todoContainer" >
        <h1 class="titulo">Lista de tareas pendientes</h1>
        {/* onSubmit es un atributo de eventos que se utiliza para envío del formulario. Cuando un usuario envía un formulario haciendo clic en el botón "Enviar", se dispara el evento onSubmit. */}
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            {/* Campo de ingreso de texto normal, onchange es un es un atributo de eventos es un evento para un cambio o actualizacion de un valor*/}
            <input onChange={handleChange} className="todoInput" value={title}/> 
            {/* El botón es un input tipo submit. */}
            <input 
            onClick={handleSubmit} 
            type="submit" 
            value="Crear tarea" 
            className="buttonCreate"/>
        </form>


        <div className="todosContainer">
            {
                todos.map(item=>(
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>

    </div>
    );
}