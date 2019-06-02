import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Home';
import BuddiesIcon from '@material-ui/icons/People';
import GoalsIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      id="bottom-nav"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <NavLink to={'/dashboard'}>
        <BottomNavigationAction label="Recent" icon={<RestoreIcon />} id="bottom-nav-icon" />
      </NavLink>
      <NavLink to={'/buddies'}>
        <BottomNavigationAction label="Buddies" icon={<BuddiesIcon />} id="bottom-nav-icon" />
      </NavLink>
      <NavLink to={'/goals'}>
        <BottomNavigationAction label="Goals" icon={<GoalsIcon />} id="bottom-nav-icon" />
      </NavLink>
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
