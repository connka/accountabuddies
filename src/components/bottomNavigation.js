import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Home';
import BuddiesIcon from '@material-ui/icons/People';
import PrizesIcon from '@material-ui/icons/Star';

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
        <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
      </NavLink>
      <NavLink to={'/buddies'}>
        <BottomNavigationAction label="Buddies" icon={<BuddiesIcon />} />
      </NavLink>
      <NavLink to={'/goals'}>
        <BottomNavigationAction label="Goals" icon={<PrizesIcon />} />
      </NavLink>
      <NavLink to={'/prizes'}>
        <BottomNavigationAction label="Prizes" icon={<PrizesIcon />} />
      </NavLink>
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
