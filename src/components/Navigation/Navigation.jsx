import { Link } from 'react-router-dom';
import { NavigationList, NavigationItem } from 'ui';

const Navigation = () => {
  return (
    <NavigationList>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/movies">Movies</Link>
      </NavigationItem>
    </NavigationList>
  );
};

export default Navigation;
