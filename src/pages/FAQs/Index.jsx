import { useState } from "react";
import "./styles/style.scss";

const faqs = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolo.Lorem ipsum dolor. Lorem ipsum dolor. Lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolo.Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolo.Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolo.Lorem ipsum dolor. Lorem ipsum dolor.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam...",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation...",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in...",
  },
];

const FAQsList = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <div className="faq-list">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${activeId === faq.id ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
              {faq.question}
              <span className="icon">{activeId === faq.id ? "−" : "+"}</span>
            </div>
            {activeId === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsList;
