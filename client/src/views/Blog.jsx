import React, { useState } from 'react'
import AppImg from '../assets/images/services/Apps.jpg'

const Blog = () => {
  const [displayMore, setDisplayMore] = useState(false);

  const toggleShowMore = () => {
    setDisplayMore(!displayMore);
  };

  const posts = [
    {
      heading: "Cybersecurity and Compliance: Building Trust in Software",
      date: "Feb 05, 2024",
      article: "Discover how SphereWise Tech builds software that doesn't just react but prevents cybersecurity and legal issues. Regardless of the industry, our focus on compliance ensures trust in every software solution we deliver.",
      img: AppImg,
    },
    {
      heading: "Agile Velocity: Doubling Speed with Quality in Development",
      date: "Jan 10, 2024",
      article: "Learn how SphereWise Tech's Agile approach doubles velocity by emphasizing quality in development. Explore the benefits of our quick implementation, technology agnosticism, and adaptability that propels your business forward.",
      img: AppImg,
    },
    {
      heading: "Navigating the Dynamic Landscape of Custom Software",
      date: "Dec 20, 2023",
      article: "Embark on a journey through the dynamic landscape of custom software development with SphereWise Tech. Our dedicated team collaborates closely with clients, adapting codes to meet immediate needs and lay the groundwork for sustainable success.",
      img: AppImg,
    },
    {
      heading: "Innovation in Web Development: Crafting Strategic Solutions",
      date: "Nov 05, 2023",
      article: "Explore the realm of innovation in web development as SphereWise Tech shares insights into crafting strategic solutions. Dive into the intricacies of user experience, responsive design, and how our technology stack erases flexibility limits for every project.",
      img: AppImg,
    },
    {
      heading: "Empowering Small Businesses: Our Commitment to Growth",
      date: "Oct 15, 2023",
      article: "At SphereWise Tech, we delve into our unwavering commitment to championing the growth of small businesses. Learn how our bespoke website and software solutions are crafted to elevate startups and local enterprises to new heights.",
      img: AppImg,
    },
    {
      heading: "Maximizing Efficiency: The Power of Streamlined Processes",
      date: "Sep 25, 2023",
      article: "SphereWise Tech explores the importance of maximizing efficiency through streamlined processes. Discover how our tailored solutions optimize workflows, enhance productivity, and drive business success.",
      img: AppImg,
    },
    {
      heading: "The Future of Technology: Trends Shaping the Digital Landscape",
      date: "Aug 12, 2023",
      article: "Delve into the future of technology with SphereWise Tech as we discuss trends shaping the digital landscape. Stay ahead of the curve and explore how innovative technologies can propel your business forward.",
      img: AppImg,
    },
    {
      heading: "Strategic Web Presence: Enhancing Your Brand's Online Impact",
      date: "Jul 01, 2023",
      article: "Learn the art of strategic web presence with SphereWise Tech. Discover how our customized websites are designed to enhance your brand's online impact, attract audiences, and drive meaningful engagement.",
      img: AppImg,
    },
    {
      heading: "Mastering User Experience: Key Elements for Website Success",
      date: "Jun 15, 2023",
      article: "Explore the world of user experience mastery with SphereWise Tech. Uncover the key elements that contribute to website success, ensuring a seamless and engaging experience for your visitors.",
      img: AppImg,
    },
    {
      heading: "Unlocking Business Potential: The Role of Innovative Software Solutions",
      date: "May 01, 2023",
      article: "SphereWise Tech discusses the pivotal role of innovative software solutions in unlocking business potential. Learn how our customized software can address unique challenges and drive sustainable growth.",
      img: AppImg,
    },
  ];

  return (
    <div className='container mx-auto'>

      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>

      <div className="flex gap-4">
        <div className="flex-1 text-start px-4">
          <a className="w-full" href="#">
            <img className="rounded-xl object-cover w-full h-80 mb-4" src={posts[0].img} alt="Blog post image" />
            <span className="text-gray-500">{posts[0].date}</span>
            <h4 className="text-3xl font-semibold my-4">{posts[0].heading}</h4>
            <p className="max-w-xl text-lg text-gray-500">{posts[0].article}</p>
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-4 text-start px-4">
          {posts.slice(1, 4).map((post, i) => (
            <a key={i} className="md:flex group" href="#">
              <img className="rounded-xl object-cover w-48 h-40" src={post.img} alt="Blog post image" />
              <div className="mt-4 md:mt-0 md:ml-6 pt-2">
                <span className="block text-gray-500 mb-2">{post.date}</span>
                <h4 className="text-xl font-semibold">{post.heading}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
      {!displayMore &&
        <div className="text-center my-8">
          <button onClick={toggleShowMore} className="btn btn-outline btn-info">See More Articles <i class="fa-solid fa-angle-down"></i></button>
        </div>

      }
      {displayMore &&
        <>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 xl:px-20 mt-10 text-start">
            {posts.slice(4, posts.length).map((post, i) => (
              <a key={i} className="flex flex-col items-center px-6" href="#">
                <img className="rounded-xl object-cover w-full h-40" src={post.img} alt="Blog post image" />
                <div className="mt-2">
                  <span className="block text-gray-500 mb-2">{post.date}</span>
                  <h4 className="text-xl font-semibold">{post.heading}</h4>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center my-8">
            <button onClick={toggleShowMore} className="btn btn-outline btn-info">Show Less <i class="fa-solid fa-angle-up"></i></button>
          </div>
        </>

      }

    </div>

  )
}

export default Blog
