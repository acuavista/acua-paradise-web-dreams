
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useNavigate } from 'react-router-dom';

const BlogSection: React.FC = () => {
  const navigate = useNavigate();   
      const handleBlogClick = (slug: string) => {
         navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and news from the world of tropical real estate investment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="glass-card h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  {post.hasSpecialIcon && (
                    <div className="absolute bottom-4 right-4">
                      <img 
                        src={import.meta.env.BASE_URL + "lovable-uploads/blackDeal.png"} 
                        alt="Special Deal" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-white/60 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-medium mb-3 tracking-tight">{post.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{post.excerpt}</p>
                  <button 
                    onClick={() => handleBlogClick(post.slug)}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center cursor-pointer"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
