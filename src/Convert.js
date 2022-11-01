import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [debounceText, setDebounceText] = useState(text);
  const [finalText, setFinalText] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceText(text);
    }, "1000");

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setFinalText(data.data.translations[0].translatedText);
    };
    translateText();
  }, [language, debounceText]);

  return <div className="ui header">{finalText}</div>;
};

export default Convert;
