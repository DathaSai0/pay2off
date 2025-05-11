import React, { useEffect } from "react";
import ReusablePageCard from "../../components/ReusablePageCard";
import { useDispatch, useSelector } from "react-redux";
import { handleChangePage } from "../../Redux/pageTypeSlice";
import { homePageCardSection } from "./constants/constants";
import "./styles/style.scss";
import Vendors from "../vendors";
import TestimonialCard from "./components/TestimonilaCard";
import ReusableCarousel from "../../components/ReusableCarousel";
import RequestModal from "./components/RequestModal";
import Users from "../users";
import Marketers from "../marketers";
import useApiCalls from "./hooks/useApiCalls";
import { BeatLoader, DotLoader } from "react-spinners";

function Home() {
  const pageType = useSelector((state) => state.pageType);
  const dispatch = useDispatch();

  console.log(pageType, "pageType");

  const services = useApiCalls();
  useEffect(() => {
    const savedType = localStorage.getItem("pageType");
    if (savedType && savedType !== pageType.type) {
      dispatch(handleChangePage(savedType));
    }
  }, []);

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
      {pageType?.type === "marketer" && <Marketers />}

      <br />

      {pageType?.type === "user" && <Users />}
      {services?.testimonials?.data?.length > 0 &&
        !services?.testimonials?.isLoading && (
          <ReusableCarousel>
            {services?.testimonials?.data?.length > 0 &&
              services?.testimonials?.data?.map((data, i) => (
                <TestimonialCard
                  key={i}
                  title={data?.title}
                  description={data?.description}
                  ownerName={data?.Owner_name}
                  shopName={data?.Shop_name}
                />
              ))}
          </ReusableCarousel>
        )}

      {services?.testimonials?.isLoading && (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BeatLoader
              color={"#ff5a1f"}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}

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
