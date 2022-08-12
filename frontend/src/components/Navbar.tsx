import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                    <Link to="/doctors">
                        <h1>Doctors</h1>
                    </Link>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;
