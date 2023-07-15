import Posts from "./Posts";
import Dashboard from "./Dashboard";
import PersonalInfo from "./PersonalInfo";
const Container = ({ active }) => {
  const content = () => {
    switch (active) {
      case "general":
        return <Dashboard />;
      case "posts":
        return <Posts />;
      default:
        return <PersonalInfo />;
    }
  };
  return content();
};

export default Container;
