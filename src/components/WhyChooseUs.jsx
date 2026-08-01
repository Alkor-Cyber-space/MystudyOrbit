import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import image1 from "../assets/image3.png";
import image2 from "../assets/image4.png";
import image3 from "../assets/image5.png";
import image4 from "../assets/image6.png";
import image5 from "../assets/image7.png";
import image6 from "../assets/image8.png";
import capImg from "../assets/cap 1.png";
import penImg from "../assets/pen.png";
import fileImg from "../assets/file.png";
import book1Img from "../assets/book 1.png";
import book2Img from "../assets/book 2.png";
import calender from "../assets/Calender.png";

const featuresData = [
  {
    id: 1,
    title: "Expert Global Tutors",
    description: "Learn from qualified tutors across multiple curricula with personalized one-to-one online learning.",
    image: image1
  },
  {
    id: 2,
    title: "Flexible Scheduling",
    description: "Choose class times that fit your schedule. Our team assigns the right tutor based on subject expertise and availability.",
    image: image2

  },
  {
    id: 3,
    title: "Personalized Curriculum",
    description: "Customized learning plans designed around each student's curriculum, learning pace, and academic goals.",
    image: image3

  },
  {
    id: 4,
    title: "Homework & Progress Tracking",
    description: "Access assignments, notes, chapter progress, attendance, and teacher feedback—all in one place.",
    image: image4

  },
  {
    id: 5,
    title: "One-to-One Learning",
    description: "Every student receives individual attention through dedicated live sessions with experienced tutors.",
    image: image5

  },
  {
    id: 6,
    title: "Dedicated Student Support",
    description: "Our team is committed to helping students throughout their learning journey by providing guidance, scheduling assistance, and responsive support whenever needed.",
    image: image6
  }
];

const floatingIcons = [
  // Left side
  { id: 1, img: capImg, className: 'top-[15%] left-[8%] w-20 md:w-28', startY: 400, endY: -200 },
  { id: 2, img: penImg, className: 'top-[32%] left-[38%] w-16 md:w-20', startY: 600, endY: -300 },
  { id: 3, img: fileImg, className: 'top-[80%] left-[10%] w-20 md:w-28', startY: 400, endY: -200 },
  // Right side
  { id: 4, img: calender, className: 'top-[15%] right-[8%] w-24 md:w-32', startY: 500, endY: -250 },
  { id: 5, img: book1Img, className: 'top-[55%] right-[35%] w-24 md:w-32', startY: 700, endY: -350 },
  { id: 6, img: book2Img, className: 'top-[95%] right-[15%] w-16 md:w-24', startY: 600, endY: -300 },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);

  return (
    <section ref={sectionRef} className="bg-[#FFFFFF] w-full font-sans rounded-b-[3rem] relative overflow-clip">
      
      {/* Sticky Text Reveal Section */}
      <div ref={stickyRef} className="h-[250vh] w-full relative">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center max-w-[1200px] mx-auto px-6 text-center z-10">

          {/* Floating Background Icons */}
          {floatingIcons.map((item) => (
            <ParallaxIcon key={item.id} item={item} containerRef={stickyRef} />
          ))}

          <ScrollRevealText
            text="Why Choose Us"
            className="font-semibold text-2xl mb-4 relative z-10 flex flex-wrap justify-center"
            progressTargetRef={stickyRef}
            progressRange={[0, 0.1]}
            lightColor="#ebd5f0"
            darkColor="#b871d6"
          />

          <ScrollRevealText
            text="A Smarter Way To Learn, Built Around You"
            className="text-3xl md:text-[3.25rem] font-bold mb-8 leading-[1.15] relative z-10 flex flex-wrap justify-center gap-x-[0.25em]"
            splitWords={true}
            progressTargetRef={stickyRef}
            progressRange={[0.1, 0.4]}
            lightColor="#e4e1eb"
            darkColor="#4c3977"
          />

          <ScrollRevealParagraph
            className="text-xl md:text-[2.1rem] leading-[1.8] max-w-[1000px] relative z-10 font-medium"
            progressTargetRef={stickyRef}
            progressRange={[0.4, 0.9]}
            lightColor="#e5e7eb"
            darkColor="#374151"
            tokens={[
              { type: 'text', content: 'Every feature of MyStudyOrbit is designed with one' },
              { type: 'badge', content: 'goal:', className: 'px-3  rounded-xl border border-gray-200 shadow-sm mx-1.5 inline-block', lightColor: '#e5e7eb', darkColor: '#1f2937', lightBg: 'rgba(243, 244, 246, 0.2)', darkBg: 'rgba(243, 244, 246, 0.8)' },
              { type: 'text', content: 'your' },
              { type: 'badge', content: 'Success.', className: 'px-3  rounded-xl border border-gray-200 shadow-sm mx-1.5 inline-block', lightColor: '#e5e7eb', darkColor: '#1f2937', lightBg: 'rgba(243, 244, 246, 0.2)', darkBg: 'rgba(243, 244, 246, 0.8)' },
              { type: 'text', content: 'From expert tutors to real-time' },
              { type: 'badge', content: 'Progress', className: 'px-3  rounded-xl shadow-sm mx-1.5 inline-block', lightColor: '#e5e7eb', darkColor: '#ffffff', lightBg: '#d1d5db', darkBg: '#5a5a5a' },
              { type: 'text', content: 'tracking, we\'ve thought of everything.' }
            ]}
          />
        </div>
      </div>

      <div className="mx-auto my-16 max-w-[1200px] relative z-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] bg-[#FFFFFF]  overflow-hidden">

          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white px-3 py-3 flex flex-col items-center text-center hover:bg-gray-50/80 transition-colors border border-gray-300 shadow-lg rounded-2xl"
            >
              <h3 className="text-[1.7rem] font-bold text-[#b871d6] mb-1">{feature.title}</h3>
              <div className="w-42 h-32 bg-[#f8f9fa] rounded-xl mb-3 flex items-center justify-center text-gray-400 text-sm border border-gray-100 shadow-sm">

                <img src={feature.image} className="object-contain " alt={feature.title} />
              </div>
              <p className="text-gray-800 text-xl leading-[1.3]">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>

  )
}

