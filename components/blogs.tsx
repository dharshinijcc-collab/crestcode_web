'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/619d6de9e020646158e731d3e6eddcb9e4853c43?width=866",
    category: "Design",
    date: "March 12, 2025",
    readTime: "4 min read",
    title: "Future of AI in Product Development: Transforming Ideas into Reality",
    excerpt: "Artificial Intelligence is no longer a distant concept, it is becoming an integral part of modern product development...",
    author: "Ahmed Faraz",
    tags: ["#AI", "#Product Development"],
    slug: "future-of-ai-in-product-development",
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c49c2c58d2b35635745b449e356e1f4aa7aa81ae?width=768",
    category: "Startups",
    date: "March 10, 2025",
    readTime: "3 min read",
    title: "Building Successful MVP: A Complete Guide for Entrepreneurs",
    excerpt: "Every successful product begins with a strong foundation, and for entrepreneurs, that foundation is the Minimum Viable Product...",
    author: "Moin Khan",
    tags: ["#MVP", "#Entreprenuership"],
    slug: "building-successful-mvp-guide",
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/661b1b9a40356d182f77b3eda1d92ba86a07c3c7?width=768",
    category: "Development",
    date: "March 5, 2025",
    readTime: "3 min read",
    title: "Digital Transformation Strategies for Modern Businesses",
    excerpt: "Digital transformation is no longer an optional choice for modern businesses. It has become a necessary strategy to...",
    author: "Karthik Raja",
    tags: ["#Digital Transformation", "#Business Strategy"],
    slug: "digital-transformation-strategies",
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b317b178070cf76a148f098ad009af443a72f32e?width=768",
    category: "Business",
    date: "March 3, 2025",
    readTime: "3 min read",
    title: "User Experience Design: Creating Products People Love",
    excerpt: "User Experience design, often called UX design, focuses on creating products that are intuitive, enjoyable, and valuable...",
    author: "Tulasi Divya",
    tags: ["#UX Design", "#User Experience"],
    slug: "user-experience-design-products",
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8e0f215cea43f513ca89c4fc651c0667f92b228c?width=768",
    category: "Technology",
    date: "February 28, 2025",
    readTime: "3 min read",
    title: "Startup Funding: Navigating the Investment Landscape",
    excerpt: "Essential security measures every development team should implement when building cloud-native applications.",
    author: "Swathi",
    tags: ["#Startup Funding", "#Investment"],
    slug: "startup-funding-investment-landscape",
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/42a1d7cbfe01347873491457c61af7fb2ef15e02?width=768",
    category: "Startups",
    date: "February 25, 2025",
    readTime: "3 min read",
    title: "Agile Development Methodologies for Tech Teams",
    excerpt: "Agile development has transformed the way tech teams plan, build, and deliver products. It emphasizes adaptability",
    author: "Vinitha",
    tags: ["#Agile", "#Software Development"],
    slug: "agile-development-methodologies",
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c430a08b59ba8f33dedaeae5575ebe15a7c1787c?width=720",
    category: "Technology",
    date: "March 1, 2025",
    readTime: "3 min read",
    title: "Cloud Computing: Transforming Business Infrastructure",
    excerpt: "Cloud computing has revolutionized the way businesses manage and scale their operations. It offers a flexible and cost...",
    author: "Satheesh",
    tags: ["#Cloud Computing", "#infrastructure"],
    slug: "cloud-computing-business-infrastructure",
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1927313e9ac85e2b461af51eaed19e7daf76ce2d?width=768",
    category: "Business",
    date: "February 28, 2025",
    readTime: "3 min read",
    title: "Data-Driven Decision Making in Modern Business",
    excerpt: "Data-driven decision making has become an essential approach in today's competitive business world. Organizations",
    author: "Mythrehe",
    tags: ["#Data Analytics", "#Business Intelligence"],
    slug: "data-driven-decision-making",
  },
];

const categories = [
  "All",
  "Technology",
  "Startups",
  "Design",
  "Development",
  "Business",
  "AI/ML",
];

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  tags: string[];
  slug: string;
}

function BlogHero() {
  return (
    <section className="bg-[#9BB4C2] px-6 py-16 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col items-center gap-12 md:gap-15">
        <div className="flex flex-col items-center gap-6 text-center px-2">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Our Blog
          </h1>
          <p className="text-lg md:text-[22px] text-gray-900 leading-relaxed max-w-2xl">
            Insights, tutorials, and industry perspectives from our team of experts
          </p>
        </div>
        <button className="bg-gray-900 text-white px-6 py-5 rounded text-xl font-semibold hover:bg-gray-800 transition-colors">
          Read Our Latest Thinking
        </button>
      </div>
    </section>
  );
}

