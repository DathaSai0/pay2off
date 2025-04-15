import React from "react";
import ReusablePageCard from "../../components/ReusablePageCard";
import { useDispatch, useSelector } from "react-redux";
import { handleChangePage } from "../../Redux/pageTypeSlice";
import { homePageCardSection } from "./constants/constants";
import "./styles/style.scss";
import HowItWorks from "../../components/howItWorks";
import Vendors from "../vendors";
import TestimonialCard from "./components/TestimonilaCard";
import ReusableCarousel from "../../components/ReusableCarousel";
import InfiniteImageCarousel from "../../components/ReusableImageCarousel";
import addImage from "../../assets/Images/addImage.png";
import add2Image from "../../assets/Images/adv2Image.png";
import catFruits from "../../assets/Images/catFruites.png";
import CouponCard from "../../components/CuponCard/CouponCard";
import { LuMessageCircleQuestion } from "react-icons/lu";
import DialogModal from "../../components/DialogModal/Index";
import RequestModal from "./components/RequestModal";
import Users from "../users";

function Home() {
  const pageType = useSelector((state) => state.pageType);
  const dispatch = useDispatch();

  console.log(pageType, "pageType");

  return (
    <>
      <div className="home-page-user-vendor-marketer-conatiner">
        {homePageCardSection?.map((card) => (
          <ReusablePageCard
            key={card?.type}
            title={card?.title}
            image={card?.image}
            content={card?.content}
            onClick={() => dispatch(handleChangePage(card?.type))}
            displayPointer={card?.type === pageType?.type}
          />
        ))}
      </div>

      {pageType?.type === "vendor" && <Vendors />}

      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          padding: "16px",
        }}
      >
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
      </div>

      {pageType?.type === "user" && <Users />}

      <ReusableCarousel>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </ReusableCarousel>

      <RequestModal />
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
