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

const businesses = [
  {
    id: 1,
    name: "aliya telecom",
    address: "Bazaar Street, Bengaluru Urban",
    rating: 0,
    distance: "12.23 kms",
    count: 1,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Global Electronics",
    address: "MG Road, Bengaluru Urban MG Road, Bengaluru Urban",
    rating: 4.2,
    distance: "5.7 kms",
    count: 3,
    isFavorite: true,
  },
  {
    id: 3,
    name: "City Mobile Shop",
    address: "Commercial Street, Bengaluru",
    rating: 3.8,
    distance: "8.1 kms",
    count: 2,
    isFavorite: false,
  },
];

function Users() {
  const services = useApiCalls();
  const images = [
    addImage,
    addImage,
    addImage,
    addImage,
    addImage,
    addImage,
    addImage,
  ];
  const images2 = [
    add2Image,
    add2Image,
    add2Image,
    add2Image,
    add2Image,
    add2Image,
    add2Image,
    add2Image,
    add2Image,
    add2Image,
    add2Image,
  ];
  return (
    <>
      {/* {businesses.map((business) => (
        <CategoryDetailsCard
          key={business.id}
          name={business.name}
          address={business.address}
          rating={business.rating}
          distance={business.distance}
          count={business.count}
          isFavorite={business.isFavorite}
        />
      ))} */}
      <div className="category-carousel-wrapper">
        <ReusableCarousel
          style={{
            height: "100%",
            padding: "50px 50px",
          }}
        >
          {services?.categoryList?.length > 0 &&
            services.categoryList
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
                      className="category-card"
                      key={i}
                      onClick={() => {
                        alert(category?.category_name); //category?._id,
                      }}
                    >
                      <div className="category-image-wrapper">
                        <img
                          src={`https://core.pay2off.com/${category?.category_img}`} //catFruits
                          alt={category?.category_name}
                          className="category-image"
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
      {services?.adds?.small > 0 && (
        <InfiniteImageCarousel images={services?.adds?.small || []} />
      )}
    </>
  );
}

export default Users;