interface BlogFiltersProps {
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

function BlogFilters({ activeFilter, onFilterChange }: BlogFiltersProps) {
  return (
    <section className="border-b border-gray-200 py-8 px-6 pb-12">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === category
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filteredCount: number;
}

function BlogSearch({ searchTerm, onSearchChange, filteredCount }: BlogSearchProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-6 md:px-12 py-6 relative z-10 max-w-7xl mx-auto mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="flex items-center gap-2 border border-gray-400 rounded px-3 py-2 w-full md:flex-1">
          <svg
            className="w-6 h-6 text-gray-400 flex-shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 5.5C9.17392 5.5 7.90215 6.02678 6.96447 6.96447C6.02678 7.90215 5.5 9.17392 5.5 10.5C5.5 11.8261 6.02678 13.0979 6.96447 14.0355C7.90215 14.9732 9.17392 15.5 10.5 15.5C11.8261 15.5 13.0979 14.9732 14.0355 14.0355C14.9732 13.0979 15.5 11.8261 15.5 10.5C15.5 9.17392 14.9732 7.90215 14.0355 6.96447C13.0979 6.02678 11.8261 5.5 10.5 5.5ZM4 10.5C4 8.77609 4.68482 7.12279 5.90381 5.90381C7.12279 4.68482 8.77609 4 10.5 4C12.2239 4 13.8772 4.68482 15.0962 5.90381C16.3152 7.12279 17 8.77609 17 10.5C17 12.2239 16.3152 13.8772 15.0962 15.0962C13.8772 16.3152 12.2239 17 10.5 17C8.77609 17 7.12279 16.3152 5.90381 15.0962C4.68482 13.8772 4 12.2239 4 10.5Z"
              fill="#A9AEB9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.47 14.47C14.6106 14.3295 14.8013 14.2506 15 14.2506C15.1988 14.2506 15.3894 14.3295 15.53 14.47L19.53 18.4699C19.6037 18.5386 19.6628 18.6214 19.7038 18.7134C19.7448 18.8054 19.7668 18.9047 19.7686 19.0054C19.7704 19.1061 19.7519 19.2062 19.7141 19.2995C19.6764 19.3929 19.6203 19.4778 19.549 19.549C19.4778 19.6202 19.393 19.6764 19.2996 19.7141C19.2062 19.7518 19.1062 19.7703 19.0055 19.7685C18.9048 19.7668 18.8055 19.7447 18.7135 19.7037C18.6215 19.6627 18.5387 19.6036 18.47 19.53L14.47 15.53C14.3296 15.3893 14.2507 15.1987 14.2507 15C14.2507 14.8012 14.3296 14.6106 14.47 14.47Z"
              fill="#A9AEB9"
            />
          </svg>
          <input
            type="text"
            placeholder="Search blogs.."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 outline-none text-sm text-gray-900 placeholder:text-gray-400"
          />
        </div>

        {/* Found Blogs Text */}
        <div className="text-center hidden md:block whitespace-nowrap">
          <p className="text-[22px] text-gray-900">
            Found <span className="font-bold text-blue-400">{filteredCount}</span> Blogs
          </p>
        </div>

        {/* Mobile Found Blogs */}
        <div className="text-center md:hidden w-full">
          <p className="text-[22px] text-gray-900">
            Found <span className="font-bold text-blue-400">{filteredCount}</span> Blogs
          </p>
        </div>
      </div>
    </div>
  );
}

function BlogCard({
  image,
  category,
  date,
  readTime,
  title,
  excerpt,
  author,
  tags,
  slug,
}: BlogCardProps) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-700">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 1V3"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1V3"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 5H10.5"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 3V6L8 7"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 mb-3 leading-7 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 mb-4 leading-6 line-clamp-3">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="text-xs text-gray-400 font-light">
              +{tags.length - 2} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6666 14V12.6667C12.6666 11.9594 12.3857 11.2811 11.8856 10.781C11.3855 10.281 10.7072 10 9.99998 10H5.99998C5.29274 10 4.61446 10.281 4.11436 10.781C3.61426 11.2811 3.33331 11.9594 3.33331 12.6667V14"
                stroke="#9CA3AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99998 7.33333C9.47274 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47274 2 7.99998 2C6.52722 2 5.33331 3.19391 5.33331 4.66667C5.33331 6.13943 6.52722 7.33333 7.99998 7.33333Z"
                stroke="#9CA3AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-gray-600">{author}</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600 hover:text-blue-700 cursor-pointer" onClick={handleReadMore}>
            <span className="text-sm font-normal">Read More</span>
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 6H9.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 2.5L9.5 6L6 9.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}


export default function blogs() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on category and search term
  const filteredBlogs = blogPosts.filter((post) => {
    const matchesCategory = activeFilter === "All" || post.category === activeFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHero />
      <BlogFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="px-6 pb-16">
        <BlogSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filteredCount={filteredBlogs.length}
        />

        {/* Articles Section */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends and insights in technology and business
            </p>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No blogs found. Try adjusting your filters or search term.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
