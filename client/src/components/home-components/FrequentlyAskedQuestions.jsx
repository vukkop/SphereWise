import React from 'react'
import { Link } from 'react-router-dom'

const FrequentlyAskedQuestions = () => {
  const faq = [
    {
      question: 'What services does SphereWise Tech offer?',
      answer: 'SphereWise Tech specializes in providing tailored website and software solutions for businesses of all sizes. Our services include strategic website design, custom software development, and innovative technology solutions to catalyze growth.'
    },
    {
      question: 'How does SphereWise Tech approach small businesses?',
      answer: 'We believe in championing the growth of businesses, regardless of size. Our bespoke solutions are not confined by scale; they are crafted to elevate small businesses to new heights. From startups to local enterprises, our commitment remains steadfast in delivering intuitive websites and custom software that empower and catalyze growth.'
    },
    {
      question: 'What makes SphereWise Tech different?',
      answer: 'SphereWise Tech stands out for its certified experts, quick implementation with an Agile approach, technology agnosticism providing flexibility, adaptability to client requirements, and a strong emphasis on compliance to prevent cybersecurity and legal issues. Our focus is on quality, innovation, and client satisfaction.'
    },
    {
      question: 'How does SphereWise Tech work with clients?',
      answer: 'We combine the industry\'s best service delivery standards with unprecedented solution personalization practices. Clients can contact us via email or book a meeting, and we respond within two hours. Our expert representatives, matching your market niche and industry, will discuss your requests and provide a service suite offering, including time and cost estimates for each project stage.'
    },
  ]

  return (
    <div className="row my-10">
      <h3 className="text-left text-4xl my-7">Frequently Asked Questions</h3>

      {faq.map((faq, i) => (
        <div key={i} className="collapse bg-base-200 collapse-arrow my-4">
          <input name={i} type="checkbox" />
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
