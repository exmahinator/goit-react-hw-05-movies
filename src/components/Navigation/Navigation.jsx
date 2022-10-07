import { NavigationList, NavigationItem, ActivePageLink } from 'ui';

const Navigation = () => {
  return (
    <NavigationList>
      <NavigationItem>
        <ActivePageLink to="/" end>
          Home
        </ActivePageLink>
      </NavigationItem>
      <NavigationItem>
        <ActivePageLink to="/movies">Movies</ActivePageLink>
      </NavigationItem>
    </NavigationList>
  );
};

export default Navigation;
