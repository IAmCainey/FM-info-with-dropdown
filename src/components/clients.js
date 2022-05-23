// Style
import style from "../css/clients.module.css";

// Clients
import Audiophile from "../assets/images/client-audiophile.svg";
import Databitz from "../assets/images/client-databiz.svg";
import Maker from "../assets/images/client-maker.svg";
import Meet from "../assets/images/client-meet.svg";

export default function Logos() {
  return (
    <section className={style.clients}>
      <img className={style.data} src={Databitz} alt="" />
      <img className={style.audio} src={Audiophile} alt="" />
      <img className={style.meet} src={Meet} alt="" />
      <img className={style.maker} src={Maker} alt="" />
    </section>
  );
}
