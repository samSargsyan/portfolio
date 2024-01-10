import "./header.scss";
import sun from "../../images/sun.png";
import sunOff from "../../images/sun2.png";

const Header = ({sunOn, setSunOn}) => {

  return (
    <div className="header">
      <div className="logoDiv">
        <div className="logo"></div>
        <span>Personal Portfolio</span>
      </div>
      <div
        className="lightMode"
        onClick={() => setSunOn((prev) => !prev)}
        style={{ backgroundImage: `url("${sunOn ? sun : sunOff}")` }}
      ></div>
    </div>
  );
};

export default Header;
