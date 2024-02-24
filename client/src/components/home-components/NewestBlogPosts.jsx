import React from 'react'
import { posts } from '../blog-components/BlogPosts';
import { Link } from 'react-router-dom';

const NewestBlogPosts = () => {
  return (
    <>
      <h3 className="text-left text-4xl">Blog</h3>
      <div className="grid grid-cols-7 gap-8 xl:px-20 mt-10 text-start">
        <div className='col-span-7 md:col-span-3 flex flex-col items-start justify-between'>
          <div>
            <h4 className="text-left text-3xl ">Our Latest News and Articles</h4>
            <p className="mt-4 ">Explore the latest insights and updates in the dynamic world of technology and business. Our curated collection of news and articles offers valuable perspectives on industry trends, innovative solutions, and tips for empowering your business.</p>
          </div>
          <Link to={"/blog"} className='text-sky-600 font-semibold hover:underline hover:text-sky-500 mt-4'>See all articles <i className="fa-solid fa-arrow-right text-xs"></i></Link>
        </div>
        {posts.slice(0, 2).map((post, i) => (
          <Link key={i} to={`/blog/${i}`} className="col-span-7 sm:col-span-3 md:col-span-2 flex flex-col items-start sm:items-center px-6">
            <img className="rounded-xl object-cover w-48 sm:w-full h-40" src={post.img} alt="Blog post" />
            <div className="mt-2">

              <span className="block text-gray-500 mb-2">{post.date}</span>
              <h4 className="text-xl font-semibold">{post.heading}</h4>
              {/* <p className='mt-4'>{post.article}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default NewestBlogPosts
