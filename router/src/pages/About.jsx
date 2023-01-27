import "../styles/about.css";

export default function About(prop) {
    return <div className="about">About

        <p>It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here',
            making it look like readable English. </p>

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