import "./App.css";
import exit from "./remove.png";

const Panel = ({ Data }) => {
  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
  };
  return (
    <div className="Panel">
      <div className="result_form">
        <img
          src={exit}
          alt="exit_icon"
          width={30}
          height={30}
          className="img"
          onClick={closeform}
        ></img>
        <div className="panel_info">
          <div className="info">
            <div className="hero">
              <img src={Data.img} alt="img" width={100} height={100}></img>
              <span>{Data.description}</span>
            </div>
            <p>{Data.content}</p>
            <p>
              Có thể bạn chưa biết: {Data.people} và nhiều nhân vật tiêu biểu
              khác có cùng nhòm tính cách với bạn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
