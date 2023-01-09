import React from 'react'
import "./App.css";
import PostCall from './PostCall';
import RightSidebar from './RightSidebar';
import Sidebar from './SideBar';

function App() {
  return (
    <div className="app">

      <div className='app_header'>

        <Sidebar />

        <PostCall />

        <RightSidebar />
      </div>

    </div>
  );
}
export default App;