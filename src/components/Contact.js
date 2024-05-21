import React from 'react';

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact</h2>
      <p>Entre em contato conosco aqui.</p>
      <div className="container-contact">
        <div className="post">
          <div className="text">Thanks for rating us!</div>
          <div className="edit">EDIT</div>
        </div>
        <div className="star-widget">
          <input type="radio" name="rate" id="rate-5" />
          <label htmlFor="rate-5" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-4" />
          <label htmlFor="rate-4" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-3" />
          <label htmlFor="rate-3" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-2" />
          <label htmlFor="rate-2" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-1" />
          <label htmlFor="rate-1" className="fas fa-star"></label>
          <form action="#">
            <header></header>
            <div className="textarea">
              <textarea cols="30" placeholder="Descreva sua experiência..."></textarea>
            </div>
            <div className="btn">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
