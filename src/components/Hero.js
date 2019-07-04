import HeroEvent from './heroEvent';
/**
 * Hero component
 * @return {Hero}
 */
function Hero() {
  return (
    <header id="hero" className="grid-container">
      <div className="column-24">
        {/* Navigation */}
        <nav></nav>

        {/* Side bar */}
        <div></div>

        {/* Event */}
        <div>
          <HeroEvent />
        </div>
      </div>
    </header>
  );
}

export default Hero;
