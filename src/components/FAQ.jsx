import React, { useState } from 'react';

const faqData = [
    {
        question: "What is MyStudyOrbit?",
        answer: "MyStudyOrbit is a global one-to-one online tuition platform connecting students with qualified tutors through personalized live online classes."
    },
    {
        question: "How are the classes conducted?",
        answer: "All classes are conducted online through Google Meet or Zoom, allowing students to learn from anywhere in the world."
    },
    {
        question: "Which curricula do you support?",
        answer: "We provide tutoring for multiple curricula, including CBSE, IB, UK, IGCSE, and other international education systems."
    },
    {
        question: "Is MyStudyOrbit suitable for international students?",
        answer: "Yes. MyStudyOrbit is designed for students worldwide, with flexible scheduling to accommodate different time zones."
    },
    {
        question: "How are tutors assigned?",
        answer: "Tutors are assigned based on the student's selected subject, preferred class schedule, and tutor availability to ensure personalized one-to-one learning."
    },

    {
        question: "Can I choose my preferred class timing?",
        answer: "Yes. Students can choose their preferred class schedule, and we will match them with an available tutor."
    },
    {
        question: "How can I become a tutor?",
        answer: "Visit the 'Become a Tutor' page and submit your application. Our team will review your qualifications and contact you if you meet our requirements."
    },
];
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="w-full bg-white py-16 px-6 font-sans rounded-[3rem]">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center">

                {/* Headers */}
                <p className="text-[#CA73C9] font-semibold text-lg md:text-xl tracking-widest uppercase mb-2">FAQ</p>
                <h2 className="text-3xl md:text-[2.8rem] font-bold text-[#594691] mb-12 text-center leading-tight">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Accordion */}
                <div className="w-full flex flex-col gap-3">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="w-full border border-[#d8d3e6] rounded-[0.5rem] transition-all duration-300 overflow-hidden cursor-pointer bg-white"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center px-5 py-4">
                                    <h4 className="font-semibold text-sm md:text-[0.95rem] text-[#2d1b46]">
                                        {faq.question}
                                    </h4>
                                    <span className="text-2xl text-[#2d1b46] font-medium leading-none ml-4">
                                        {isOpen ? '-' : '+'}
                                    </span>
                                </div>

                                <div
                                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-gray-600 text-[0.85rem] md:text-[0.9rem] leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
