import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function GulfBankImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="cursoring">
      <Slider {...settings}>
        <div>
          <img
            className="imageC"
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQETHp7J5e_yyQ/company-background_10000/0/1601896093708?e=2147483647&v=beta&t=imWr5FMIyDd_JV5cbHUntkbgq3Dw-zbk4xDywoiSugI"
          />
        </div>
        <div>
          <img
            className="imageC"
            src="https://www.gckuwait.com/wp-content/uploads/2016/12/gulf-consult-Gulf-Bank-Branches-11.jpg"
          />
        </div>
        <div>
          <img
            className="imageC"
            src="https://www.intelligentcio.com/me/wp-content/uploads/sites/12/2019/03/Gulf-Bank-1000.png"
          />
        </div>
      </Slider>
    </div>
  );
}

export default GulfBankImage;
