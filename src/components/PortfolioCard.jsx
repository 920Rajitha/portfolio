import React from 'react';

const PortfolioCard = ({ image, title, tags }) => {
  return (
    <div className="relative bg-[#1f2937] rounded-xl overflow-hidden shadow-lg group transition hover:shadow-yellow-400/30">
      <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-yellow-400">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
