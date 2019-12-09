import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './ImageAvatarStyles';
import image from "../../../assets/images/nando.jpg";

const ImageAvatar = (props) => {
  const classes = useStyles();  
  return (
    <div className={classes.root}>
      <Avatar alt="Pirpido" src={image} className={classes.bigAvatar} />
    </div>
  );
}

export default ImageAvatar;