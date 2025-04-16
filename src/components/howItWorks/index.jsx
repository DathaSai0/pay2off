import React from "react";
import "./styles/style.scss";

function HowItWorks({ title, subTitle, contentList }) {
  return (
    <div className="how-it-works-container">
      <h1 className="heading">{title}</h1>
      <p className="description">{subTitle}</p>

      {contentList?.map((curr, index) => (
        <div key={index}>
          <p className="step">{curr?.step}</p>
          <h1 className="main-title">{curr?.mainTitle}</h1>

          {curr?.content?.map((data, i) => (
            <div key={i}>
              <p className="content-title">{data?.title}</p>
              <ul>
                {data?.list?.map((listItem, idx) => (
                  <li key={idx} className="list-item">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;
