import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";

const PortfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageFive,
    link: "",
  },
  {
    id: 2,
    name: "Shopping App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 3,
    name: "Todo App",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageFour,
    link: "",
  },
];

const FilterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filterValue, setFilteredValue] = useState(1);
  const [hoverValue, setHoverValue] = useState(null);

  const handleFilter = (currentid) => {
    setFilteredValue(currentid);
  };
  // console.log(filterValue);
  const filteredItems =
    filterValue === 1
      ? PortfolioData
      : PortfolioData.filter((item) => {
          // console.log(item.id);
          console.log(filterValue);
          return item.id === filterValue;
        });
  // console.log(filteredItems);

  const handleHover = (index) => {
    setHoverValue(index);
  };
  // console.log(hoverValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My portfolio"
        icon={<BsFillInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {FilterData.map((item) => {
            return (
              <li
                className={item.filterId === filterValue ? "active" : ""}
                key={item.filterId}
                onClick={() => handleFilter(item.filterId)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, i) => {
            return (
              <div
                className="portfolio__content__cards__item"
                key={`carditems${item.name.trim()}`}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__image-wrapper">
                  <a>
                    <img src={item.image} alt={item.name} />
                  </a>
                </div>
                <div className="overlay">
                  {i === hoverValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
