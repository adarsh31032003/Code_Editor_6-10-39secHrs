import "./EditorContainer.scss"

export const EditorContainer = () => {
  return(
    <div className="root-editor-container">
        <div className="editor-header">
          <div className="editor-left-container">
            <b className="title">{"Title of the Card"}</b>
            <span className="material-icons">edit</span>
            <button>Save Code</button>
          </div>
          <div className="editor-right-container">
            <select>
              <option value="cpp">CPP</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <select>
              <option value="vs-dark">Vs-Dark</option>
              <option value="vs-light">Vs-Light</option>
            </select>
          </div>
        </div>
        <div className="editor-body">
          Body
        </div>
        <div className="editor-footer">
            <button></button>
            <label htmlFor="import-code">Import Code</label>
            <input type="file" id="import-code" style={{display: 'none'}} />
            <button>Export Code</button>
            <button>Run Code</button>
        </div>
    </div>
  );
}