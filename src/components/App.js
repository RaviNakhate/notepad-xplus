import "./App.css";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { insert, read, updat, delet } from "./methods";

function App() {
  const [noteId, setNoteId] = useState();
  const [key, setKey] = useState();
  const [des, setDes] = useState("");

  return (
    <>
      <header>
        <div>
          <img
            src={Logo}
            className="logo"
            onClick={() => window.location.reload()}
          />
        </div>
      </header>

      <table className="table" cellPadding="50">
        <tr>
          <td>
            Note Id<span style={{ color: "red" }}>*</span>
          </td>
          <td>
            <input
              type="number"
              value={noteId}
              onChange={(e) => setNoteId(e.target.value)}
              className="input"
              placeholder="min 10 digits"
            />
          </td>
        </tr>
        <tr>
          <td>
            Key<span style={{ color: "red" }}>*</span>
          </td>
          <td>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="input key"
              placeholder="private"
            />
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>Description</td>
          <td>
            <textarea
              type="text"
              rows="8"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="input textarea"
            ></textarea>
          </td>
        </tr>
      </table>

      <div>
        <button className="buttons" onClick={() => insert(noteId, key, des)}>
          Insert
        </button>
        <button className="buttons" onClick={() => updat(noteId, key, des)}>
          Update
        </button>
        <button className="buttons" onClick={() => delet(noteId, key)}>
          Delete
        </button>
        <button className="buttons" onClick={() => read(noteId, key)}>
          Read
        </button>
      </div>

      <div className="notes">
        <div className="note">
          <b> Insert 👉</b> All field's are required
        </div>
        <div className="note">
          <b> Update 👉</b> NoteId, Private key are required
        </div>
        <div className="note">
          <b> Delete 👉</b> NoteId, Private key are required
        </div>
        <div className="note">
          <b> Read 👉</b> NoteId, Public key are required
        </div>
      </div>

      <footer>
        <div className="developby">Developed by Ravi Nakhate</div>
        <div className="links">
          <a href="https://github.com/RaviNakhate/" target="_blank">
            <img src={Github} className="link" />
          </a>
          <a
            href="https://in.linkedin.com/in/ravi-nakhate-a1272b1ba/"
            target="_blank"
          >
            <img src={Linkedin} className="link" />
          </a>
          <a href="https://twitter.com/RaviNakhate2/" target="_blank">
            <img src={Twitter} className="link" />
          </a>
          <a href="https://www.instagram.com/ravi_nakhate_/" target="_blank">
            <img src={Instagram} className="link" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
