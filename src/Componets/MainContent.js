import React from 'react';
import ProductCard from './Product'; // Adjust the path if needed
import './MainContent.css';

function MainContent() {
  const properties = [
    {
      name: "Modern Apartment",
      price: 1200,
      description: "A modern apartment with 2 bedrooms and a stunning city view.",
      image: require('./images/Visit-Rwanda-Vision-City-1920x1280.jpg') // Correct path for images inside 'Components/images' folder
    },
    {
      name: "Cozy Cottage",
      price: 850,
      description: "A cozy cottage located in a quiet neighborhood, perfect for small families.",
      image: require('./images/web_sml-4ee24fa4ad9acc5ce8d5.jpg') // Correct path for images inside 'Components/images' folder
    },
    {
      name: "Luxury Villa",
      price: 2500,
      description: "A spacious villa with a private pool and garden.",
      image: require('./images/commercial-real-estate-practice.webp') // Correct path for images inside 'Components/images' folder
    }
  ];

  return (
    <main className="main-content">
      <h2>Available Properties for Rent</h2>
      <p>Discover and find the property you want</p>
      <div className="property-list">
        {properties.map((property, index) => (
          <ProductCard 
            key={index}
            name={property.name}
            price={property.price}
            description={property.description}
            image={property.image}  // Passing image source
          />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
