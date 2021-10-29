import React from 'react';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import Heading from './components/Heading';
import Filters from './components/Filters';
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
      <Heading />
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
        <Filters
          setBrand={setBrand}
          setCategory={setCategory}
          setGender={setGender}
        />
        <Products data={resultantData.length > 0 ? resultantData : data} />
      </div>
    </div>
  );
}
