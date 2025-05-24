import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://chat-app-3l00.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/chat_app.jpg" alt="Chat App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>📱 Chat App – Realtime Messaging with Style</h2>
              <p className="text-white-50 md:text-xl">
                A real-time chat application built using the ⚛️ MERN Stack,
                Socket.IO, TailwindCSS, and DaisyUI.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://yummora-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/yummora.jpg" alt="Multi-Vendor Restaurant Platform" />
                </a>
              </div>
              <h2>🍽️ Yummora – Multi-Vendor Restaurant Platform(⚛️MERN)</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://todolistapp-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/todolist.jpg" alt="Todo List App" />
                </a>
              </div>
              <h2>📝 TodoList App – MERN Stack Task Manager(⚛️MERN)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
