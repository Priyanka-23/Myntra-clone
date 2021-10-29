import React from 'react';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [resultantData, setResultantData] = useState([]);
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [gender, setGender] = useState('');
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [searchedProduct, setSearchedProduct] = useState([]);
  const getDataFromApi = async () => {
    const response = await fetch('https://demo7242716.mockable.io/products');
    const recievedData = await response.json();
    setData(recievedData.products);
  };
  const addFilter = () => {
    const filteredData = data.filter((elem) => {
      return (
        elem.gender === gender &&
        elem.productName.toLowerCase().includes(brand.toLowerCase()) &&
        elem.productName.toLowerCase().includes(category.toLowerCase())
      );
    });
    setFilter(filteredData);
  };
  const onSearchProduct = (e) => {
    const searchedProduct = data.filter((elem) => {
      return elem.productName.toLowerCase().search(search) !== -1;
    });
    setSearchedProduct(searchedProduct);
  };
  const afterFilterSearchData = () => {
    setResultantData(() => {
      if (search.length > 0 && filter.length === 0) {
        return searchedProduct;
      } else if (search.length === 0 && filter.length > 0) {
        return filter;
      } else if (search.length > 0 && filter.length > 0) {
        return filter.filter((val) => {
          return val.productName.toLowerCase().search(search) !== -1;
        });
      } else return data;
    });
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  useEffect(() => {
    onSearchProduct();
  }, [search]);
  useEffect(() => {
    addFilter();
  }, [brand, category, gender]);
  useEffect(() => {
    afterFilterSearchData();
  }, [search, filter]);
  return (
    <div className="App">
      <div className="heading">
        <img
          src="https://images.indianexpress.com/2021/01/myntra.png"
          alt="logo"
          className="logo"
        />
        <h1>Myntra</h1>
      </div>
      <div>
        <input
          className="searchBox"
          placeholder="Search for products,brands and more"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="products">
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
        <Products data={resultantData.length > 0 ? resultantData : data} />
      </div>
    </div>
  );
}
