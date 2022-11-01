// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Marathi",
    value: "mr"
  },
  {
    label: "Gujarati",
    value: "gu"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onChangeSelected={setLanguage}
      />
      <hr />

      <h3>Output:</h3>
      <Convert language={language} text={text} />
    </>
  );
};

export default Translate;
