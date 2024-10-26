import img from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <header id="header">
      <img src={img} alt="calculator-logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;