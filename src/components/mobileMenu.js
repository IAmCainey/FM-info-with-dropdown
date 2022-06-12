// Styling
import style from "../css/mobileMenu.module.css";

// Images
import BurgerMenu from "../assets/images/icon-menu.svg";

import Logo from "../assets/images/logo.svg";
import Todo from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminders from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

export default function MobileMenu() {
  return (
    <div className={style.menu}>
      <BurgerMenu></BurgerMenu>
      <ul className={style.Links}>
        <li>home</li>
      </ul>
    </div>
  );
}
