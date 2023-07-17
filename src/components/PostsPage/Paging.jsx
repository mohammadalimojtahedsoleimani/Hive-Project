import { Fragment } from "react";
import Right from "../../assets/images/PostsPage/right.svg";
import Left from "../../assets/images/PostsPage/left.svg";
import { useNavigate } from "react-router-dom";
const Paging = ({
  total_pages: pagesCount,
  page: activePage,
  total_objects: totalItems,
}) => {
  console.log(pagesCount);
  console.log(activePage);
  console.log(totalItems);
  console.log(typeof pagesCount);
  const squareStyle =
    "w-[45px] xxl:w-[53px] h-[45px] xxl:h-[53px] text-[19px] xxl:text-[23px] flex justify-center items-center border-solid border-[1px] xxl:border-[2px] rounded-[5px] xxl:rounded-[7px] cursor-pointer";
  const numberColor = (number) => {
    return {
      backgroundColor: number === activePage ? "#4D7AD2" : "white",
      color: number === activePage ? "white" : "#6C757D",
      borderColor: "transparent",
    };
  };
  const rightSection = () => {
    if (pagesCount === 1) {
      return (
        <div
          className={
            squareStyle + " bg-[#4D7AD2] text-[white] border-[#DFDFDF]"
          }
        >
          1
        </div>
      );
    } else if (pagesCount < 4) {
      const numbers = Array.from({ length: pagesCount }, (_, i) => i + 1);

      return (
        <Fragment>
          <div className={squareStyle + " #DFDFDF"} onClick={prevPage}>
            <img src={Left} alt="" className="w-[70%] h-[70%]" />
          </div>
          {numbers.map((number) => (
            <div
              className={squareStyle}
              style={numberColor(number)}
              onClick={() => goToPage(number)}
            >
              {number}
            </div>
          ))}
          <div className={squareStyle + " #DFDFDF"}>
            <img
              src={Right}
              alt=""
              className="w-[70%] h-[70%]"
              onClick={nextPage}
            />
          </div>
        </Fragment>
      );
    }
    const n = Math.floor((activePage - 1) / 4) + 1;
    const numbers = Array.from({ length: 4 }, (_, i) => n + i);
    return (
      <Fragment>
        <div className={squareStyle + " #DFDFDF"}>
          <img
            src={Left}
            alt=""
            className="w-[70%] h-[70%]"
            onClick={prevPage}
          />
        </div>
        {numbers.map((number) => (
          <div
            className={squareStyle}
            style={numberColor(number)}
            onClick={() => goToPage(number)}
          >
            {number}
          </div>
        ))}
        <div className={squareStyle + " #DFDFDF"} onClick={nextPage}>
          <img src={Right} alt="" className="w-[70%] h-[70%]" />
        </div>
      </Fragment>
    );
  };
  const navigate = useNavigate();
  const goToPage = (destinationPage) => {
    navigate(`/posts/${destinationPage}`);
    // <Link to="1"></Link>
  };
  const nextPage = () => {
    if (activePage + 1 <= pagesCount) {
      goToPage(activePage + 1);
    }
  };
  const prevPage = () => {
    if (activePage - 1 >= 1) {
      goToPage(activePage - 1);
    }
  };
  return (
    <div className="fixed bottom-0 w-full flex justify-center">
      <div className="flex justify-between items-center bg-[#252A34] w-[50rem] xxl:w-[55rem] py-3 xxl:py-5 px-4 xxl:px-7 rounded-t-[5px] xxl:rounded-t-[7px]">
        <div className="right flex items-center gap-3 xxl:gap-5" dir="ltr">
          <span className="text-white">شماره صفحه</span>
          {rightSection()}
        </div>
        <div className="left text-white">
          نمایش {activePage * 4 - 3} - {Math.min(activePage * 4, totalItems)} از{" "}
          {totalItems} مورد یافت شده
        </div>
      </div>
    </div>
  );
};

export default Paging;
