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

            <div className="navbar-collapse">
                <div className="navbar-nav">

                   
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                </ul>
            </div>
        </nav>
    )
}