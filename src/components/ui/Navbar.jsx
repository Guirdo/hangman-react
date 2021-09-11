import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand mx-3"
                to="/"
            >
                The hangman, give it a hang
            </Link>

            <div className="navbar-collapse collapse  dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item" >
                        <a
                            className="nav-link"
                            href="https://guirdo.github.io/#/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            About me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}