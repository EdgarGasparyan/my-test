import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/Store";
import { getData } from "../redux/reducers/sidebarSilce";

const Product = () => {
  const category: any = useSelector((state: any) => state.CatsCatergory);
  const dispatch = useDispatch<AppDispatch>();
  const id: any = category.categoryid;

  useEffect(() => {
    dispatch(getData({ categoryid: id }));
  }, [category.categoryid]);

  return (
    <>
      <div className="product">
        <div className="product-container">
          {category.catData.map((cat: any) => {
            return (
              <div className="cart" key={cat.id}>
                <img
                  src={cat.url}
                  alt="cat_photo"
                ></img>
              </div>
            );
          })}
        </div>
        <div className="product-button-container">
          <button
            onClick={() => dispatch(getData(category))}
            className="button"
          >
            Load More ...
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;