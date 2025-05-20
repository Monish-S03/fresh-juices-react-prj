import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const Layout = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        alert(`Searching for: ${searchQuery}`);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-success text-light px-3" style={{backgroundColor:'#B4EBE6'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-dark fw-bold" to="/">
                        <i className="bi bi-cup-straw"></i> Fresh Juicer
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/">
                                    <i className="bi bi-house-door"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/Card">
                                    <i className="bi bi-box-seam"></i> Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/Blogs">
                                    <i className="bi bi-journal-text"></i> Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/Contact">
                                    <i className="bi bi-telephone"></i> Contact
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                className="form-control me-2 text-dark" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-warning" type="button" onClick={handleSearch}>
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;