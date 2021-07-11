import React from "react";
import { auth, provider } from "../firebase";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./Login.css";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__header">
        <div className="login__headerLeft">
          <img
            src="https://discord.com/assets/ff41b628a47ef3141164bfedb04fb220.png"
            alt=""
          />
        </div>
        <div className="login__headerCenter">
          <p>Download</p>
          <p>Nitro</p>
          <p>Safety</p>
          <p>Support</p>
        </div>
        <div className="login__headerRight">
          <button>Open Discord</button>
        </div>
      </div>
      <div className="login__body">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="login__bodyButton">
          <button className="login__buttonDownload">
            <GetAppIcon className="login__iconDownload" />
            Download for Windows
          </button>
          <button className="login__buttonSignIn" onClick={signIn}>
            Open Discord in your browser
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
