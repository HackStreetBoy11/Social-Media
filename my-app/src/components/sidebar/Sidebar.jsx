import React from "react";
import "./sidebar.css"
import {HelpOutline, PlayCircleFilledOutlined, RssFeed, WorkOutline,Group,Event,School,Bookmark} from "@mui/icons-material"
import {Users} from '../../dummyData'
import CloseFriend from "../closeFriend/CloseFriend"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Groups
            </span>
            </li>
            <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Bookmarks
            </span>
            </li>
            <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Questions
            </span>
            </li>
            <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Jobs
            </span>
            </li>
            <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Events
            </span>
            </li>
            <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Courses
            </span>
            </li>
            <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Videoes
            </span>
            </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"></hr>
        <ul className="sidebarFriendList">
          {Users.map( u=>(
            <CloseFriend key ={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
