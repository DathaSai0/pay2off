import ReusableCarousel from "../../components/ReusableCarousel";
import catFruits from "../../assets/Images/catFruites.png";
import "./styles/style.scss";
import InfiniteImageCarousel from "../../components/ReusableImageCarousel";
import addImage from "../../assets/Images/addImage.png";
import add2Image from "../../assets/Images/adv2Image.png";
import CouponCard from "../../components/CuponCard/Index";
import CategoryDetailsCard from "../../components/CategoryDetailsCard/Index";
import useApiCalls from "./hooks/useApicalls";
import { formatDateToDDMMYYYY } from "./utils/util";
import { useNavigate } from "react-router-dom";
import { BeatLoader, DotLoader } from "react-spinners";

function Users() {
  const services = useApiCalls();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="user-categories-heading">Categories</h1>
      {services?.categoryList?.data?.length > 0 &&
        !services?.categoryList?.isLoading && (
          <div className="category-carousel-wrapper">
            <ReusableCarousel
              style={{
                height: "100%",
                padding: "50px 50px",
              }}
            >
              {services?.categoryList?.data?.length > 0 &&
                services?.categoryList?.data
                  .reduce((result, _, index, array) => {
                    if (index % 2 === 0) {
                      const pair = array.slice(index, index + 2);
                      result.push(pair);
                    }
                    return result;
                  }, [])
                  .map((group, groupIndex) => (
                    <div className="carousel-item-group" key={groupIndex}>
                      {group.map((category, i) => (
                        <div
                          className="home-category-card"
                          key={i}
                          onClick={() => {
                            // alert(category?.category_name); //category?._id,
                            navigate(
                              `/categories?cat_image=https://core.pay2off.com/${category?.category_img}&cat_name=${category?.category_name}&cat_id=${category?._id}`
                            );
                          }}
                        >
                          <div className="category-image-wrapper">
                            <img
                              src={`https://core.pay2off.com/${category?.category_img}`} //catFruits
                              alt={category?.category_name}
                              className="home-category-image"
                            />
                          </div>
                          <p className="category-label">
                            {category?.category_name}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
            </ReusableCarousel>
          </div>
        )}

      {services?.categoryList?.isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BeatLoader
            color={"#ff5a1f"}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}

      <h1
        className="user-categories-heading"
        style={{
          marginTop: "40px",
        }}
      >
        Trending Coupons
      </h1>
      {services?.couponsList?.top?.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            padding: "16px",
          }}
        >
          {services?.couponsList?.top?.map((data, ind) => (
            <CouponCard
              key={ind}
              {...{
                name: data?.shop_name,
                categoryName: data?.categoryNames?.[0]?.name || "Meat Shop",
                description: data?.coupon_title || "",
                ratings: data?.ratings || 0,
                subDescription: data?.coupon_sub_title || "",
                time: formatDateToDDMMYYYY(data?.expired_date_time),
              }}
            />
          ))}
        </div>
      )}

      {services?.adds?.large?.length > 0 && (
        <InfiniteImageCarousel
          images={services?.adds?.large || []}
          type="big"
        />
      )}

      {services?.couponsList?.bottom?.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            padding: "16px",
          }}
        >
          {services?.couponsList?.bottom?.map((data, ind) => (
            <CouponCard
              key={ind}
              {...{
                name: data?.shop_name,
                categoryName: data?.categoryNames?.[0]?.name || "Meat Shop",
                description: data?.coupon_title || "",
                ratings: data?.ratings || 0,
                subDescription: data?.coupon_sub_title || "",
                time: formatDateToDDMMYYYY(data?.expired_date_time),
              }}
            />
          ))}
        </div>
      )}
      {services?.adds?.small?.length > 0 && (
        <InfiniteImageCarousel images={services?.adds?.small || []} />
      )}
    </>
  );
}

export default Users;
