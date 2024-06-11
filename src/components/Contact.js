import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      rating: rating,
      message: feedback,
      reply_to: 'email-do-usuario@example.com'
    };

    emailjs.send('service_72n6zqu', 'template_tc3y516', templateParams, 'ygO9JY2vv-V2AvfGv')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Falha ao enviar mensagem.');
      });
  };

  return (
    <div className="Contact">
      <h2>Feedback</h2>
      <p>Seu Feedback é Muito Importante</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)} required>
          <option value="">Nota (0-5)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          cols="30"
          placeholder="Descreva sua experiência..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Contact;
