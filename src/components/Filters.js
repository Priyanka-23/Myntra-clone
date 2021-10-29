import React from 'react';

const Filters = ({ setBrand, setCategory, setGender }) => {
  return (
    <aside>
      <b>FILTERS</b>
      <hr />
      <b> Gender </b>
      <select onChange={(e) => setGender(e.target.value)}>
        <option>--Gender--</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Unisex">Unisex</option>
      </select>
      <hr />
      <b>Category</b> &nbsp;
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option>--Category--</option>
        <option value="Jeans">Jeans</option>
        <option value="Kurta">Kurta</option>
        <option value="Watch">Watches</option>
        <option value="Dresses">Dresses</option>
        <option value="Jacket">Jacket</option>
        <option value="Swearshirts">Swearshirts</option>
      </select>
      <hr />
      <b>Brand </b>
      <select onChange={(e) => setBrand(e.target.value)}>
        <option>--Brand--</option>
        <option value="Puma">Puma</option>
        <option value="Daniel Wellington">Daniel Wellington</option>
        <option value="Roadster">Roadster</option>
        <option value="Kraus">Kraus</option>
        <option value="Rigo">Rido</option>
        <option value="Nike">Nike</option>
        <option value="HERE & NOW"> HERE & NOW</option>
        <option value="Locomotive">Locomotive</option>
        <option value="Campus Sutra">Campus Sutra</option>
        <option value="High Star">High Star</option>
        <option value="Wrogn">Wrogn</option>
      </select>
    </aside>
  );
};
export default Filters;
