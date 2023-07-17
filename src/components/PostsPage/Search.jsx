import styles from "./Filter.module.css";
import { useContext, useState } from "react";

import SearchIcon from "../../assets/images/PostsPage/search.svg";
import FilterIcon from "../../assets/images/PostsPage/filter.svg";
import { SearchContext } from "../../context/SearchContext";

const Search = (props) => {
  // variables
  const { search, setSearch } = useContext(SearchContext);

  const valueHandler = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  return (
    <div className={styles.parent + " pt-[110px] xl:pt-[125px] xxl:pt-[130px]"}>
      <div
        className={
          styles.inner_parent + " py-[3px] xxl:py-[7px] px-[5px] xxl:px-[10px]"
        }
      >
        <img src={SearchIcon} alt="search icon" className={styles.search_btn} />
        <input
          type="text"
          value={search}
          placeholder={"جستجو در وبسایت هایو..."}
          onChange={valueHandler}
          name="search"
          className=" w-[24rem] xxl:w-[29rem] text-[15px] xxl:text-[18px]"
        />
        <div className=" p-[10px] xxl:p-[15px]">
          <img
            src={FilterIcon}
            alt=""
            className="w-[25px] xxl:w-[30px]"
            onClick={() => {
              props.setIsMenuOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
