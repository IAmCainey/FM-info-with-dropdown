// Imports
import TopNav from "./components/topNav";

//images
import HeroDesktop from "./assets/images/image-hero-desktop.png";

function App() {
  return (
    <div className="App">
      <TopNav />

      <section className="hero">
        <div>
          <h1>
            Make <br />
            remote work
          </h1>
          <p>
            Get your team in sync, no matter your location. <br />
            Strealine processes, create team rituals, and watch productivity
            soar.
          </p>

          <button className="btn">Learn more</button>
        </div>
        <div>
          <img className="heroImg" src={HeroDesktop} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
