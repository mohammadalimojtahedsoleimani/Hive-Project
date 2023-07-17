export const validateFileType = (e) => {
    console.log(e);
    var fileName = e.target.value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      //TO DO
      console.log("valid");
    } else {
      alert("Only jpg/jpeg and png files are allowed!");
    }
  };

  export const moneyToText = (money) => {
    return money.toLocaleString() + " تومان";
  };
  export const handleTitle = (title, maxChars) => {
    if (title.length > maxChars) {
      return title.slice(0, maxChars) + "...";
    }
    return title;
  }
  export const nameFont = (value) => {
    if (value.length <= 15) {
      return " text-[10px] xxl:text-[12px]";
    }
    return " text-[8px] xxl:text-[10px]";
  };