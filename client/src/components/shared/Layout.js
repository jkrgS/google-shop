import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BugReportIcon from '@material-ui/icons/BugReport';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '15px',
  },
  navBar: {
    position: 'static',
    backgroundColor: '#0b99a1',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LayoutNav = ({ children }) => {
  // get the route location without special characters for breadcrumb usage
  const location = useLocation().pathname.split('/');

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="home"
          >
            <BugReportIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {process.env.REACT_APP_APP_NAME}
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Breadcrumbs style={styles.breadcrumb} aria-label="breadcrumb">
        <Typography className="capitalize" color="textPrimary">
          {location}
        </Typography>
      </Breadcrumbs>
      <Divider style={styles.divider} />
      <div className="siteLayoutContent">{children}</div>
    </div>
  );
};

// local styling
const styles = {
  breadcrumb: {
    margin: '1rem',
  },
  divider: {
    marginBottom: '5rem',
  },
};

export default LayoutNav;
