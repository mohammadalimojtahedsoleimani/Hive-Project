import { useEffect } from "react";
import { useLocation } from "react-router";

const UseScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    const [path, target] = location.hash.split("#");

    // Scroll to the target element if it exists
    if (target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return <>{props.children}</>;
};

export default UseScrollToTop;
