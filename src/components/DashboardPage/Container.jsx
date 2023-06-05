import Posts from "./Posts";
import Dashboard from "./Dashboard";
const Container = ({ active }) => {
  const content = () => {
    switch (active) {
      case "dashboard":
        return <Dashboard />;
      case "posts":
        return <Posts />;
      default:
        return <div>info</div>;
    }
  };
  return content();
};

export default Container;
