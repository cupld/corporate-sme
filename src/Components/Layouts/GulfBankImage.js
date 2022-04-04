import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function GulfBankImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="cursoring">
      <Slider {...settings}>
        <div>
          <img
            className="imageC"
            src="https://www.intelligentcio.com/me/wp-content/uploads/sites/12/2019/03/Gulf-Bank-1000.png"
          />
        </div>
        <div>
          <img
            className="imageC"
            src="https://www.almrsal.com/wp-content/uploads/2014/10/Gulf-Bank-One-of-Kuwaits-oldest-banks-established-in-1960.jpg"
          />
        </div>
        <div>
          <img
            className="imageC"
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQETHp7J5e_yyQ/company-background_10000/0/1601896093708?e=2147483647&v=beta&t=imWr5FMIyDd_JV5cbHUntkbgq3Dw-zbk4xDywoiSugI"
          />
        </div>
      </Slider>
    </div>
  );
}

export default GulfBankImage;
