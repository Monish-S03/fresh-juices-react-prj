import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSun, FaMoon, FaRegCircle, FaUser, FaLock } from "react-icons/fa";
import { FaLeaf, FaGlassWhiskey, FaTruck, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function SignIn() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`d-flex align-items-center py-4 vh-100 justify-content-center flex-column bg-${theme}`}>      
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          {theme === "light" ? <FaSun /> : theme === "dark" ? <FaMoon /> : <FaRegCircle />} 
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow">
          <li><button className="dropdown-item" onClick={() => handleThemeChange("light")}><FaSun className="me-2" /> Light</button></li>
          <li><button className="dropdown-item" onClick={() => handleThemeChange("dark")}><FaMoon className="me-2" /> Dark</button></li>
          <li><button className="dropdown-item" onClick={() => handleThemeChange("auto")}><FaRegCircle className="me-2" /> Auto</button></li>
        </ul>
      </div>

      <main className="form-signin text-center bg-info p-5 w-50" style={{borderRadius:"15px" }}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput"><FaUser className="me-2" /> Email address</label>
          </div>
          
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword"><FaLock className="me-2" /> Password</label>
          </div>
          
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
          </div>
          <button className="btn btn-primary w-30 py-2" type="submit">Log in</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
      {/* Footer Section */}
              <footer className="text-dark text-center py-4 mt-5 w-100" style={{backgroundColor:'#B4EBE6'}}>
              <div className="container">
                <p className="mb-2">&copy; {new Date().getFullYear()} Fresh Juices. All Rights Reserved.</p>
                <div className="social-icons d-flex justify-content-center gap-3">
                  <a href="#" className="text-dark"><FaFacebook size={24} /></a>
                  <a href="#" className="text-dark"><FaInstagram size={24} /></a>
                  <a href="#" className="text-dark"><FaTwitter size={24} /></a>
                </div>
              </div>
            </footer>
    </div>
  );
}