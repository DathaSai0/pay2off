import { IoArrowBackSharp } from "react-icons/io5";
import "./styles/style.scss";
import { useNavigate } from "react-router-dom";
import CategoryDetailsCard from "../../components/CategoryDetailsCard/Index";

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
  return (
    <div>
      <div className="store-header">
        <div className="back-arrow" onClick={handleBack}>
          <IoArrowBackSharp size={20} />
        </div>
        <h2 className="title">Store Details</h2>
      </div>

      <div className="category-wrapper">
        {businesses.map((business) => (
          <CategoryDetailsCard
            key={business.id}
            name={business.name}
            address={business.address}
            rating={business.rating}
            distance={business.distance}
            count={business.count}
            isFavorite={business.isFavorite}
            showContent={true}
          />
        ))}
      </div>
      <h2 className="live_title">Live Coupons</h2>
    </div>
  );
};
export default StoreDetails;
