import React from 'react';
const Products = ({ data }) => {
  const productImage = {
    width: '150px',
    border: '2px solid rgba(90, 88, 88, 0.1)',
  };
  const productFigure = {
    border: '2px solid rgba(90, 88, 88, 0.3)',
    borderRadius: '10px',
    width: ' 150px',
    padding: '15px',
    background: 'rgba(50, 58, 88, 0.1)',
  };
  return (
    <>
      {data &&
        data.map((elem) => {
          return (
            <div className="products">
              <figure style={productFigure}>
                <img src={elem.searchImage} alt="" style={productImage} />
                <figcaption>
                  <strong>{elem.brand}</strong>
                </figcaption>
                <figcaption>{elem.product}</figcaption>
                <figcaption>
                  <b>{`Rs. ${elem.price} `}</b>
                  <strike>{` Rs. ${elem.mrp}`}</strike>
                </figcaption>
              </figure>
            </div>
          );
        })}
    </>
  );
};
export default Products;
