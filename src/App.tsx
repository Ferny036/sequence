import { useState } from "react";
import { score } from "./sequence";


function App() {

  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [res, setRes] = useState({ value: 0, index_i: 0, index_j: 0 });
  const [wasPressed, setWasPressed] = useState(false);

  //Component
  type textType = { str: string, i: number, j: number };
  const Txt = ({ str, i, j }: textType) => (
    <>
      {str.substring(0, i + 1)}
      <span className={wasPressed ? "coincidence" : ""}>{str.substring(i + 1, j + 1)}</span>
      {str.substring(j + 1, str.length + 1)}
    </>
  );

  const handleButton = () => {
    setWasPressed(true);
    setRes(score(query, subject, 1, -1));
  }

  const handleInput = (value: string, fn: Function) => {
    setWasPressed(false);
    fn(value);
  }

  return (
    <>

      <div className="form">
        <h1>Alineación local</h1>
        <input id="query" type="text" placeholder="Query" onChange={e => handleInput(e.target.value, setQuery)} />
        <input id="subject" type="text" placeholder="Subject" onChange={e => handleInput(e.target.value, setSubject)} />
        <button id="btn-handler" onClick={e => handleButton()} > Calcular </button>
      </div>
      <div className="result">
        <p style={{ display: query.length > 0 ? "block" : "none" }} >Query</p>
        <label id="querylabel"><Txt str={query} i={res.index_i} j={res.index_j} /></label>
        <br />
        <p style={{ display: subject.length > 0 ? "block" : "none" }} >Subject</p>
        <label id="subjectlabel"><Txt str={subject} i={res.index_i} j={res.index_j} /></label>
        <br />
        <label id="resultlabel">Puntuacion: {res.value}</label>
      </div>
    </>
  );
}

export default App;