import React from "react";

const Link = (props) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    } else {
      event.preventDefault();
      window.history.pushState({}, "", props.href);

      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);
    }
  };
  return (
    <a onClick={onClick} className={props.className} href={props.href}>
      {props.children}
    </a>
  );
};

export default Link;
