import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("Valorant");
  const [results, setResults] = useState([]);
  const [debouncing, setDebouncing] = useState(term);

  useEffect(()=>{
    const timerId=setTimeout(()=>{
      // console.log("Hello!!!")
      setDebouncing(term)
    },1000);

    return ()=>{
      clearTimeout(timerId);
    }
  },[term]);

  useEffect(()=>{
    // console.log("World")
    const searchWiki = async () => {
      //destructing the response result as {data}
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          origin: "*",
          list: "search",
          format: "json",
          srlimit: "15",
          srsearch: debouncing,
        },
      });

      setResults(data.query.search);

    };
    searchWiki();
  },[debouncing]);

  //useEffect
  // useEffect(() => {
  //   const searchWiki = async () => {
  //     //destructing the response result as {data}
  //     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         origin: "*",
  //         list: "search",
  //         format: "json",
  //         srlimit: "15",
  //         srsearch: term,
  //       },
  //     });

  //     setResults(data.query.search);
  //   };

  //   //   //Each setTimeout created a Id which can be used to cancel the timeout
  //   if (term && !results.length) {
  //     searchWiki();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         searchWiki();
  //       }
  //     }, 5000);

  //     // useEffect only returns one thing i.e. a func which is invoked on next useEffect invokation.
  //     //It is like a cleanup function
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term, results.length]);

  const changeInput = (event) => {
    setTerm(event.target.value);
  };

  const renderResult = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="ui right floated">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <div className="ui input">
            <input
              type="text"
              placeholder="Search..."
              value={term}
              onChange={changeInput}
            />
          </div>
        </div>
      </div>
      <div className="ui celled list">{renderResult}</div>
    </div>
  );
};

export default Search;
