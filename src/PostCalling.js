import React from 'react'
import { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "./firebase";



function PostCalling() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //here the code runs 
    db.collection('posts').onSnapshot(snapshot => {
      // snapshot whenever a new file come it will update the firebase
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, []);

  return (
    <div className='postCall'>

      {
        posts.map(({ id, post }) => (
          //instead of refreshing the whole project the KEY simply loads the new file that you add in the firestore database
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))

      }

    </div>
  )
}

export default PostCalling;





