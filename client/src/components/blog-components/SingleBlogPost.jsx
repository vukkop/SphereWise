import React from 'react'
import { useParams } from "react-router";
import { posts } from './BlogPosts';
import { Link } from 'react-router-dom';

const SingleBlogPost = () => {
  const { i } = useParams()
  // const post = JSON.parse(posts[i])

  return (
    <div className="container mx-auto min-h-[70vh] my-10">
      <div className="flex text-start px-4">
        <div to='0' className="flex-1">
          <span className="text-gray-500">{posts[i].date}</span>
          <h4 className="text-3xl font-semibold my-4">{posts[i].heading}</h4>
          <p className="max-w-xl text-lg text-gray-500">{posts[i].fullArticle}</p>
          <Link to={'/blog'} className="btn btn-outline btn-info my-8">Read more </Link>
        </div>
        <img className="flex-1 rounded-xl object-cover w-full h-80 mb-4" src={posts[i].img} alt="Blog post" />
      </div>
    </div>
  )
}

export default SingleBlogPost
