import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className='col'>
                <h3> Career </h3>
                    <li>
                        <a>
                            Download My CV
                        </a>
                    </li>

            </div>
            <div className='col'>
                <h3> Project Links </h3>
                    <li>
                        <a>
                            Jira
                        </a>
                    </li>
                    <li>
                        <a>
                            Github
                        </a>
                    </li>
            </div>
            <div className='col'>
                <h3> Contact </h3>
                    <li>
                        <a>
                            Phone
                        </a>
                    </li>
                    <li>
                        <a>
                            Email
                        </a>
                    </li>
            </div>
        </div>
    )
}

export default Footer;