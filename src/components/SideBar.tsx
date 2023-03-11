import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/Store";
import axios from "axios";
import { getcategoryid, getData } from "../redux/reducers/sidebarSilce";

const SideBar = () => {
  const [category, setCategory] = useState<any>([]);

  const dispatch = useDispatch<AppDispatch>();

  const getCategoryId = (id: number) => {
    dispatch(getcategoryid(id));
    dispatch(getData(category.categoryid));
  };

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/categories")
      .then((response) => setCategory(response.data));
  }, []);

  return (
    <div className="sideBar">
      <section className="top-nav">
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <div className='menu-button'></div>
        </label>
        <ul className="menu">
          {category.map((catergoryLink: any) => {
            return (
              <li
                key={catergoryLink.id}
                onClick={() => getCategoryId(catergoryLink.id)}
              >
                <span>{catergoryLink.name}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default SideBar;