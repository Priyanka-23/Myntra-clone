import React from 'react';
const Heading = () => {
  const logo = {
    width: '140px',
  };
  return (
    <div className="heading">
      <img
        src="https://images.indianexpress.com/2021/01/myntra.png"
        alt="logo"
        style={logo}
      />
      <h1>Myntra</h1>
    </div>
  );
};
export default Heading;
