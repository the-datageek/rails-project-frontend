import React from "react";
import "./Contacts.css"; // Import CSS file


const contacts = [
  {
    id: 1,
    name: "Ernest Kipchumba",
    image: "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/271847244_650286522826602_207207098764189920_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGIkt7NlvQCnBftvuc0ONmt4WJHZZRKaJHhYkdllEpokSkNbAodRSmoyuVdjavMpWEk8YbfHMvnfJxYDlk4Qdc4&_nc_ohc=d-cc3LiQEhQAX-lkF4G&_nc_ht=scontent.fnbo8-1.fna&oh=00_AfC9fZ1VXAt-Lsy1EJRcvTjljsZITYAI-14xDgFsL5dr_w&oe=6428F0B0",
    details: "Frontend Developer"
  },
  {
    id: 2,
    name: "Faith Moraa",
    image: "https://i.pinimg.com/236x/0f/b9/76/0fb9764e54601ddaf201a14df9abc867.jpg",
    details: "Frontend Developer"
  },
  {
    id: 3,
    name: "Hassan Hassan",
    image: "https://i.pinimg.com/236x/df/94/84/df94842a9cc5a5b3de069f4c281a42f7.jpg",
    details: "Backend Developer"
  },
  {
    id: 4,
    name: "Faith Kigen",
    image: "https://i.pinimg.com/236x/7b/da/06/7bda060e4ecc6c0fe0a384a9341b63a4.jpg",
    details: "Backend Developer"
  }
];

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <img src={contact.image} alt={contact.name} />
      <h2>{contact.name}</h2>
      <p>{contact.details}</p>
    </div>
  );
};

const Contacts = () => {
  return (
      <div>
        <h1 className="contact-title">Contact Us</h1>
          <div className="contacts">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
   
  );
};

export default Contacts;
