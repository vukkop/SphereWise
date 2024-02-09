import React from 'react'

const Reviews = () => {

  const reviews = [
    {
      review: 'Review 1.',
      name: 'Name 1',
      raiting: 10,
    },
    {
      review: 'Review 2.',
      name: 'Name 2',
      raiting: 10,
    },
    {
      review: 'Review 3.',
      name: 'Name 3',
      raiting: 10,
    },
    {
      review: 'Review 4.',
      name: 'Name 4',
      raiting: 10,
    },
  ]

  return (
    <div className="row my-10">
      <h3 className="text-left text-4xl my-7">Reviews</h3>


      <div className="carousel w-full">

        {reviews.map((reviews, i) => (
          <div key={i} id={`slide${i}`} className="carousel-item relative w-full">
            <div className='flex justify-center items-center w-full'>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">

                  <blockquote>
                    <h3 class="text-2xl font-semibold">"{reviews.review}"</h3>
                  </blockquote>

                  <figcaption class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                    <div class="flex items-center justify-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                      <cite class="pe-3 font-medium ">{reviews.name}</cite>
                      <cite class="ps-3 text-sm ">Google Reviews</cite>
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
                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" checked />
                  </div>

                </div>
              </div>
            </div>

            <div className="absolute hidden sm:flex justify-between transform -translate-y-1/2 left-5 right-5 md:left-20 md:right-20 lg:left-40 lg:right-40 xl:left-60 xl:right-60 2xl:left-80 2xl:right-80 top-1/2">
              <a href={`#slide${i - 1}`} className="btn btn-circle">❮</a>
              <a href={`#slide${i + 1}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}

      </div>
    </div >
  )
}

export default Reviews
