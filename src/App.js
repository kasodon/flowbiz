import './App.scss';
import logo from './assets/img/logo.png';
import logo_single from './assets/img/logo_single.png';
import man from './assets/img/man.png';
import jiffy from './assets/img/jiffy.png';
import sally from './assets/img/sally.png';

function App() {
  return (
    <div className="App">
      <div className="bg-image"></div>
      <div className="nav">
        <div className="logo"><img src={logo_single} alt="" /></div>
        <div className="menu-toggle">
            <input type="checkbox" className="nav__checkbox" id="nav-toggle" />
            <label htmlFor="nav-toggle" className="nav__button">
                <span className="nav__icon">&nbsp;</span>
            </label>
            </div>
      </div>
      <header>
        <h1>FLOWBIZ</h1>
      </header>
      <section className="hero">
        <div className="content">
          <h2>CREATE & DEVELOP YOUR PRODUCT</h2>
          <h1>EASY AS 1,2,3</h1>
          <p>Answer a few questions and let the WonderFlow wizard help you bring your app and software visions to life.</p>
          <div className="cta">
            <a href="" className="blacky">TRY THE WONDERFLOW WIZARD</a>
            <a href="" className="bluey">LEARN MORE</a>
          </div>
        </div>
        <div className="illustration">
          <img src={man} alt="" />
        </div>
      </section>
      <section className="identity">
        <h1>WHICH ONE ARE YOU?</h1>
        <div className="box">
        <div className="single-box yellow">
          <h2 className="title"><span>The confused<br /></span>ENTREPRENEUR</h2>
          <img src={jiffy} alt="" />
          <p>"I have great idea and lots of drive, but no tech knowledge"</p>
          <button>THAT'S ME!</button>
        </div>
        <div className="single-box purple">
        <h2 className="title"><span>The overworked<br /></span>CTO</h2>
          <img src={sally} alt="" />
          <p>"My team members can barely read each other's code"</p>
          <button>THAT'S ME!</button>
        </div>
        </div>
      </section>
      <section className="covered"></section>
      <section className="work"></section>
      <section className="contact"></section>
      <footer></footer>
    </div>
  );
}

export default App;
