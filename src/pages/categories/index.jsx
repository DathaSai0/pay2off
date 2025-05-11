import React from "react";

import "./styles/style.scss";
import { FaArrowLeft } from "react-icons/fa"; // Or use another icon
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery ";
import useApiCalls from "./hooks/useApicalls";
import CategoryDetailsCard from "../../components/CategoryDetailsCard/Index";

function Categories() {
  const navigate = useNavigate();
  const query = useQuery();

  const categoryImage = query.get("cat_image");
  const categoryId = query.get("cat_id");
  const categoryName = query.get("cat_name");

  const services = useApiCalls({ categoryId });

  //   console.log()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="category-card" onClick={() => {}}>
        <img
          src={categoryImage || "https://core.pay2off.com/images/events.jpg"}
          alt={categoryName}
          className="category-image"
        />
        <div className="category-gradient" />
        <button
          className="back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeft color="#fff" size={20} />
        </button>
        <div className="category-title">{categoryName}</div>
      </div>

      <div>
        <CategoryDetailsCard
          showContent={false}
          name={"name"}
          address={"address"}
          rating={0}
          distance={"1km"}
          count={2}
          isFavorite={true}
          logo={categoryImage}
        />
      </div>
    </div>
  );
}

export default Categories;
