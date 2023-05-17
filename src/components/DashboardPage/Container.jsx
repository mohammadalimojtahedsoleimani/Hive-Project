import Posts from "./Posts";
const Container = ({ active }) => {
  const content = () => {
    switch (active) {
      case "dashboard":
        return <div>dashboard</div>;
      case "posts":
        return <Posts />;
      default:
        return <div>info</div>;
    }
  };
  return content();
};

export default Container;
