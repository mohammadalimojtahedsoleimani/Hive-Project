import styles from "./Table.module.css";
import { useState } from "react";
const Table = ({ titlesArr, dataArr, minHeight }) => {
  const itemBaseStyle = "text-[10px] xxl:text-[12px]";
  const itemStyle1 = itemBaseStyle + " text-[#4C4C4C]";
  const itemStyle2 = itemBaseStyle + " text-[#808080]";
  const pageStyle = (page) => {
    if (currentPage === page) {
      return { color: "#9F9F9F" };
    }
    return { color: "#4C4C4C" };
  };
  const onPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((lastValue) => lastValue - 1);
    }
  };
  const onNextPage = () => {
    if (currentPage !== pageCount) {
      setCurrentPage((lastValue) => lastValue + 1);
    }
  };
  const moneyToText = (money) => {
    return money.toLocaleString() + " تومان";
  };

  const [currentPage, setCurrentPage] = useState(1);

  function getPageCount(totalItems, itemsPerPage) {
    return Math.ceil(totalItems / itemsPerPage);
  }

  function getPageData(data, currentPage, itemsPerPage) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }
  const itemsPerPage = 5;
  const pageCount = getPageCount(dataArr.length, itemsPerPage);
  const pageNumbers = [...Array(pageCount).keys()].map((num) => num + 1);
  const pageData = getPageData(dataArr, currentPage, itemsPerPage);
  return (
    <div
      style={{ minHeight: `${minHeight}%` }}
      className={
        styles.table_shadow + ` inline-block rounded-lg overflow-hidden`
      }
    >
      <table style={{ minHeight: `${minHeight}%` }} className={styles.table}>
        <thead>
          <tr>
            {titlesArr.map((titleObj) => (
              <th className={" font-medium " + itemStyle1}>{titleObj.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.map((data, i) => (
            <tr>
              <th>{data[titlesArr[0].value]}</th>
              <th>{data[titlesArr[1].value]}</th>
              <th className={itemStyle1}>
                <div className="flex items-center gap-2">
                  {data[titlesArr[2].value] + "%"}
                  <div className="flex relative justify-end bg-[#F2F2F2] rounded-[8px] h-[0.2rem] xxl:h-[0.3rem] w-[4rem] xxl:w-[5 rem]">
                    <hr className="bg-[#4C4C4C] absolute top-0 left-0 z-10 rounded-[8px] h-full w-[90%]" />
                  </div>
                </div>
              </th>
              <th className={itemStyle2}>{data[titlesArr[3].value]} </th>
              <th className={itemStyle2}>
                {moneyToText(data[titlesArr[4].value])}
              </th>
            </tr>
          ))}
          <div
            className={
              styles.pagination +
              " py-[0.5rem] xxl:py-[1rem] gap-[0.4rem] xxl:gap-[0.6rem]"
            }
            dir="ltr"
          >
            <button
              style={pageStyle(1)}
              className="text-[10px] xxl:text-[12px]"
              onClick={onPrevPage}
            >
              صفحه قبل
            </button>
            {pageNumbers.map((num) => (
              <button
                className={
                  styles.pagination_num +
                  " text-[10px] xxl:text-[12px] h-[1.5rem] xxl:h-[2.5rem] w-[1.5rem] xxl:w-[2.5rem]"
                }
                key={num}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            ))}
            <button
              className="text-[10px] xxl:text-[12px]"
              style={pageStyle(pageCount)}
              onClick={onNextPage}
            >
              صفحه بعد
            </button>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
