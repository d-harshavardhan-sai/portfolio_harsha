# 🌐 Harsha's Developer Portfolio – Interactive 3D Showcase
<div align="center">

<!-- 🌐 Animated Architecture Diagram -->
<img src="https://github.com/user-attachments/assets/71328918-3618-4b29-85e2-edac6fdf7716" width="250" alt="Chat App Architecture"/>

---

<!-- 🔗 QR Code -->
### 📲 Scan to visit my Portfolio
<img src="https://api.qrserver.com/v1/create-qr-code/?data=https://portfolio-harsha-three.vercel.app/&size=150x150" width="150" alt="QR Code to Live App"/>

[🔗 Click here to open](https://portfolio-harsha-three.vercel.app/)

---

<!-- ✨ Overview Description -->
<p align="center" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 1.2rem; color: #10B981; max-width: 600px; line-height: 1.6;">
  A dynamic, interactive portfolio built with <strong>React</strong>, <strong>Three.js (via @react-three/fiber)</strong>, <strong>TailwindCSS</strong>, <strong>GSAP</strong>, and <strong>EmailJS</strong>. Explore my projects, 3D models, tech skills, and achievements – all in a visually engaging format.
</p>


</div>

---
### 🚀 Features

* 🖼️ **Animated 3D Hero Section** using **Three.js** + **@react-three/fiber**
* 🧩 **Interactive Tech Stack** models with responsive hover effects
* 🧠 **GSAP Animations** powered by `ScrollTrigger` and `useGSAP`
* 💌 **Contact Form Integration** using **EmailJS** for seamless messaging
* 🌙 **Responsive UI** built using **Tailwind CSS 4** + **ShadCN / DaisyUI**
* 🎮 **3D Model Management** with **@react-three/drei** helpers
* 🔄 **Reusable Constants & Section Configs** for dynamic rendering
* 🛠️ **Component-Based Architecture** for modular development
* 📦 **Optimized Asset Loading** with **GLTFLoader** and lazy loading
* 📱 **Mobile-First Design** using **react-responsive** for adaptive layout
* 🌐 **Vite-Powered** lightning-fast development environment
* 📊 **Animated Achievement Counters** with smooth transitions
* ✨ **Custom Scroll & Transition Effects** for a rich user experience
* 🔧 **Clean Folder Structure** for components, constants, and sections
* 🧱 **3D Assets & Icons** sourced from **Sketchfab** and **IconScout**
* 💡 **Dark-Themed Design Aesthetic** with ambient lighting in 3D
* 🚀 **Deployed on [Vercel](https://vercel.com/)** for global access

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- ⚛️ React.js (with Vite)
- 🎨 Tailwind CSS v4
- 🌌 Three.js + @react-three/fiber
- 🧩 @react-three/drei (3D helpers)
- 🎞️ GSAP (ScrollTrigger + useGSAP)
- 📬 EmailJS (contact form integration)
- 📱 react-responsive

### 🧪 Development Tools
- 🧰 Visual Studio Code
- 🔍 Chrome DevTools
- 🔄 Git & GitHub (version control)
- 🚀 Vercel CLI & Dashboard

### ☁️ Deployment **[Vercel](https://vercel.com/)**
- ⚡ Instant preview deployments
- 🌍 Global CDN distribution


---

## 📄 License
This project is currently unlicensed.  
Feel free to contact me for any questions regarding usage or contributions.

---

## 🤝 Contributing
Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 📬 Contact

<p align="center">
  Created by <strong>Harshavardhan Sai Divvala</strong> — <br/><br/>
  <a href="https://portfolio-harsha-three.vercel.app/">
    <img src="https://img.shields.io/badge/-Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/d-harshavardhan-sai" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="30" style="margin-right:10px;" />
  </a>
  <a href="https://www.instagram.com/ha_darling_ha?igsh=djhlbWp4Y2p2aTU5" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" />
  </a>
</p>

<p align="center">
  — feel free to reach out!
</p>

 ---


## ⚡ Quick Start

Follow these steps to run the portfolio locally:

```bash
# 1. Clone the repository
git clone https://github.com/d-harshavardhan-sai/portfolio_harsha.git

# 2. Navigate into the project directory
cd portfolio_harsha

# 3. Install dependencies
npm install

# 4. Create a `.env` file in the root folder and add your EmailJS credentials:

VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here

# 5. Start the development server
npm run dev

# 6. Open http://localhost:5173 in your browser to see the portfolio


---

## 📁 Folder Structure (Basic Overview)

```bash
portfolio_harsha/
├── public/                      # Static assets
│   └── favicon.ico
│
├── src/                         # Main source code
│   ├── assets/                  # Images, videos, textures
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ContactForm.jsx
│   │
│   ├── constants/              # Data & config (projects, socials, etc.)
│   │   └── index.js
│   │
│   ├── sections/               # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Canvas/             # 3D Canvas elements
│   │       ├── ComputersCanvas.jsx
│   │       └── StarsCanvas.jsx
│   │
│   ├── utils/                  # Utility functions (e.g. EmailJS)
│   │   └── emailService.js
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── tailwind.config.cjs     # TailwindCSS config
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js














