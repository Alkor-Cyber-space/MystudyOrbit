import React, { useState } from 'react'
import heroBg from '../assets/background2.png'

const BecomeATutor = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '', email: '', subject: '', qualifications: '', 
        phone: '', dob: '', state: '', country: '', languages: '', bio: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "9cdcec0e-4637-4e1d-8973-97d0f8448ad4", // Replace with your Web3Forms Access Key
                    subject: "New Teacher Enquiry from MyStudyOrbit",
                    from_name: "MyStudyOrbit Platform",
                    ...formData
                }),
            });
            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="become-tutor" className="w-full font-sans">
            <div className="mx-auto p-4 sm:p-8 md:p-12 lg:p-15">
                {/* Banner Card */}
                <div className="relative w-full rounded-[2rem] overflow-hidden flex flex-col items-center justify-end pb-7 md:pb-10 text-center h-[85vh] md:h-[90vh]">

                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src={heroBg} alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Gradient Overlay Box containing text */}
                    <div className="relative z-20 w-[95%] md:w-[90%] max-w-[1200px] bg-[#6D49B199] rounded-[1.5rem] md:rounded-[2rem] px-4 py-8 md:px-6 md:py-10 flex flex-col items-center justify-end bottom-0">
                        <p className="text-white font-medium text-xl md:text-2xl mb-2">Become A Tutor</p>
                        <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-white mb-3 leading-tight">
                            Share Your Knowledge. Inspire The Future.
                        </h2>
                        <p className="text-white text-[0.95rem] md:text-md max-w-[550px] leading-relaxed mb-8">
                            Join our community of expert tutors, teach passionate learners, and build a rewarding career on your schedule.
                        </p>
                        <button onClick={() => setIsModalOpen(true)} className="bg-white/70 text-[#6230AB] font-semibold text-[0.9rem] md:text-base px-8 py-3 md:px-10 md:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            Start Teaching Today
                        </button>
                    </div> 
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4 transition-opacity duration-300">
                    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-300 text-left">
                        <button 
                            onClick={() => {
                                setIsModalOpen(false);
                                setTimeout(() => setIsSubmitted(false), 300); // Reset after modal closes
                            }}
                            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-4 md:py-10 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#4c3977] mb-2 md:mb-4">Application Submitted!</h3>
                                <p className="text-gray-600 text-[0.95rem] md:text-lg mb-6 md:mb-8 max-w-md mx-auto">
                                    Thank you for your interest in joining MyStudyOrbit. Our team will review your application and get back to you shortly.
                                </p>
                                <button 
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setTimeout(() => setIsSubmitted(false), 300);
                                    }} 
                                    className="bg-[#784BE4] text-white font-semibold text-[1rem] md:text-lg py-2.5 px-8 md:py-3 md:px-10 rounded-xl hover:bg-[#6230AB] transition-colors duration-300 shadow-md"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-[#4c3977] mb-6">Teacher Enquiry</h3>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Full Name</label>
                                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Alexandra Smith" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="alex@example.com" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Subject Expertise</label>
                                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Mathematics, Physics" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Qualifications</label>
                                        <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="e.g. Masters in Education, Ph.D." className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Date of Birth</label>
                                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">State/Province</label>
                                        <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="e.g. California" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Country</label>
                                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="e.g. United States" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5 md:col-span-2">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Languages Known</label>
                                        <input type="text" name="languages" value={formData.languages} onChange={handleChange} placeholder="e.g. English, Spanish, French" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                                    </div>
                                    <div className="flex flex-col gap-1.5 md:col-span-2">
                                        <label className="text-[0.85rem] font-semibold text-gray-500">Short Professional Bio</label>
                                        <textarea rows="3" name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us about your teaching experience..." className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700 resize-none" required></textarea>
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#784BE4] text-white font-semibold text-lg py-3 rounded-xl mt-2 hover:bg-[#6230AB] transition-colors duration-300 shadow-md md:col-span-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default BecomeATutor
