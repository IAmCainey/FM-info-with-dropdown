// Styling
import style from "../css/mobileMenu.module.css";

// Images
import BurgerMenu from "../assets/images/icon-menu.svg";
import Logo from "../assets/images/logo.svg";

// import Logo from "../assets/images/logo.svg";
// import Todo from "../assets/images/icon-todo.svg";
// import Calendar from "../assets/images/icon-calendar.svg";
// import Reminders from "../assets/images/icon-reminders.svg";
// import Planning from "../assets/images/icon-planning.svg";

export default function MobileMenu() {
  return (
    <div>
      <div className={style.menu}>
        <div className={style.menuInner}>
          <img className={style.logo} src={Logo} alt="" />
          <img className={style.burgerMenu} src={BurgerMenu} alt="" />
        </div>
        <ul className={style.links}>
          <li>home</li>
        </ul>
      </div>
    </div>
  );
}
