import React from "react"
import '../App.jsx';


function TodoList ({ todos, setTodos, isDone}) {
    return (
        <div>
            <h2>{isDone ? "DONELIST" : "TODOLIST"}</h2>
            {todos.filter(function(t){
                return t.isDOne ===isDone
            })
            .map(function(todo){
                return(
                    <div
                        style ={{
                            border: "1px solid yellow",
                            padding: "10px",
                            margin: "10px",
                        }}
                        key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
            <button
                onClick = {function(){
                    const newTodos = todos.filter(
                        (filteredTodo) => filteredTodo.id !== todos.id
                    );
                setTodos(newTodos);
                }}
            >    
            
            </button>

            <button
                onClick={function(){

                    const newTodos = todos.map(function (item){
                        if (item.id === todos.id) {
                            return{...item, isDone: !item.isDone};
                        } else {
                            return item;
                        }
                        });

                        setTodos(newTodos);
                    
                }}
                >
                    {isDone ? "취소" : " 완료"}
            </button>
            </div>
                );
            })}
        </div>
    );
}

export default TodoList;