import logo from '../../assets/images/gemini.png';
import "./Header.scss";
function Header(){
    return(
        <>
            <div className="Header">
                <div className="Header__logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className="Header__menu">
                    <ul>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;