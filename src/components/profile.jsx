import React from 'react';
import './pages.css';

const Profile = () => {
  return (
    <div className="">
      <section className="w-7xl h-60 m-auto my-8 text-center">
        <h1>MAASHAKTI LOGISTICS</h1>
        <p>Welcome to maa shakti logistic</p>
      </section>

      <section className="page-content">
        <div className="card">
          <h2>About Me</h2>
          <p>
            Maa shakti logistic is providind significant help in choosing the right company of reliable packers and movers that cares about your relocation requirements, with personal attention.
          </p>
        </div>
         <img src="/src/assets/tutu.jpg"  />
        <div className="card">
          <h2>Details</h2>
          <p><a href="tel:+918002722528" className='phone-link'>+918002722528</a></p>
          <p><a href="tel: +918709669804" className='phone-link'> +918709669804</a></p>
          <p><a href="mailto:rajsinghaniya14030.com" className='email-link'>rajsinghaniya14030.com</a></p>

          <p>Location: dak sthan gonawa, nawada, Bihar, India</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;