import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {getIcon} from '../../../helpers';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import useStyles from './SideDrawerStyles';
import { MenuItem } from '@material-ui/core';
import Profile from '../Profile';
import Logo from '../ToolbarLogo';
import Button from '@material-ui/core/Button';



const SideDrawer = (props) => {

  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>      
      <Logo/>      
      <div className={classes.toolbar}>
      <Profile/>
      </div>
      <Divider />
      <List>
        {['Events', 'Quizzes', 'Questions', 'Users'].map((text, index) => (         
            <MenuItem button key={text} component={Link} to={{ pathname: `/${text}` }}>
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
              <ListItemText primary={<FormattedMessage id={text} />} />
            </MenuItem>          
        ))}
      </List>
      <Divider />
      <List>
        {['Settings', 'Logout'].map((text, index) => (
            <MenuItem button key={text} component={Link} to={{ pathname: `/${text}` }}>
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
              <ListItemText primary={<FormattedMessage id={text} />} />
            </MenuItem>      
        ))}
      </List>
    </div>
  );


  return (    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {getIcon("Menu")}
          </IconButton>
          {/* <Typography variant="h6" noWrap className={classes.title}>
              <FormattedMessage id="MasterQuiz" />          
          </Typography> */}
          <Button color="inherit" className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            logo="false"
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">          
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            logo="true"
          >
            {drawer}            
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          This is some random text for the home page
        </Typography>
      </main>
    </div>
  );
}

SideDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};


export default SideDrawer;