import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "Pruthil",
    content: "Hello, Pruthil",
  },
  {
    title: "Pruthil Gandhi",
    content: "Hello, Pruthil Gandhi",
  },
  {
    title: "Pruthil Jayesh Gandhi",
    content: "Hello, Pruthil Jayesh Gandhi",
  },
];

const selection = [
  {
    label: "Bloddy Red",
    value: "red",
  },
  {
    label: "Bright Yellow",
    value: "yellow",
  },
  {
    label: "Refreshing Green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(selection[0]);

  return (
    <div>
      {/* <Accordian items={items}></Accordian> */}
      {/* <Accordion items={items}></Accordion> */}
      {/* <Search></Search> */}
      {/* <button
        onClick={() => {
          setToggleDropDown(!toggleDropDown);
        }}
      >
        Toggle Dropdown
      </button> */}

      {/* {toggleDropDown ? (
        <Dropdown
          selected={selected}
          onChangeSelected={setSelected}
          options={selection}
        />
      ) : null} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={selection}
          selected={selected}
          onChangeSelected={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
