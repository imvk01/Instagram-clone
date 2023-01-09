import React from 'react';
import SideBarColumn from './SideBarColumn';
import './SideBar.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


function Sidebar() {


  return (
    <div className="sideBar">

      <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />


      <SideBarColumn Icon={HomeIcon} title="Home" />
      <SideBarColumn Icon={SearchIcon} title="Search" />
      <SideBarColumn Icon={ExploreOutlinedIcon} title="Explore" />
      <SideBarColumn Icon={ChatOutlinedIcon} title="Messanges" />
      <SideBarColumn Icon={FavoriteBorderIcon} title="Notifications" />
      <SideBarColumn Icon={AddCircleOutlineOutlinedIcon} title="Create" />
      <SideBarColumn Icon={SettingsOutlinedIcon} title="Setting" />
      <SideBarColumn src={"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"}
        title="Profile" />

      <div className="sideBar_bottom">
        <SideBarColumn Icon={MoreHorizIcon} title="More" />
      </div>

    </div>
  );
}

export default Sidebar;