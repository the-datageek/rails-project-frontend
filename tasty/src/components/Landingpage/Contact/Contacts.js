import React from "react";
import "./Contacts.css"; // Import CSS file


const contacts = [
  {
    id: 1,
    name: "Ernest Kipchumba",
    image: "https://i.pinimg.com/236x/ec/2c/3d/ec2c3d6d4de6e36f5db171c31b730e8a.jpg",
    details: "Frontend Developer"
  },
  {
    id: 2,
    name: "Faith Moraa",
    image: "https://i.pinimg.com/236x/d7/4f/da/d74fda5f6ff2020d7633e07dc8733edf.jpg",
    details: "Frontend Developer"
  },
  {
    id: 3,
    name: "Hassan Hassan",
    image: "https://i.pinimg.com/236x/c0/0a/8c/c00a8ca98c5a895aee9e9fd3584860ed.jpg",
    details: "Backend Developer"
  },
  {
    id: 4,
    name: "Faith Kigen",
    image: "https://i.pinimg.com/236x/2b/52/4e/2b524e336c16d5defec2f8cc532c765b.jpg",
    details: "Backend Developer"
  }
];

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <img src={contact.image} alt={contact.name} />
      <h2>{contact.name}</h2>
      <p className="contact-card-p">{contact.details}</p>
    </div>
  );
};

const Contacts = () => {
  return (
      <div>
        <h1 className="contact-title">Meet the Team</h1>
          <div className="contacts">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
   
  );
};

export default Contacts;
