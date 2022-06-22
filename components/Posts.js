import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts =[
        {
            id: "1",
            username: "uad.uad",
            userImg: "https://yt3.ggpht.com/ytc/AKedOLTu3R-kFSG843RnmFSq_Pt5vBhc6l4SSJWalkWKaA=s900-c-k-c0x00ffffff-no-rj",
            img: "https://images.unsplash.com/photo-1655803230295-63df4db6cfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
            caption: "Sunset in the city"
        },
        {
            id: "2",
            username: "urziya-dukenbay",
            userImg: "https://i.pinimg.com/280x280_RS/8d/9c/1b/8d9c1b8e648e5630ef4f733a3b9cf66e.jpg",
            img: "https://images.unsplash.com/photo-1551523713-c1473aa01d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            caption: "Summer time"
        }
    ]
  return <div>
      {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
      ))}
  </div>
}
