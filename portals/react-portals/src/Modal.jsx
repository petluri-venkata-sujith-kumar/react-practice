import ReactDOM from "react-dom";

const Modal = ({ toggle: { toggle, handleToggle } }) => {
  console.log(toggle);
  return ReactDOM.createPortal(
    <div id="modal-container">
      <article className="container">
        <div className="modal-header">
          <span><button onClick={handleToggle}>{toggle ? "X" : "open"}</button></span>
          <h1>Login</h1>
        </div>
        <div className="modal-content">
            <form action="">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="enter password" />
                </div>
                <div className="form-group">
                    <button>Login</button>
                </div>
            </form>
        </div>
      </article>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
