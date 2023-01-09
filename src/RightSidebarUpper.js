import React from 'react'
import './RightSidebarUpper.css'
import SideBarColumn from './SideBarColumn'

function RightSidebarUpper() {
  return (
    <div className='rightsidebar_upper'>
    <div className="avatar" >
    < SideBarColumn  src = {"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"} 
    />
    </div>
    <div className='both'>
     <div className='name'>
    <strong className='bro'>imvk._</strong><br></br> <i>Vikash</i>
   </div>
   <div className='switch'>
    <h5>Switch</h5>
   </div>
  </div>
</div>
  )
}

export default RightSidebarUpper