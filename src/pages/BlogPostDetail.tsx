import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetail = () => {
  const { slug } = useParams();

  let articleContent = null; // This will hold the JSX for the article's body
  let articleTitle = "Article Not Found";
  let articleDate = "";
  let articleCategory = "";
  let articleReadTime = "";
  let articleFeaturedImage = ""; // For a potential image within the article content itself

  // Use a switch statement to determine which article content to display based on the slug
  switch (slug) {
    case 'why-cartagena-is-the-next-miami':
      articleTitle = "Why Cartagena is the Next Miami";
      articleDate = "June 20, 2024"; // Match date from blogPosts.ts
      articleCategory = "Investment"; // Match category from blogPosts.ts
      articleReadTime = "5 min read"; // Match readTime from blogPosts.ts
      articleFeaturedImage = import.meta.env.BASE_URL + "lovable-uploads/d6c37a1e-5d79-4349-a555-4c8e072c5d4b.png"; // Example: using the thumbnail as featured, or provide a unique one

      articleContent = (
        <>
          {/* This is the actual content for "Why Cartagena is the Next Miami" */}
          <p className="mb-4 leading-relaxed">
            Cartagena, Colombia, is rapidly emerging as a premier destination for luxury real estate and investment, drawing parallels to the early growth of Miami. With its stunning Caribbean coastline, rich history, vibrant culture, and a burgeoning tourism sector, Cartagena offers an unparalleled blend of lifestyle and investment potential.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4">Strategic Location and Accessibility</h2>
          <p className="mb-4 leading-relaxed">
            One of the key factors driving Cartagena's appeal is its strategic geographical location. Easily accessible from major North American and European cities, it serves as a gateway to South America. The city's Rafael Núñez International Airport (CTG) has seen significant expansion, accommodating an increasing number of international flights, making it incredibly convenient for investors and tourists alike.
          </p>

          {/* You can include images within your article content like this: */}
          {/* Ensure "article-image-1.jpg" is uploaded to public/lovable-uploads */}
          {/*
          <img
            src={import.meta.env.BASE_URL + "lovable-uploads/article-image-1.jpg"}
            alt="Cartagena beachfront"
            className="w-full h-auto my-8 rounded-lg shadow-lg"
          />
          */}

          <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4">Booming Tourism and Economic Growth</h2>
          <p className="mb-4 leading-relaxed">
            Cartagena has consistently ranked among the top tourist destinations in Latin America. Its colonial walled city, a UNESCO World Heritage site, attracts millions of visitors annually, fueling a robust hospitality sector. This tourism boom directly impacts real estate, creating high demand for rental properties and a fertile ground for short-term rental investments. The local economy is diversifying, with significant investments in infrastructure and services further solidifying its growth trajectory.
          </p>
          <p className="mb-4 leading-relaxed">
            Consider the charming streets of Getsemaní, the exclusive Bocagrande peninsula, or the serene, developing areas just outside the city. Each offers unique investment opportunities, from historic boutique hotels to modern high-rise apartments and expansive beachfront properties.
          </p>
          <p className="leading-relaxed">
            The confluence of strategic location, economic vitality, and a growing international reputation makes Cartagena a compelling choice for investors seeking the "next Miami."
          </p>
        </>
      );
      break;

    case 'building-your-dream-home':
      articleTitle = "Building Your Dream Home";
      articleDate = "June 15, 2024";
      articleCategory = "Construction";
      articleReadTime = "8 min read";
      articleFeaturedImage = import.meta.env.BASE_URL + "lovable-uploads/ff3f2c8a-caa1-4efe-a171-403f8a3fc150.png";

      articleContent = (
        <>
          {/* Replace this with the full content for "Building Your Dream Home" */}
          <p className="mb-4 leading-relaxed">
            **Content for "Building Your Dream Home" goes here.**
            From the initial design concepts to the final touches of construction, creating your perfect tropical retreat is an exciting journey. This article will guide you through every step, ensuring your dream home becomes a reality in paradise.
          </p>
          <p className="leading-relaxed text-yellow-300">
            (Remember to replace this placeholder content with your actual article!)
          </p>
        </>
      );
      break;

    case '90-percent-financing-how-we-make-paradise-accessible':
      articleTitle = "90% Financing: How We Make Paradise Accessible";
      articleDate = "June 10, 2024";
      articleCategory = "Financing";
      articleReadTime = "6 min read";
      articleFeaturedImage = import.meta.env.BASE_URL + "lovable-uploads/3482fbb8-15a8-4f60-b2b6-ca36f7ff9730.png";

      articleContent = (
        <>
          {/* Replace this with the full content for "90% Financing" */}
          <p className="mb-4 leading-relaxed">
            **Content for "90% Financing: How We Make Paradise Accessible" goes here.**
            Discover how our revolutionary financing model is opening doors to tropical property ownership for everyone, making paradise more accessible than ever before.
          </p>
          <p className="leading-relaxed text-yellow-300">
            (Remember to replace this placeholder content with your actual article!)
          </p>
        </>
      );
      break;

    default:
      // Handle cases where the slug doesn't match any known article
      articleTitle = "Article Not Found";
      articleContent = (
        <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
          The article you are looking for does not exist or has been moved.
        </p>
      );
      break;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8 pt-24 md:pt-32"> {/* Added padding top for spacing */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{articleTitle}</h1>
        <p className="text-lg mb-8 text-gray-300 text-center">
          {articleDate} | Category: {articleCategory} | {articleReadTime}
        </p>

        {articleFeaturedImage && (
            <img
                src={articleFeaturedImage}
                alt={articleTitle}
                className="w-full h-auto my-8 rounded-lg shadow-lg object-cover"
                style={{ maxHeight: '400px' }}
            />
        )}

        {/* Render the dynamically selected article content */}
        {articleContent}

        <div className="mt-12 text-center">
          <a href={import.meta.env.BASE_URL} className="mt-8 text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center">
  &larr; Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
