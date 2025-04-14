import React from "react";
import { pay2offSections } from "../constants/constants";

const BlogContent = () => {
  return (
    <div className="blog-container">
    {pay2offSections.map((section, index) => (
      <div key={index} className="blog-section">
        <h3 className="blog-title">{section.title}</h3>
        {section.content.map((line, i) => (
          <p key={i} className="blog-paragraph">{line}</p>
        ))}
      </div>
    ))}
  </div>
  );
};

export default BlogContent;
