// Imports
import TopNav from "./components/topNav";
import Mobile from "./components/mobileMenu";
import Clients from "./components/clients";
import Footer from "./components/footer";

//images
import HeroDesktop from "./assets/images/image-hero-desktop.png";

function App() {
  return (
    <>
      <TopNav />
      <Mobile />
      <div className="App">
        <section className="hero">
          <div>
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. <br />
              Strealine processes, create team rituals, and watch productivity
              soar.
            </p>

            <button className="btn">Learn more</button>

            <Clients />
          </div>
          <div>
            <img className="heroImg" src={HeroDesktop} alt="make remote work" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
