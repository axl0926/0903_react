import InputForm from "./components/InputForm/InputForm";
import List from "./components/List/List";
import { useState } from "react";

import "./App.css";

function App() {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("list") || "[]"));
    return (
        <main className="main">
            <h1>연락처 리스트</h1>
            <div className="con-wrap">
                <InputForm setList={setList} />
                <div className="list-wrap">
                    <List list={list} setList={setList} />
                </div>
            </div>
        </main>
    );
}

export default App;
