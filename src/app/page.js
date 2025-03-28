"use client";
import style from "./page.module.css";
import { useState } from "react";

export default function home() {
  const [name, setName] = useState("abcd");
  const deepika = () => {
    alert("hello coding");
    setName("efgh");
  };
  return (
    <div className={style.page}>
    
      <main className={style.main}>
        <button onClick={deepika}>click me</button>
        <h1>name is {name}</h1>
        <Users name="mor"/>
      </main>
    </div>
  );
}
const Users = (props)=>{
  return (
    <>
    <h1>name is {props.name}</h1>
    </>
  )
}
 