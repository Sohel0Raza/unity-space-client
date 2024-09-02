import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Story.css";

const Story = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsBeginning(false)}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/g49WGXq/438774178-1632915597544065-7187502485372459234-n.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/2ZdyjHY/439626315-1637510197084605-584052028738173334-n.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src=" https://i.ibb.co/9tgrNnc/441257224-1645391662963125-1601403696053060985-n.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/kJ0v5xn/448561694-1673558620146429-4315785238183658189-n.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/QQ38X5Y/449919525-1681898439312447-3195768756191994713-n.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/H7k4Mg0/416099695-1568178317351127-5008499099959864654-n.jpg"
            alt=""
          />
        </SwiperSlide>

        <div
          className={`swiper-button-prev ${isBeginning ? "hidden" : ""}`}
        ></div>
        <div className={`swiper-button-next ${isEnd ? "hidden" : ""}`}></div>
      </Swiper>
    </>
  );
};

export default Story;
