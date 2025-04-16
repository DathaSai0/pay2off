import ReusableCarousel from "../../components/ReusableCarousel";
import catFruits from "../../assets/Images/catFruites.png";
import "./styles/style.scss";
import InfiniteImageCarousel from "../../components/ReusableImageCarousel";
import addImage from "../../assets/Images/addImage.png";
import add2Image from "../../assets/Images/adv2Image.png";
import CouponCard from "../../components/CuponCard/Index";
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "16px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 6, 8]?.map((val, ind) => (
          <CouponCard />
        ))}
      </div>
      {businesses.map((business) => (
        <CategoryDetailsCard
          key={business.id}
          name={business.name}
          address={business.address}
          rating={business.rating}
          distance={business.distance}
          count={business.count}
          isFavorite={business.isFavorite}
        />
      ))}
      <div className="category-carousel-wrapper">
        <ReusableCarousel
          style={{
            height: "100%",
            padding: "50px 50px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 12, 13, 14, 14]?.map(
            (data, index) => (
              <div className="carousel-item-group" key={index}>
                {[1, 2].map((_, i) => (
                  <div className="category-card" key={i}>
                    <div className="category-image-wrapper">
                      <img
                        src={catFruits}
                        alt="category"
                        className="category-image"
                      />
                    </div>
                    <p className="category-label">Fruits</p>
                  </div>
                ))}
              </div>
            )
          )}
        </ReusableCarousel>
      </div>

      <InfiniteImageCarousel images={images2} type="big" />
      <InfiniteImageCarousel images={images} />
    </>
  );
}

export default Users;
