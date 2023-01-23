import { useEffect, useState } from "react"
import Cards from "../Cards/Cards";
import Navheader from "../NavHeader/NavHeader";

// import pic from "../Image/10x.jpeg"

const PostView = () => {
    const [posts, setPosts] = useState(null);
    // useEffect(() => {
    //     fetch("http://localhost:8030/view").then((res) => {
    //         return res.json()
    //     }).then((data) => {
    //         setPosts(data);
    //         console.log(data)

    //     }).catch((err) => {
    //         if (err)
    //             console.log(err)
    //     })
    // }, [])

    const fetchAllPost = async()=>{
        const resp=await fetch(`https://instaclone-313c.onrender.com/view`);
        setPosts(await resp.json())
    }

    useEffect(()=>{
        fetchAllPost()
    },[])
    if(posts===null){
        return(
            <>
            <Navheader/>
            <h1 >Loading.....</h1>
            </>
        )
    }
    return (
        <div>
            <Navheader/>
           <Cards posts={posts} key={posts.id}/>
        
        </div>
    )
}
export default PostView;