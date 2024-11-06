import React, { useEffect } from "react";

const FAQ = [
  {
    faq_id: "F001",
    question: "How do I track my order?",
    answer:
      "You can track your order by going to your account's order history page and selecting the order you want to track.",
  },
  {
    faq_id: "F002",
    question: "What is the return policy?",
    answer:
      "You have 30 days to return unused items in their original packaging for a full refund. Please check our return policy page for more details.",
  },
  {
    faq_id: "F003",
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support via email at support@gadgethaven.com, by calling +1-800-123-4567, or through our live chat on the website.",
  },
  {
    faq_id: "F004",
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.",
  },
  {
    faq_id: "F005",
    question: "Can I change my shipping address after placing an order?",
    answer:
      "You can change the shipping address within 24 hours of placing the order by contacting customer support. After that, changes may not be possible.",
  },
  {
    faq_id: "F006",
    question: "Are there any warranty options for products?",
    answer:
      "Yes, most products come with a 1-year warranty. Additional warranty options are available at checkout for select items.",
  },
  {
    faq_id: "F007",
    question: "How do I cancel my order?",
    answer:
      "You can cancel your order within 24 hours of placing it. Go to your account, find the order, and select 'Cancel'. If the order has already been shipped, please contact support.",
  },
  {
    faq_id: "F008",
    question: "Why is my order delayed?",
    answer:
      "Order delays can happen due to high demand or shipping constraints. Please check your order status in the order history, or contact support for more information.",
  },
  {
    faq_id: "F009",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary depending on the destination.",
  },
  {
    faq_id: "F010",
    question: "What should I do if I receive a damaged product?",
    answer:
      "If you receive a damaged product, please contact our support team within 7 days of receiving the item. We will arrange for a replacement or refund as needed.",
  },
];

const Faq = () => {
  useEffect(() => {
    document.title = "FAQ and Support";
  }, []);
  return (
    <div>
      <div className="mx-11 flex flex-col items-center text-center space-y-6 bg-[#9538E2] h-[250px] rounded-2xl">
        <h1 className="text-5xl font-bold text-white w-[1100px] mt-14">
          FAQ and Support
        </h1>
        <p className="text-white w-[790px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="container mx-auto mt-14">
        {FAQ.map((faq) => (
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
