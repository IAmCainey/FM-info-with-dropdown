// Styling
import style from "../css/topnav.module.css";

// Images
import Logo from "../assets/images/logo.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import ArrowUp from "../assets/images/icon-arrow-up.svg";

// Content
export default function TopNav() {
  return (
    <nav className={style.topnav}>
      <div>
        <img className={style.logo} src={Logo} alt="This is Snap" />
      </div>

      <div>
        <ul className={style.links}>
          <li className={style.link}>features</li>
          <li className={style.link}>company</li>
          <li className={style.link}>careers</li>
          <li className={`${style.link} ${style.dropdown}`}>about</li>
        </ul>
      </div>
      <div className={style.pushRight}>
        <button className={style.login}>login</button>
        <button className={style.register}>register</button>
      </div>
    </nav>
  );
}
