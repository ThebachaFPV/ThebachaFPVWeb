import React from 'react';

interface StoreNavBarProps {
  categories: string[];
  setSelectedCategory: (category: string | null) => void;
}

const StoreNavBar: React.FC<StoreNavBarProps> = ({ categories, setSelectedCategory }) => {
  return (
    <nav className="store-nav">
      <ul>
        <li><button onClick={() => setSelectedCategory(null)}>All</button></li>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => setSelectedCategory(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StoreNavBar;