import React from 'react';
import omkarImage from '../images/omkar.jpg';
import vedant1 from '../images/vedanr.jpg'
import rohit1 from '../images/rohit.jpg'



const founders = [
  {
    name: 'Omkar Deshmukh',
    role: 'Front-end & Back-end Team',
    image: omkarImage// Replace with actual image file
  },
  {
    name: 'Rohit Baviskar',
    role: 'Front-end Team',
    image: rohit1, // Replace with actual image file
  },
  {
    name: 'Vedant Dapolikar',
    role: 'Front-end Team',
    image: vedant1, // Replace with actual image file
  },



];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

