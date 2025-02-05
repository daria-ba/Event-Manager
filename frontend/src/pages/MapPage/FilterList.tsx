import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Filter, Category } from './MapPage';
import PriceFilter from './PriceFilter';

type FilterListProps = {
  categories: Category[];
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
};

const minPrice = 0;
const maxPrice = 1000;

const FilterList: React.FC<FilterListProps> = ({ categories, filters, setFilters }) => {
  const location = useLocation();
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  useEffect(() => {
    const categoriesParam = searchParams.get("category");
    const initialCategories = categoriesParam ? categoriesParam.split(",") : [];
    if (JSON.stringify(filters.categories) !== JSON.stringify(initialCategories)) {
      setFilters((prev) => ({
        ...prev,
        categories: initialCategories,
      }));
    }
  }, [searchParams, setFilters, filters.categories]);

  const availableFilters = {
    cities: ["Москва", "Санкт-Петербург" ],
    prices: [0, 100],
    dates: ["Сегодня", "Завтра", "На этой неделе"],
  };

  const handleCityChange = (city: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      city: prevFilters.city.includes(city)
        ? prevFilters.city.filter((c) => c !== city)
        : [...prevFilters.city, city],
    }));
  };

  const handlePriceRangeChange = (range: number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: range,
    }));
  };

  const handleDateChange = (date: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      date: prevFilters.date.includes(date)
        ? prevFilters.date.filter((d) => d !== date)
        : [...prevFilters.date, date],
    }));
  };

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => {
      const isCategorySelected = prev.categories.includes(category);
      const updatedCategories = isCategorySelected
      ? prev.categories.filter((c) => c !== category)
      : [...prev.categories, category];
      
      const searchParams = new URLSearchParams(location.search);

      if (updatedCategories.length > 0) {
        searchParams.set("category", updatedCategories.join(","));
      } else {
        searchParams.delete("category");
      }
      navigate(`?${searchParams.toString()}`, { replace: true });

      return { ...prev, categories: updatedCategories };
    });
  };

  return (
    <div className='p-4'>
      <Button
        variant="costom"
        className="d-md-none mb-3 custom-button"
        onClick={toggleFilters}
      >
        {isFiltersOpen ? "Скрыть фильтры" : "Показать фильтры"}
      </Button>

      <div className={`filters-container ${isFiltersOpen ? "open" : "close"} d-md-block`}>
      <h4>Категории</h4>
        <ul className='filters categories-input'>
          {categories.map((category) => (
            <li key={category.id}>
                <input
                  id={`checkbox-${category.id}`}
                  type="checkbox"
                  checked={filters.categories.includes(category.link)}
                  onChange={() => handleCategoryChange(category.link)}
                />
              <label htmlFor={`checkbox-${category.id}`}>
                {category.title}
              </label>
            </li>
          ))}
        </ul>
        <div className="range-input m-3">
          <PriceFilter
            min={minPrice}
            max={maxPrice}
            initialRange={filters.priceRange}
            onRangeChange={handlePriceRangeChange}
          />
        </div>
      <div>
        <h4>Города</h4>
        <ul className='filters'>
          {availableFilters.cities.map((city) => (
            <li>
                <input
                  id={`checkbox-${city}`}
                  type="checkbox"
                  checked={filters.city.includes(city)}
                  onChange={() => handleCityChange(city)}
                />
                <label htmlFor={`checkbox-${city}`}>
                {city}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Даты</h4>
        <ul className='filters'>
        {availableFilters.dates.map((date) => (
          <li>
            <input
              id={`checkbox-${date}`}
              type="checkbox"
              checked={filters.date.includes(date)}
              onChange={() => handleDateChange(date)}
            />
            <label htmlFor={`checkbox-${date}`}>
            {date}
          </label>
          </li>
        ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default FilterList;