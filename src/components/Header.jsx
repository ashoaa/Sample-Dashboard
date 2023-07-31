import "../../styles/Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="company-name">
        <img src="assets/images/Robo logo.png" />
        <p>Company Name</p>
      </div>
      <div className="right-toolbar">
        <div className="message">
          <p>1 پیغام دارید</p>
          <div>
            <img src="assets/images/mail.png" />
          </div>
        </div>
        <div className="user">
          <p>سارا محمدیان</p>
          <div>
            <img src="assets/images/woman.png" />
            <div className="user-badge">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none">
                  <path
                    d="M5.82199 6.57887C5.42431 7.15288 4.57569 7.15288 4.178 6.57887L0.891225 1.83481C0.431745 1.17161 0.9064 0.26532 1.71322 0.26532L8.28678 0.265321C9.0936 0.265321 9.56825 1.17161 9.10877 1.83482L5.82199 6.57887Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
