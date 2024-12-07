import './Navbar.css'
import logo from '/kec.png';

function Navbar(){
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="kec lite Logo"/>
                    <h1>KEC Lite 2081 Pre-Event: React Workshop</h1>
                </div>
                <div className="nav-links">
                   <a href="https://github.com/sabnocksid" className="nav-link">Website</a>
                   <a href="https://www.linkedin.com/in/siddhartha-poudel-46a5211b3/" className="nav-link">Linkedin</a>
                   <a href="https://github.com/sabnocksid" className="nav-link">Github</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar