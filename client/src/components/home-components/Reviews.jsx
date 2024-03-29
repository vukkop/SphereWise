import React, { useRef, useState, useEffect } from 'react'

const Reviews = () => {
  const carouselRef = useRef(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviews = [
    {
      review: 'Amazing service! SphereWise Tech delivered beyond my expectations. The tailored solutions perfectly addressed our business needs.',
      name: 'John Doe',
      rating: 10,
    },
    {
      review: 'Incredible expertise! The team\'s commitment to quality and innovation is evident in every project. Highly recommend SphereWise Tech.',
      name: 'Jane Smith',
      rating: 10,
    },
    {
      review: 'Exceptional results! SphereWise Tech\'s adaptability and attention to detail make them a valuable partner. Our business has seen significant growth.',
      name: 'Alex Johnson',
      rating: 10,
    },
    {
      review: 'Outstanding collaboration! SphereWise Tech\'s certified experts provided a seamless experience. Their focus on compliance and technology agnosticism sets them apart.',
      name: 'Emily Brown',
      rating: 10,
    },
  ]


  // useEffect(() => {
  //   const changeReviewAutomatically = () => {
  //     if (currentReviewIndex >= reviews.length - 1) {
  //       setCurrentReviewIndex(0)
  //     } else {
  //       setCurrentReviewIndex((prevIndex) => (prevIndex + 1));
  //     }
  //     scrollToReview(currentReviewIndex)
  //   }
  //   const intervalId = setInterval(changeReviewAutomatically, 3500);

  //   return () => clearInterval(intervalId);
  // }, [currentReviewIndex]);

  const handleArrowClick = (event, i) => {
    event.preventDefault();
    setCurrentReviewIndex(i)
    scrollToReview(i)
  };

  // Preventing Y-axis scroll
  const scrollToReview = (index) => {
    const slide = carouselRef.current.querySelector(`#slide${index}`);
    if (slide) {
      slide.scrollIntoView({
        inline: 'nearest',
        block: 'nearest'
      });
    }
  }

  return (
    <div className="row my-10">
      <h3 className="text-left text-4xl my-7">Reviews</h3>


      <div className="carousel w-full" ref={carouselRef} >

        {reviews.map((reviews, i) => (
          <div key={i} id={`slide${i}`} className={`carousel-item relative w-full`}>
            <div className="flex justify-center items-center w-full">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">

                  <blockquote>
                    <h3 className="text-2xl font-semibold">"{reviews.review}"</h3>
                  </blockquote>

                  <figcaption className="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                    <div className="flex items-center justify-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                      <cite className="pe-3 font-medium ">{reviews.name}</cite>
                      <cite className="ps-3 text-sm ">Google Reviews</cite>
                    </div>
                  </figcaption>

                  <div className="rating rating-lg rating-half justify-center">
                    <input type="radio" name="rating-10" className="rating-hidden" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" checked readOnly />
                  </div>

                </div>
              </div>
            </div>

            <div className="absolute hidden sm:flex justify-between transform -translate-y-1/2 left-5 right-5 md:left-20 md:right-20 lg:left-40 lg:right-40 xl:left-60 xl:right-60 2xl:left-80 2xl:right-80 top-1/2">
              <a className="btn btn-circle" onClick={(e) => handleArrowClick(e, i - 1)}>❮</a>
              <a className="btn btn-circle" onClick={(e) => handleArrowClick(e, i + 1)}>❯</a>
            </div>
          </div>
        ))}

      </div>
    </div >
  )
}

export default Reviews
