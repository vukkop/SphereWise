import React, { useState } from 'react'
import { posts } from '../components/blog-components/BlogPosts';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [displayMore, setDisplayMore] = useState(false);

  const toggleShowMore = () => {
    setDisplayMore(!displayMore);
  };

  return (
    <div className='container mx-auto'>

      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>

      <div className="flex flex-wrap gap-4">
        <div className="flex-auto sm:flex-1 text-start px-4">
          <Link to='0' className="w-full">
            <img className="rounded-xl object-cover w-full h-80 mb-4" src={posts[0].img} alt="Blog post" />
            <span className="text-gray-500">{posts[0].date}</span>
            <h4 className="text-3xl font-semibold my-4">{posts[0].heading}</h4>
            <p className="max-w-xl text-lg text-gray-500">{posts[0].shortArticle}</p>
          </Link>
        </div>
        <div className="flex-auto sm:flex-1 flex flex-col gap-6 text-start px-4">
          {posts.slice(1, 4).map((post, i) => (
            <Link to={`${i + 1}`} key={i} className="md:flex group">
              <img className="rounded-xl object-cover w-48 h-40" src={post.img} alt="Blog post" />
              <div className=" md:mt-0 md:ml-6 pt-2">
                <span className="block text-gray-500 mb-1">{post.date}</span>
                <h4 className="text-xl font-semibold">{post.heading}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {!displayMore &&
        <div className="text-center my-8">
          <button onClick={toggleShowMore} className="btn btn-outline btn-info">See More Articles <i className="fa-solid fa-angle-down"></i></button>
        </div>

      }
      {displayMore &&
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:px-20 mt-10 text-start">
            {posts.slice(4, posts.length).map((post, i) => (
              <Link to={`${i + 4}`} key={i} className="flex flex-col items-start sm:items-center px-6">
                <img className="rounded-xl object-cover w-48 sm:w-full h-40" src={post.img} alt="Blog post" />
                <div className="mt-2">

                  <span className="block text-gray-500 mb-2">{post.date}</span>
                  <h4 className="text-xl font-semibold">{post.heading}</h4>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center my-8">
            <button onClick={toggleShowMore} className="btn btn-outline btn-info">Show Less <i className="fa-solid fa-angle-up"></i></button>
          </div>
        </>
      }

    </div>

  )
}

export default Blog
