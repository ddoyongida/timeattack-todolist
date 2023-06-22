
import './App.css';
import { useState } from 'react';
import TodoList from "../src/components/TodoList.jsx"




function App() {
 const initiState =[
    {
        id : Date.now(),
        title : "테스트 제목1",
        contents : "테스트 내용1",
        isDone : false,
    },
    {
        id : Date.now() +1,
        title : "테스트 제목2",
        contents : "테스트 내용2",
        isDone : false,
    },
    {
        id : Date.now()+2,
        title : "테스트 제목3",
        contents : "테스트 내용3",
        isDone : false,
    },
 ];

const [todos, setTodos] = useState (initiState);
const [title, setTitle] = useState("");
const [contents, setContents] = useState("");

return (
<>
    <header style={{
        backgroundColor: "#f52e7f",
        padding :"10px",
    }}> 헤더!
    </header>
    <main style={{
        backgroundColor: "#25e09a",
        padding :"10px",}}>
    <div>
        <h3>Input!</h3>
        <div>
            <form onSubmit={function(event){
                event.preventDefault();

                const newTodo ={
                    id: Date.now(),
                    title,
                    contents,
                    isDone : false,
                };


                setTodos([...todos, newTodo]);
            }}>

                <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    value={title}
                    onChange={function(event){
                        setTitle(event.target.value);
                    }}/>
                <input
                    type="text"
                    placeholder="내용을 입력해주세요"
                    value={contents}
                    onChange={function(event){
                        setContents(event.target.value);
                    }}/>
                <button type="submit"> 추가하기</button>
            </form>
        </div>
    </div>
        <TodoList todos={todos} setTodos={setTodos} isDone={false}/>
        <TodoList todos={todos} setTodos={setTodos} isDone={true}/>
    </main>
    <footer style={{
        backgroundColor: "#9044f4",
        padding : "10px",}}>풋터!
    </footer>






</>
);
};
export default App;
