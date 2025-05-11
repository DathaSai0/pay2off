import { useState } from "react";
import "./styles/style.scss";
import useApiCalls from "./hooks/useApiCalls";
import { BounceLoader } from "react-spinners";

const FAQsList = () => {
  const [activeId, setActiveId] = useState(null);

  const services = useApiCalls();

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <div className="faq-list">
        {services?.faqList?.data?.length > 0 &&
          !services?.faqList?.isLoading &&
          services?.faqList?.data?.map((faq) => (
            <div
              key={faq?._id}
              className={`faq-item ${activeId === faq._id ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(faq._id)}>
                {faq.question}
                <span className="icon">{activeId === faq._id ? "−" : "+"}</span>
              </div>
              {activeId === faq._id && (
                <>
                  {faq?.answer?.map((ans, i) => (
                    <div className="faq-answer" key={i}>
                      {ans}
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}

        {services?.faqList?.isLoading && (
          <div className="loadingDiv">
            <BounceLoader
              color={"#ff5a1f"}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}

        {services?.faqList?.data?.length === 0 &&
          !services?.faqList?.isLoading && <p>No data found</p>}
      </div>
    </div>
  );
};

export default FAQsList;
