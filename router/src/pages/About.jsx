import "../styles/about.css";

export default function About(prop) {
    return <div className="about">About
        <h1>Login State:
            {function loginStateCheck() {
                if (prop.loginBoo == true) {
                    console.log("user registered");
                    console.log("login state at loginstatecheck - true", isLoggedIn);
                }
                else {
                    console.log("user NOT registered");
                    console.log("loginstatecheck - false", isLoggedIn);
                }
              
            } 
            }</h1>
    </div>
}