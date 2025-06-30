const { default: BlogItem } = require("./BlogItem")
import { blog_data } from "@/Assets/assets";
import axios from "axios";
import React, { useEffect, useState } from 'react'
const BlogList = () => {


    const [menu,setMenu]=useState("ALL");
    const [blogs,setBlogs]=useState([]);

    const fetchBlogs=async()=>{
        const response=await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);

    }

    useEffect(()=>{
        fetchBlogs();
    },[])

  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu('ALL')} className={menu=="ALL"?'bg-black text-white py-3 px-4 rounded-sm border border-black':""}>ALL</button>
            <button onClick={()=>setMenu('Technology')} className={menu=="Technology"?'bg-black text-white py-3 px-4 rounded-sm border border-black':""}>Technology</button>
            <button onClick={()=>setMenu('Startup')} className={menu=="Startup"?'bg-black text-white py-3 px-4 rounded-sm border border-black':""}>Startup</button >
            <button onClick={()=>setMenu('Lifestyle')} className={menu=="Lifestyle"?'bg-black text-white py-3 px-4 rounded-sm border border-black':""}>LifeStyle</button>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
            {blogs.filter((item)=>menu==="ALL"?true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BlogList