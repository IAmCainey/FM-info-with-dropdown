// Styling
import style from "../css/topnav.module.css";

// Images
import Logo from "../assets/images/logo.svg";
import Todo from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminders from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

// Content
export default function TopNav() {
  return (
    <nav className={style.topnav}>
      <div>
        <img className={style.logo} src={Logo} alt="This is Snap" />
      </div>

      <div>
        <ul className={style.links}>
          <li className={`${style.link} ${style.dropdown}`}>
            features
            <ul className={style.dropmenu}>
              <li className={style.link}>
                <img className={style.menuImg} src={Todo} alt="" /> todo list
              </li>
              <li className={style.link}>
                <img className={style.menuImg} src={Calendar} alt="" /> calendar
              </li>
              <li className={style.link}>
                <img className={style.menuImg} src={Reminders} alt="" />{" "}
                reminders
              </li>
              <li className={style.link}>
                <img className={style.menuImg} src={Planning} alt="" /> planning
              </li>
            </ul>
          </li>
          <li className={`${style.link} ${style.dropdown}`}>
            company
            <ul className={style.dropmenu}>
              <li className={style.link}>history</li>
              <li className={style.link}>our team</li>
              <li className={style.link}>blog</li>
            </ul>
          </li>
          <li className={style.link}>careers</li>
          <li className={style.link}>about</li>
        </ul>
      </div>
      <div className={style.pushRight}>
        <button className={style.login}>login</button>
        <button className={style.register}>register</button>
      </div>
    </nav>
  );
}
