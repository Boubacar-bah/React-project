import { Outlet, Link} from "react-router-dom";

const Layout1 = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><i className="fas fa-home"> <span> Home</span></i></Link>
                    </li>
                    <li>
                        <Link to ="/blogs"><i className="fas fa-cloud"> <span> Blogs</span></i></Link>
                    </li>
                    <li>
                        <Link to="/Formulaire"><i className="fa-brands fa-facebook"> <span> Formulaire</span></i></Link>
                    </li>
                    <li>
                        <Link to="/Lists"><i className="fas fa-car"> <span> Lists</span></i></Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout1;