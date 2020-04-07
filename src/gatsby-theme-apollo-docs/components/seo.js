// src/gatsby-theme-apollo-docs/components/seo.js
import React from 'react';
import {Helmet} from 'react-helmet';
import favicon from '../../../content/assets/favicon.ico'

export default function SEO({title, description, siteName}) {
  return (
    <Helmet>
      <link rel="icon" href={favicon} />
      {/* other SEO tags (OpenGraph, Twitter, etc.) */}
    </Helmet>
  );
}
