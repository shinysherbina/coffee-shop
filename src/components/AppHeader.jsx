import React from "react";

function AppHeader() {
  return (
    <div className="app-header">
      <img src={`${process.env.PUBLIC_URL}/images/bg-cafe.jpg`} alt="cafe" />
    </div>
  );
}

export default AppHeader;
