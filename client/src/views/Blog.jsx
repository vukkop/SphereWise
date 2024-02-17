import React from 'react'
import AppImg from '../assets/images/services/Apps.jpg'

const Blog = () => {
  const posts = [
    {
      heading: "Consectures Dummy Content Velit officia consequat duis enim velit",
      date: "Jul 20, 2022",
      article: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit xercitation veniam consequat sunt nostrud amet.",
      img: AppImg,
    },
  ]

  return (
    <div className='container mx-auto'>

      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>

      <div className="flex gap-4">
        <div className="flex-1 text-start px-4">
          <a className="w-full" href="#">
            <img className="rounded-xl object-cover w-full h-80 mb-4" src={AppImg} alt="" />
            <span className="">Jul 20, 2022</span>
            <h4 className="text-3xl font-semibold mb-5">Consectures Dummy Content Velit officia consequat duis enim velit</h4>
            <p className="max-w-xl text-lg text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit xercitation veniam consequat sunt nostrud amet.</p>
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-4 text-start px-4">
          <a className="md:flex group" href="#">
            <img className="rounded-xl object-cover w-48 h-40" src={AppImg} alt="" />
            <div className="mt-4 md:mt-0 md:ml-6 pt-2">
              <span className="block text-gray-500 mb-2">Jul 20, 2022</span>
              <h4 className="text-xl font-semibold">Consectures Content Velitpato officia consequat duis enim velit mollit</h4>
            </div>
          </a>
          <a className="md:flex group" href="#">
            <img className="rounded-xl object-cover w-48 h-40" src={AppImg} alt="" />
            <div className="mt-4 md:mt-0 md:ml-6 pt-2">
              <span className="block text-gray-500 mb-2">Jul 20, 2022</span>
              <h4 className="text-xl font-semibold">Consectures Content Velitpato officia consequat duis enim velit mollit</h4>
            </div>
          </a>
          <a className="md:flex group" href="#">
            <img className="rounded-xl object-cover w-48 h-40" src={AppImg} alt="" />
            <div className="mt-4 md:mt-0 md:ml-6 pt-2">
              <span className="block text-gray-500 mb-2">Jul 20, 2022</span>
              <h4 className="text-xl font-semibold">Consectures Content Velitpato officia consequat duis enim velit mollit</h4>
            </div>
          </a>
        </div>
      </div>
      <div className="text-center my-8">
        <a className="relative group inline-block py-4 px-7 font-semibold text-orange-900 hover:text-orange-50 rounded-full bg-white transition duration-300 overflow-hidden" href="#">
          <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative">See More Articles</span>
        </a>
      </div>
    </div>

  )
}

export default Blog
