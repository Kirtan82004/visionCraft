import { useState } from "react";

const newsData = [
  {
    title: "New Product Launch: Stylish Eyeglasses",
    description: "Discover our latest collection of stylish eyeglasses that combine fashion and function.",
    category: "Product Launches",
    imgSrc: "https://placehold.co/600x400"
  },
  {
    title: "20% Off on All Sunglasses",
    description: "Enjoy a 20% discount on all sunglasses this summer. Limited time offer!",
    category: "Discounts and Offers",
    imgSrc: "https://placehold.co/600x400"
  },
  {
    title: "Industry Trends: Optical Market Growth",
    description: "The optical market is growing rapidly. Stay updated with the latest industry trends.",
    category: "Industry Trends",
    imgSrc: "https://placehold.co/600x400"
  },
  {
    title: "Eye Health Tips: Glasses vs. Contacts",
    description: "Learn the pros and cons of wearing glasses versus contact lenses for better eye health.",
    category: "Eye Health Tips",
    imgSrc: "https://placehold.co/600x400"
  }
];

const OpticalNews=()=> {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Categories");

  const filteredNews = newsData.filter(news =>
    (filter === "All Categories" || news.category === filter) &&
    news.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((news, index) => (
            <article key={index} className="bg-white p-4 rounded shadow">
              <img src={news.imgSrc} alt={news.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-bold mb-2">{news.title}</h3>
              <p className="text-gray-700">{news.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">All News</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search news..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Filter by Category</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All Categories</option>
            <option>Product Launches</option>
            <option>Discounts and Offers</option>
            <option>Industry Trends</option>
            <option>Eye Health Tips</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNews.map((news, index) => (
            <article key={index} className="bg-white p-4 rounded shadow">
              <img src={news.imgSrc} alt={news.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-bold mb-2">{news.title}</h3>
              <p className="text-gray-700">{news.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default OpticalNews;