const ScrollRevealText = ({ text, className, progressTargetRef, progressRange = [0, 1], lightColor, darkColor }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: progressTargetRef || containerRef,
    offset: progressTargetRef ? ["start start", "end end"] : ["start 85%", "end 45%"]
  });

  const words = text.split(" ");
  const totalLetters = text.replace(/\s/g, "").length;

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const previousWordsLength = words.slice(0, wordIndex).join("").length;
        
        return (
          <span key={wordIndex} className="inline-block mr-[0.25em] last:mr-0">
            {word.split("").map((char, charIndex) => {
              const charGlobalIndex = previousWordsLength + charIndex;
              const localStart = charGlobalIndex / totalLetters;
              const localEnd = localStart + (1 / totalLetters);
              
              const globalStart = progressRange[0] + localStart * (progressRange[1] - progressRange[0]);
              const globalEnd = progressRange[0] + localEnd * (progressRange[1] - progressRange[0]);

              return (
                <Letter key={charIndex} char={char} progress={scrollYProgress} range={[globalStart, globalEnd]} lightColor={lightColor} darkColor={darkColor} />
              )
            })}
          </span>
        )
      })}
    </div>
  )
}

const Letter = ({ char, progress, range, lightColor, darkColor }) => {
  const color = useTransform(progress, range, [lightColor, darkColor]);
  return (
    <motion.span style={{ color }}>
      {char}
    </motion.span>
  )
}

const ScrollRevealParagraph = ({ tokens, className, progressTargetRef, progressRange = [0, 1], lightColor, darkColor }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: progressTargetRef || containerRef,
    offset: progressTargetRef ? ["start start", "end end"] : ["start 85%", "end 55%"]
  });

  let totalLetters = 0;
  tokens.forEach(token => {
    totalLetters += token.content.replace(/\s/g, "").length;
  });

  return (
    <p ref={containerRef} className={className}>
      {tokens.map((token, tokenIndex) => {
        const previousTokensLength = tokens.slice(0, tokenIndex).reduce((acc, t) => acc + t.content.replace(/\s/g, "").length, 0);

        if (token.type === 'text') {
          const words = token.content.trim().split(/\s+/);
          return (
            <React.Fragment key={tokenIndex}>
              {words.map((word, wordIndex) => {
                const previousWordsLength = words.slice(0, wordIndex).join("").length;
                
                return (
                  <React.Fragment key={wordIndex}>
                    <span className="inline-block">
                      {word.split("").map((char, charIndex) => {
                        const charGlobalIndex = previousTokensLength + previousWordsLength + charIndex;
                        const localStart = charGlobalIndex / totalLetters;
                        const localEnd = localStart + (1 / totalLetters);
                        
                        const globalStart = progressRange[0] + localStart * (progressRange[1] - progressRange[0]);
                        const globalEnd = progressRange[0] + localEnd * (progressRange[1] - progressRange[0]);

                        return (
                          <Letter key={charIndex} char={char} progress={scrollYProgress} range={[globalStart, globalEnd]} lightColor={lightColor} darkColor={darkColor} />
                        );
                      })}
                    </span>
                    {wordIndex < words.length - 1 && " "}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        } else if (token.type === 'badge') {
          const badgeLength = token.content.length;
          const localStart = previousTokensLength / totalLetters;
          const localEnd = (previousTokensLength + badgeLength) / totalLetters;
          
          const globalStart = progressRange[0] + localStart * (progressRange[1] - progressRange[0]);
          const globalEnd = progressRange[0] + localEnd * (progressRange[1] - progressRange[0]);

          return (
            <ScrollRevealBadge 
              key={tokenIndex} 
              className={token.className} 
              progress={scrollYProgress} 
              range={[globalStart, globalEnd]}
              lightColor={token.lightColor || lightColor}
              darkColor={token.darkColor || darkColor}
              lightBg={token.lightBg}
              darkBg={token.darkBg}
            >
              {token.content}
            </ScrollRevealBadge>
          );
        }
      })}
    </p>
  );
};

const ScrollRevealBadge = ({ children, progress, range, className, lightColor, darkColor, lightBg, darkBg }) => {
  const color = useTransform(progress, range, [lightColor, darkColor]);
  const backgroundColor = useTransform(progress, range, [lightBg, darkBg]);
  return (
    <motion.span style={{ color, backgroundColor }} className={className}>
      {children}
    </motion.span>
  );
};

const ParallaxIcon = ({ item, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [item.startY, item.endY]);
  // Fade in at the start, fade out at the end, so they don't abruptly appear
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={`absolute hidden md:flex items-center justify-center z-0 pointer-events-none ${item.className}`}
    >
      <img
        src={item.img}
        alt="Decorative icon"
        className="w-full h-auto object-contain drop-shadow-xl"
      />
    </motion.div>
  );
};

export default WhyChooseUs
