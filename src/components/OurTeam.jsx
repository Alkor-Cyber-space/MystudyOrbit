import React from 'react'
import founder from '../assets/founder.png'
const teamData = [
    {
        id: 1,
        name: 'Taylor Reed',
        role: 'CEO & Founder',
        image: founder,
    },
    {
        id: 2,
        name: 'Taylor Reed',
        role: 'CEO & Founder',
        image: founder,
    },
    {
        id: 3,
        name: 'Taylor Reed',
        role: 'CEO & Founder',
        image: founder,
    },
    {
        id: 4,
        name: 'Taylor Reed',
        role: 'CEO & Founder',
        image: founder,
    },
]

const OurTeam = () => {
    return (
        <section className="w-full py-10 px-1 font-sans">
            <div className=" mx-auto flex flex-col items-center text-center">

                {/* Headers */}
                <p className="text-[#CA73C9] font-semibold text-xl tracking-[0.2em] uppercase ">OUR TEAM</p>
                <h2 className="text-3xl md:text-[3.5rem] font-bold text-[#594691] mb-14 leading-tight">
                    Let's Meet The Team Behind The Vision.
                </h2>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full px-7">
                    {teamData.map((member) => (
                        <div
                            key={member.id}
                            className="group relative bg-[#d0bce8] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col pt-6 cursor-pointer"
                        >
                            {/* Text Content */}
                            <div className="text-center px-3 mb-10">
                                <h3 className="text-[#2d1b46] font-bold text-sm md:text-base leading-tight mb-1">{member.name}</h3>
                                <p className="text-[#2d1b46]/70 text-[0.65rem] md:text-[0.7rem] font-medium">{member.role}</p>
                            </div>

                            {/* Member Photo Container */}
                            <div className="w-full mt-auto bg-[#5a3889] rounded-t-[3rem] flex justify-center items-end">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="relative z-10 w-[60%] h-auto object-contain object-bottom -mt-8 group-hover:scale-105 transition-transform duration-500 origin-bottom"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam
