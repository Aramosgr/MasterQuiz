import React from 'react';
import MailIcon from '@material-ui/icons/MailRounded';
import MenuIcon from '@material-ui/icons/MenuRounded';
import SettingsIcon from '@material-ui/icons/SettingsApplicationsRounded';
import LogoutIcon from '@material-ui/icons/DesktopAccessDisabledRounded';
import DateRangeIcon from '@material-ui/icons/DateRangeRounded';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleRounded';
import PollIcon from '@material-ui/icons/PollRounded';
import PeopleIcon from '@material-ui/icons/PeopleAltRounded';
  
  const iconMap = new Map();
  iconMap.set("events", <DateRangeIcon />);
  iconMap.set("quizzes", <PollIcon />);
  iconMap.set("questions", <ChatBubbleIcon />);
  iconMap.set("users", <PeopleIcon />);
  iconMap.set("settings", <SettingsIcon />);
  iconMap.set("logout", <LogoutIcon />);
  iconMap.set("menu", <MenuIcon />);
  iconMap.set("mail", <MailIcon />);

  const getIcon = (text) => {
    return iconMap.get(text.toLowerCase());
  };

  export default getIcon;