import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InfiniteImageCarousel = ({ images }) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "20px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={8}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="
              background: #6F6F6F;
              width: 8px;
              height: 8px;
              margin: 0 4px;
              display: inline-block;
              border-radius: 50%;
              transition: all 0.3s ease;
            "></span>`;
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
          1024: { slidesPerView: 4 },
        }}
        style={{
          padding: "0px 5px 40px",
        }}
      >
        {images.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => alert(item)}
          >
            <img
              src={item}
              style={{
                height: "150px",
                width: "260px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                borderRadius: "12px",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div
          className="custom-prev"
          style={{
            position: "absolute",
            top: "40%",
            left: "0",
            zIndex: 10,
            width: "40px",
            height: "50px",
            borderRadius: "50%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transform: "translateY(-50%)",
          }}
        >
          <MdArrowBack size={36} color="#f25400" className="carousel-mobile" />
        </div>

        <div
          className="custom-next"
          style={{
            position: "absolute",
            top: "40%",
            right: "0%",
            zIndex: 10,
            width: "40px",
            height: "50px",
            borderRadius: "50%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transform: "translateY(-50%)",
          }}
        >
          <MdArrowForward
            size={36}
            color="#f25400"
            className="carousel-mobile"
          />
        </div>
      </Swiper>

      {/* Pagination container (will be filled by Swiper) */}
      <div
        // className="swiper-pagination"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      ></div>
    </div>
  );
};

export default InfiniteImageCarousel;
