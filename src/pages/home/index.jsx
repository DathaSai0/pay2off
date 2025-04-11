import React from "react";
import ResusablePageCard from "../../components/ReusablePageCard";
import { useDispatch, useSelector } from "react-redux";
import { handleChangePage } from "../../Redux/pageTypeSlice";
import { homePageCradSection } from "./constants/constants";
import "./styles/style.scss";
import HowItWorks from "../../components/howItWorks";
import Vendors from "../vendors";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TestimonialCard from "./components/TestimonilaCard";

function Home() {
  const pageType = useSelector((state) => state.pageType);
  const dispatch = useDispatch();

  console.log(pageType, "pageType");

  return (
    <>
      <div className="home-page-user-vendor-marketer-conatiner">
        {homePageCradSection?.map((card) => (
          <ResusablePageCard
            key={card?.type}
            title={card?.title}
            image={card?.image}
            content={card?.content}
            onClick={() => dispatch(handleChangePage(card?.type))}
            displayPointer={card?.type === pageType?.type}
          />
        ))}
      </div>

      <Vendors />

      <TestimonialCarousel>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </TestimonialCarousel>
    </>
  );
}

export default Home;

{
  /* <Helmet>
<title>My Dynamic Page Title</title>
<meta name="description" content="This is a dynamic page description." />
<meta property="og:title" content="My Dynamic Page Title" />
<meta property="og:description" content="This is a dynamic page description." />
<meta property="og:image" content="https://example.com/dynamic-image.jpg" />
<meta property="og:url" content={window.location.href} />
</Helmet> */
}
