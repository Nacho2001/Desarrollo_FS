//import './ExploreContainer.css';
import List from "./List";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <List/>
    </div>
  );
};

export default ExploreContainer;
