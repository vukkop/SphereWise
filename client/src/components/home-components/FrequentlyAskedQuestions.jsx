import React from 'react'
import { Link } from 'react-router-dom'

const FrequentlyAskedQuestions = () => {
  const faq = [
    {
      question: 'Question 1?',
      answer: 'Answer 1.'
    },
    {
      question: 'Question 2?',
      answer: 'Answer 2.'
    },
    {
      question: 'Question 3?',
      answer: 'Answer 3.'
    },
    {
      question: 'Question 4?',
      answer: 'Answer 4.'
    },
  ]

  return (
    <div className="row my-10">
      <h3 className="text-left text-4xl my-7">Frequently Asked Questions</h3>

      {faq.map((faq, i) => (
        <div key={i} className="collapse bg-base-200 collapse-arrow my-4">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
      <div className="my-5 text-center">
        <p>Still have any questions? <Link to={"/contact"} className='text-sky-600 font-semibold hover:underline hover:text-sky-500'>Contact us</Link> </p>
      </div>

    </div>
  )
}

export default FrequentlyAskedQuestions
