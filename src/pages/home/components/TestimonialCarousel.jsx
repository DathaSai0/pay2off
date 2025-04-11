import { useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const TestimonialCarousel = ({ children }) => {
  const scrollRef = useRef();

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  return (
    <div className="carousel-container">
      <div className="carousel-button left" onClick={() => scroll(-300)}>
        <MdArrowBack size={36} color="#f25400" />
      </div>

      <div ref={scrollRef} className="carousel-content hide-scrollbar">
        {children}
      </div>

      <div className="carousel-button right" onClick={() => scroll(300)}>
        <MdArrowForward size={36} color="#f25400" />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
