import React from 'react'
import RightSidebarDown from './RightSidebarDown'
import RightSidebarUpper from './RightSidebarUpper'


function RightSidebar() {
  return (
    <div className='rightsidebar'>
        <RightSidebarUpper />

        <RightSidebarDown />
    </div>
  )
}

export default RightSidebar