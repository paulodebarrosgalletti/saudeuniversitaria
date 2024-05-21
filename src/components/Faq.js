import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Contact() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: 'Quem somos?',
      answer: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.',
    },
    {
      question: 'Da onde surgiu essa ideia?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.',
    },
    {
      question: 'como funciona?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.',
    },
    {
      question: 'o serviço é pago?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.',
    },
    {
      question: 'é só para jovens?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.',
    },
    {
      question: 'De onde é',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.',
    },
    
  ];

  return (
    <React.Fragment>
      <div className="wrapper">
        {faqData.map((faq, index) => (
          <div className="faq" key={index}>
            <button
              className={`accordion ${activeAccordion === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <FontAwesomeIcon icon="fa-solid fa-window-minimize" />
            </button>
            <div className={`pannel ${activeAccordion === index ? 'active' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
    </React.Fragment>
  );
}

export default Contact;
