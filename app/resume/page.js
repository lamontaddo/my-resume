'use client'
import styles from './resume.module.css'; // assuming you have a CSS module for styling
import Title from '../components/Title';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { container,item } from './animations';


export default function Resume() {
let [activeId, setActiveId] = useState()

  return (
    <div className={styles.resumeContainer}>
      <header className={styles.header}>
        <h1 className={styles.text}>Lamont Addo</h1>
        <h2>Full-Stack MERN Developer</h2>
        <p className={styles.contactInfo}>
          📍 Baltimore, MD | 📧 lamontaddo85@gmail.com | 📞 202-386-1988
        </p>
        <p className={styles.contactInfo}>
          🌐 <a href="/" target="_blank" rel="noopener noreferrer">lamontaddo.com</a> | 💼 <a href="https://www.linkedin.com/in/lamont-addo" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 💻 <a href="https://github.com/lamontaddo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </header>

      <section className={styles.section}>

        
      <Title id={1} title='🧠 Summary ' className={styles.text} isActiveId={activeId} handleActive={(id)=>setActiveId(id)} >
        <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
        <p className={styles.text}>
          Self-motivated and highly adaptable MERN stack developer with hands-on experience building responsive, full-stack web applications. Skilled in crafting dynamic user interfaces with React, architecting secure APIs with Node.js and Express, and managing complex data flows using MongoDB. Passionate about clean code, performance, and delivering seamless user experiences. Actively working on professional-grade applications under NDA.
        </p>

        </motion.div>

        </Title>
        
      </section>

      <section className={styles.section}>


        <Title id={2} title='🛠️ Tech Stack ' className={styles.text} isActiveId={activeId} handleActive={(id)=>setActiveId(id)}>
        <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
       <motion.ul
  className={styles.techStack}
  variants={container}
  initial="hidden"
  animate="show"
>
<motion.li variants={item} className={styles.text}>
  <strong>Frontend:</strong> React, Redux, React Router, Tailwind CSS, Bootstrap,Next.js
</motion.li>

<motion.li variants={item} className={styles.text}>
  <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT,OAuth
</motion.li>

<motion.li variants={item} className={styles.text}>
  <strong>Database:</strong> MongoDB, Mongoose,SQLite
</motion.li>

<motion.li variants={item} className={styles.text}>
  <strong>Dev Tools:</strong> Git, GitHub, Postman, VS Code, Vite
</motion.li>

<motion.li variants={item} className={styles.text}>
  <strong>Other:</strong> Firebase, AWS S3, GraphQL (familiar), Socket.io (basic),OpenAI API
</motion.li>

</motion.ul>

        </motion.div>
        </Title>
       
      </section>

      <section className={styles.section}>
  <Title
    id={3}
    title="💼 Professional Experience"
    className={styles.text}
    isActiveId={activeId}
    handleActive={(id) => setActiveId(id)}
  >
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <h4 className={styles.text}>Full-Stack Web Developer (NDA Project)</h4>
      <p className={styles.text}>Client Confidential – Remote | Jan 2021 – Present</p>
      <motion.ul
        className={styles.techStack}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={item} className={styles.text}>Collaborated on a high-level web application for a startup, utilizing the full MERN stack.</motion.li>
        <motion.li variants={item} className={styles.text}>Developed scalable backend APIs with Express.js and MongoDB.</motion.li>
        <motion.li variants={item} className={styles.text}>Designed modular React components and implemented dynamic routes using React Router.</motion.li>
        <motion.li variants={item} className={styles.text}>Implemented authentication using JWT and role-based access control.</motion.li>
        <motion.li variants={item} className={styles.text}>Participated in sprint planning and Git-based version control with remote teams.</motion.li>
      </motion.ul>

      <h4 className={styles.text}>Freelance Full-Stack Developer (Fiverr)</h4>
      <p className={styles.text}>Remote | Ongoing since 2022</p>
      <motion.ul
        className={styles.techStack}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={item} className={styles.text}>Delivered full-stack web solutions to small business clients using React, Express.js, and MongoDB.</motion.li>
        <motion.li variants={item} className={styles.text}>Built custom dashboards, authentication flows, and RESTful APIs tailored to client needs.</motion.li>
        <motion.li variants={item} className={styles.text}>Provided fast turnarounds and clear communication, resulting in 5-star reviews and repeat clients.</motion.li>
      </motion.ul>
    </motion.div>
  </Title>
</section>


      <section className={styles.section}>
        <Title id={4} title='📂 Projects ' className={styles.text} isActiveId={activeId} handleActive={(id)=>setActiveId(id)}>
        <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={styles.project}
        >
        
          <h4 className={styles.text}>DevConnect</h4>
          <p className={styles.text}><strong>Social network platform for developers</strong></p>
          <p className={styles.text}>GitHub: <a href="https://github.com/lamontaddo/devconnect" target="_blank" rel="noopener noreferrer">github.com/lamontaddo/devconnect</a></p>
          <p className={styles.text}>Built a fully functional social media app with user auth, profile creation, and posts. Used MongoDB for user data, Node/Express for the backend, and React with Redux on the frontend.</p>
        </motion.div>
        <div className={styles.project}>
          <h4 className={styles.text}>TaskFlow</h4>
          <p className={styles.text}><strong>Kanban-style productivity tracker</strong></p>
          <p className={styles.text}>GitHub: <a href="https://github.com/lamontaddo/taskflow" target="_blank" rel="noopener noreferrer">github.com/lamontaddo/taskflow</a></p>
          <p className={styles.text}>Users can create boards, add tasks, and track progress using drag-and-drop. Real-time updates implemented with Socket.io; styled with Tailwind.</p>
        </div>
        <div className={styles.project}>
          <h4 className={styles.text}>Portfolio Site</h4>
          <p className={styles.text}><strong>Personal developer portfolio</strong></p>
          <p className={styles.text}>Live: <a href="https://lamontaddo.com" target="_blank" rel="noopener noreferrer">lamontaddo.com</a></p>
          <p className={styles.text}>Built with React and hosted on Heroku; fully responsive and animated using Framer Motion. Showcases projects, contact form, and integrates GitHub and LinkedIn.</p>
        </div>
        </Title>
        
      </section>

      <section className={styles.section}>
        <Title id={5} title='🎓 Education  ' className={styles.text} isActiveId={activeId} handleActive={(id)=>setActiveId(id)}>
        <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >


<p className={styles.text}>Attended Coppin State University – Studied Computer Science</p>
<p className={styles.text}>Self-taught developer and ongoing learner with a strong foundation in software development. Completed multiple online courses in React, Node.js, and full-stack development. Continuously expanding skills through hands-on projects and open-source contributions.</p>

        </motion.div>
        </Title>
      </section>
      

      <section className={styles.section}>
        <Title id={6} title='🏆 Certifications   ' className={styles.text} isActiveId={activeId} handleActive={(id)=>setActiveId(id)}>
        <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >

        <ul className={styles.text}>
          <li className={styles.text}>Frontend Developer Career Path – Codecademy</li>
          <li className={styles.text}>MongoDB Basics – MongoDB University</li>
        </ul>
        </motion.div>
        
        </Title>
      </section>

      <section className={styles.section}>
        <Title id={7} title='💬 Soft Skills  ' className={styles.text} isActiveId={activeId} handleActive={(id)=>setActiveId(id)}>
        <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >

        <p className={styles.text}>Detail-Oriented • Problem Solver • Team Collaboration • Agile Workflow • Clear Communicator</p>
        </motion.div>

        </Title>
      </section>
    </div>
  );
}
