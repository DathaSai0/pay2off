import { IoArrowBackSharp } from "react-icons/io5";
import "./styles/style.scss";
import { useNavigate } from "react-router-dom";
import CategoryDetailsCard from "../../components/CategoryDetailsCard/Index";
import useServices from "./hooks/useServices";
import CouponCard from "../../components/CuponCard/Index";
import { useEffect } from "react";
import { formatDateToDDMMYYYY } from "../users/utils/util";

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
  //   {
  //     id: 2,
  //     name: "Global Electronics",
  //     address: "MG Road, Bengaluru Urban MG Road, Bengaluru Urban",
  //     rating: 4.2,
  //     distance: "5.7 kms",
  //     count: 3,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 3,
  //     name: "City Mobile Shop",
  //     address: "Commercial Street, Bengaluru",
  //     rating: 3.8,
  //     distance: "8.1 kms",
  //     count: 2,
  //     isFavorite: false,
  //   },
];

const StoreDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const services = useServices();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  useEffect(() => {
    if (id) {
      services?.getStoreDetails(id);
    }
  }, [id]);
  return (
    <div>
      <div className="store-header">
        <div className="back-arrow" onClick={handleBack}>
          <IoArrowBackSharp size={20} />
        </div>
        <h2 className="title">Store Details</h2>
      </div>

      <div className="data-content">
        <div className="category-wrapper">
          <CategoryDetailsCard
            name={services.storeDetails.name}
            address={services.storeDetails.landmark}
            logo={services.storeDetails.image}
            rating={services.storeDetails.rating}
            distance={services.storeDetails.distance}
            count={services.storeDetails.coupon_count}
            isFavorite={services.storeDetails.isFavorite}
            showContent={true}
          />
        </div>
        <h2 className="live_title">Live Coupons</h2>
        <div className="list_live">
          {services?.storeDetails?.active_coupons?.length > 0 &&
            services?.storeDetails?.active_coupons?.map((data, ind) => (
              <>
                <CouponCard
                  key={ind}
                  store={true}
                  {...{
                    name: data?.shop_name,
                    categoryName: data?.categoryNames?.[0]?.name || "Meat Shop",
                    description: data?.coupon_title || "",
                    ratings: data?.ratings || 0,
                    subDescription: data?.coupon_sub_title || "",
                    time: formatDateToDDMMYYYY(data?.expired_date_time),
                  }}
                />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
export default StoreDetails;
