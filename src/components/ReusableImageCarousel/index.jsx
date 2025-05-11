import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/style.scss";
import { useNavigate } from "react-router-dom";
import add2Image from "../../assets/Images/adv2Image.png";

const InfiniteImageCarousel = ({ images, type }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/storeDetails");
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: type === "big" ? 5000 : 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        draggable={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: type === "big" ? 3 : 4 },
        }}
        className="custom-swiper"
      >
        {images?.map((item, i) => (
          <SwiperSlide
            key={i}
            className="carousel-slide"
            // onClick={() => alert(item)}
            onClick={handleImageClick}
          >
            <img
              src={`https://core.pay2off.com/${item?.image}`}
              className="carousel-image"
              style={{
                width: type === "big" ? "375px" : "260px",
              }}
            />
          </SwiperSlide>
        ))}

        <div className="custom-prev nav-button">
          <MdArrowBack size={36} color="#f25400" className="carousel-icon" />
        </div>

        <div className="custom-next nav-button">
          <MdArrowForward size={36} color="#f25400" className="carousel-icon" />
        </div>
      </Swiper>
    </div>
  );
};

export default InfiniteImageCarousel;
