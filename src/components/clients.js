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
      <img src={Databitz} alt="" />
      <img src={Audiophile} alt="" />
      <img src={Maker} alt="" />
      <img src={Meet} alt="" />
    </section>
  );
}
