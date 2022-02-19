import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Box from "./component/Box";

function App() {
  // const [number,setNumber] = useState(0);
  // useEffect(()=>{
  //   setNumber(number+1)
  // }, []);
  const [todos, setTodos] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    //console.log(res.data)
    setTodos(res.data); //ใส่ข้อมูลลงในตัวแปร
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-l flex flex-wrap bg-zinc-100 justify-between p-20">
      {todos.map((todo, index) => (
        <Box key={index} title={todo.title} complete={todo.completed} />
      ))}
    </div>
  );
}

export default App;
