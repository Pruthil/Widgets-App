import React from "react";
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ label,options, selected, onChangeSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const bodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", bodyClick, true);

    return () => {
      document.body.removeEventListener("click", bodyClick, true);
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (selected == option) {
      return null;
    } else {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => {
            onChangeSelected(option);
          }}
        >
          {option.label}
        </div>
      );
    }
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? `visible active` : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? `visible transition` : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
