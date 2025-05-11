import React, { useCallback, useRef, useState } from "react";

import "./styles/style.scss";
import { FaArrowLeft } from "react-icons/fa"; // Or use another icon
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery ";
import useApiCalls from "./hooks/useApicalls";
import CategoryDetailsCard from "../../components/CategoryDetailsCard/Index";
import { BeatLoader, DotLoader } from "react-spinners";

function Categories() {
  const navigate = useNavigate();
  const query = useQuery();

  const categoryImage = query.get("cat_image");
  const categoryId = query.get("cat_id");
  const categoryName = query.get("cat_name");
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);

  const { shopsList } = useApiCalls({ categoryId, page }); // make sure your API accepts pagination

  const lastCardRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !shopsList?.isLoading) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [shopsList?.isLoading]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="category-card">
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

      <div className="category-shop-details-card-container">
        {shopsList?.data?.length > 0 &&
          shopsList?.data?.map((data, index) => {
            const isLast = index === shopsList.data.length - 1;
            return (
              <CategoryDetailsCard
                showContent={false}
                name={data?.name || ""}
                address={`${data?.landmark} ${data?.city}`}
                rating={data?.rating || 0}
                distance={data?.distance}
                count={data?.coupon_count}
                isFavorite={true}
                logo={data?.image}
                ref={isLast ? lastCardRef : null}
              />
            );
          })}

        {shopsList?.isLoading && (
          <div>
            <BeatLoader
              color={"#ff5a1f"}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {shopsList?.data?.length === 0 && !shopsList?.isLoading && (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Categories;
