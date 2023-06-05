import styles from "./Table.module.css";
const Table = ({ titlesArr, dataArr }) => {
  const itemBaseStyle = "text-[10px] xxl:text-[12px]";
  const itemStyle1 = itemBaseStyle + " text-[#4C4C4C]";
  const itemStyle2 = itemBaseStyle + " text-[#808080]";
  const moneyToText = (money) => {
    return money.toLocaleString() + " تومان";
  };
  return (
    <div
      className={
        styles.table_shadow +
        " inline-block rounded-lg overflow-hidden min-h-[22rem] xxl:min-h-[33rem]"
      }
    >
      <table className={styles.table}>
        <thead>
          <tr>
            {titlesArr.map((titleObj) => (
              <th className={" font-medium " + itemStyle1}>{titleObj.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataArr.map((data, i) => (
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
