// Styling
import style from "../css/topnav.module.css";

// Images
import Logo from "../assets/images/logo.svg";
// import ArrowDown from "../assets/images/icon-arrow-down.svg";

export default function TopNav() {
  return (
    <nav className={style.topnav}>
      <img src={Logo} alt="This is Snap" />

      <div>
        <ul className={style.links}>
          <li className={style.link}>features</li>
          <li className={style.link}>company</li>
          <li className={style.link}>careers</li>
          <li className={style.link}>about</li>
        </ul>
      </div>
    </nav>
  );
}
