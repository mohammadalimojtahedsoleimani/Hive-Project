import { useEffect } from "react";
import { useLocation } from "react-router";

const UseScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return <>{props.children}</>;
};

export default UseScrollToTop;
