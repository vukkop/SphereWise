import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import { posts } from './BlogPosts';
import { Link } from 'react-router-dom';

const SingleBlogPost = () => {
  const { i } = useParams()
  const [article, setArticle] = useState(
    []
  );

  useEffect(() => {
    setArticle(posts[i].fullArticle)
  }, [i]);

  return (
    <div className="container mx-auto min-h-[70vh] my-10">
      <div className="text-start px-4">
        <h4 className="text-3xl font-semibold my-4">{posts[i].heading}</h4>
        <span className="text-gray-500 italic">{posts[i].date}</span>
        <div className='my-8'>
          <img className="float-end rounded-xl object-cover w-[50%] h-80 mb-4 ml-4" src={posts[i].img} alt="Blog post" />
          {
            article.map((p, i) =>
              <div key={i}>
                <h5 className="text-xl font-semibold my-3">{p.section}</h5>
                <p className="text-pretty text-lg text-gray-500">{p.text}</p>
              </div>
            )


          }
        </div>
        <Link to={'/blog'} className="btn btn-outline btn-info my-8">Read more </Link>
      </div>
    </div>
  )
}

export default SingleBlogPost
