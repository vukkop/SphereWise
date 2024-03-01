import React from 'react'

const CookiePolicy = () => {
  return (
    <div className='container mx-auto min-h-[70vh] mb-10 px-10'>
      <h1 className='text-4xl font-bold my-8'>CookiePolicy</h1>


      <h4 className='text-2xl text-start font-bold'>What Are Cookies?</h4>
      <p className='text-start mt-2 mb-10'>Cookies are small text files that are placed on your device when you visit our Website. They help us enhance your user experience and provide us with valuable information about site usage.</p>

      <h4 className='text-2xl text-start font-bold'>Types of Cookies We Use</h4>
      <ul className='text-start mt-2 mb-10 list-disc pl-6'>
        <li>Essential Cookies: Necessary for the functioning of the Website.</li>
        <li>Analytical/Performance Cookies: Allow us to recognize and count the number of visitors, helping us understand how visitors interact with the Website.</li>
        <li>Functionality Cookies: Enhance your experience by remembering choices you make, such as language preferences.</li>
        <li>Targeting Cookies: Record your visit to the Website, pages visited, and links followed. We use this information to tailor content and advertisements to your interests.</li>
      </ul>
      <h4 className='text-2xl text-start font-bold'>How to Manage Cookies</h4>
      <p className='text-start mt-2 mb-10'>
        Most web browsers allow you to control and block cookies through browser settings. However, please note that blocking certain cookies may affect your experience on the Website.
      </p>
      <h4 className='text-2xl text-start font-bold'>Third-Party Cookies</h4>
      <p className='text-start mt-2 mb-10'>
        Some cookies on the Website are placed by third-party services. We have no control over these cookies. Please refer to the respective privacy policies of these third parties for more information.
      </p>
      <h4 className='text-2xl text-start font-bold'>Changes to Cookie Policy</h4>
      <p className='text-start mt-2 mb-10'>
        We reserve the right to modify this Cookie Policy at any time. Changes will be effective immediately upon posting on the Website. We encourage you to review this Cookie Policy regularly for updates.
      </p>
      <h4 className='text-2xl text-start font-bold'>Contact Information</h4>
      <p className='text-start mt-2 mb-10'>
        For any questions or concerns regarding this Cookie Policy, please contact us at <a className='link highlight' href="mailto:info@spherewise.ca">
          info@spherewise.ca
        </a>.
      </p>


    </div>
  )
}

export default CookiePolicy
