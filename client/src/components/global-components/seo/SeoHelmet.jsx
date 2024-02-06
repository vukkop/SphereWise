import React from 'react'
import { Helmet } from "react-helmet";

const SeoHelmet = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>SphereWise - Your Web & Software Solutions Partner</title>
      <meta
        name="description"
        content="Transforming businesses with custom web development and software solutions. We specialize in creating tailored digital experiences for your unique needs."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="website development, custom software, web design, business solutions, Vancouver"
      />

      {/* Author */}
      <meta name="author" content="SphereWise" />

      {/* Open Graph Meta Tags (Facebook, LinkedIn, etc.) */}
      <meta
        property="og:title"
        content="SphereWise Technology - SphereWise.ca"
      />
      <meta
        property="og:description"
        content="Transforming businesses with custom web development and software solutions. We specialize in creating tailored digital experiences for your unique needs."
      />
      <meta property="og:image" content="./assets/logo/Logo_light_background.png" />
      <meta property="og:url" content="https://spherewise.ca/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SphereWise" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="../assets/logo/Logo_light_background.png" />
      <meta
        name="twitter:title"
        content="SphereWise Technology - SphereWise.ca"
      />
      <meta
        name="twitter:description"
        content="Transforming businesses with custom web development and software solutions. We specialize in creating tailored digital experiences for your unique needs."
      />
      <meta name="twitter:image" content="../assets/logo/Logo_light_background.png" />
      {/* <meta name="twitter:creator" content="@yourtwitterhandle" /> */}

      {/* Viewport Settings */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://spherewise.ca/" />

      {/* Robots Meta Tag */}
      <meta name="robots" content="index, follow" />

      {/* Google Site Verification */}
      {/* <meta
          name="google-site-verification"
          content="Your Google Site Verification Code"
        /> */}

      {/* Additional Custom Meta Tags */}
      {/* Add any additional meta tags that are relevant to your content and SEO strategy */}
    </Helmet>
  )
}

export default SeoHelmet
