import './NavBar.css'
export default function NavBar() {
    return(
        <nav className="nav">
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/work_log">Work Log</a>
                </li>
            </ul>
        </nav>

    )
}