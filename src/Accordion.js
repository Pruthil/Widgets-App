import React, { useEffect } from "react";
import { useState, useRef } from "react";

const Accordion = ({ items }) => {
  //useState
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const bodyClick = (event) => {
      if (activeIndex != NaN && event.target.tagName == "BODY") {
        setActiveIndex(null);
      }
    };

    document.body.addEventListener("click", bodyClick, true);
  }, []);

  const buttonClicked = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderItem = items.map((item, index) => {
    const active = activeIndex === index ? "active" : "";
    return (
      //React tag to Fragments let you group a list of children without adding extra nodes to the DOM.
      // <></>  Also a fragment syntax
      <React.Fragment key={item.title}>
        <div className="ui styled accordion">
          <div
            className={`title ${active}`}
            onClick={() => {
              buttonClicked(index);
            }}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`content ${active}`}>
            <p className="transition ">{item.content}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div>{renderItem}</div>
    </>
  );
};

export default Accordion;
