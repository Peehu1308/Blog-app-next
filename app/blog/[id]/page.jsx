"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
const page = ({ params }) => {
  // const resolvedParams = use(params);
  const [data, setData] = useState(null);

  const fetchBlogData = async() => {
    const response= await axios.get('/api/blog',{
      params:{
        id:params.id
      }
    })
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
          <div className="flex justify-between items-center">
            <Link href='/'>
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
            </Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
              Get Started
              <Image src={assets.arrow} alt="" />
            </button>
          </div>
          <div className="text-center my-24">
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
              {data.title}
            </h1>
            <Image
              src={data.authorImg}
              width={60}
              height={60}
              alt=""
              className="mx-auto mt-6 border border-white rounded-full"
            />
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
              {data.author}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          You're looking for some text about blogs! That's a broad topic, so to
          give you the best information, could you tell me a little more about
          what you're interested in? For example, are you looking for: A general
          introduction to what a blog is? (e.g., "What is a blog and why are
          they popular?") Information on how to start a blog? (e.g., "Steps to
          setting up your own blog.") Tips for writing good blog content? (e.g.,
          "How to make your blog posts engaging.") The benefits of blogging for
          individuals or businesses? (e.g., "Why should I start a blog for my
          business?")
        </h3>
        <p className="my-3">
          A specific type of blog? (e.g., "What are personal blogs?" or "Tell me
          about corporate blogs.") A historical overview of blogs? (e.g., "When
          did blogs first become popular?") Once I know what you're hoping to
          learn or discuss, I can provide a more tailored and helpful response!
        </p>
        <p className="my-3">
          A specific type of blog? (e.g., "What are personal blogs?" or "Tell me
          about corporate blogs.") A historical overview of blogs? (e.g., "When
          did blogs first become popular?") Once I know what you're hoping to
          learn or discuss, I can provide a more tailored and helpful response!
        </p>
        <p className="my-3">
          A specific type of blog? (e.g., "What are personal blogs?" or "Tell me
          about corporate blogs.") A historical overview of blogs? (e.g., "When
          did blogs first become popular?") Once I know what you're hoping to
          learn or discuss, I can provide a more tailored and helpful response!
        </p>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">Share this article on social media</p>
            <div className="flex"><Image src={assets.facebook_icon} width={50} alt=''/>
            <Image src={assets.twitter_icon} width={50} alt=''/>
            <Image src={assets.googleplus_icon} width={50} alt=''/>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <></>
  );
};

export default page;
