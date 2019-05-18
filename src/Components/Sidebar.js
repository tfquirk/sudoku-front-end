import React from "react";

const Sidebar = props => {
  const sidebarStyles = {
    margin: 0,
    width: "25vw",
    height: "100vh",
    backgroundColor: "Red"
  };

  return <div style={sidebarStyles}>{props.children}</div>;
};

export default Sidebar;
