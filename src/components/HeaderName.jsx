import "../../styles/HeaderName.scss";
const HeaderName = () => {
  return (
    <div className="header-name">
      <div className="header-name-text">
        <p className="header-name-title">ساخت برنامه ورودی</p>
        <p className="header-name-message"> برنامه خود را بسازید</p>
      </div>
      <div className="header-name-icon">
        <img src="src/assets/icons8-strategy-news-100.png" />
      </div>
    </div>
  );
};

export default HeaderName;
