import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all our products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.",
    },
    {
      question: "Do you offer prescription lenses?",
      answer:
        "Yes, we offer prescription lenses for all our eyeglasses. You can provide your prescription details during the checkout process.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days. You will receive a tracking number once your order has been shipped.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "If you need to change your order, please contact our customer service team as soon as possible. We will do our best to accommodate your request.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping costs and delivery times will vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you a tracking number via email. You can use this to track your order on our website or the carrier's tracking page.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and other secure payment methods. You can view all available options during checkout.",
    },
    {
      question: "Do you provide warranty on your products?",
      answer:
        "Yes, we provide a 1-year warranty on all our eyewear products. If you experience any defects, please contact our support team.",
    }
  ];

  return (
    <section className="bg-white py-8 mt-20 mb-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 shadow-md mb-4">
            <h3 className="text-2xl font-bold mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
