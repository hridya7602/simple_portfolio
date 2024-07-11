import React from 'react';
import Theme from './Theme.js';

export default function App() {
  document.body.classList.add("bg-stone-300", "dark:bg-zinc-950");
  return (
    <div className="h-screen flex items-center lg:ml-52">
      <div>
        <div className="lg:flex lg:items-center">
          <div className="lg:mt-0 inline-grid text-center lg:text-left w-full gap-3 lg:gap-1">
            <p className="mt-20 md:mt-0 text-6xl font-mono font-bold text-black dark:text-white">Hridya Harshan</p>
            <div className="inline-grid lg:flex lg:items-center gap-3">
              <p className="font-mono text-black dark:text-white">
                <a className="hover:font-semibold" href="https://www.linkedin.com/in/hridya-harshan-336646225"><u>LinkedIn</u></a> // 
                <a className="hover:font-semibold" href="https://github.com/hridya7602"><u>Github</u></a> // 
                <a className="hover:font-semibold" href="mailto:hridyaharshan@gmail.com"><u>Contact</u></a> // 
                <a className="hover:font-semibold" href="https://drive.google.com/file/d/1DT50XRtAH7fj7xrK20lXLINhSnHBg3FQ/view?usp=sharing"><u>Resume</u></a>
              </p>
              <Theme />
            </div>
            <div className="inline-grid lg:flex lg:items-center gap-3">
              <p className="font-mono text-sm text-black dark:text-white">Java • Computer Vision • MERN • SQL • Machine Learning</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start mx-12 lg:mx-0 mt-10 lg:w-5/6">
          <p className="lg:mb-5 text-center lg:text-left text-md lg:text-xl font-mono font-medium text-black dark:text-white">
          I am Hridya Harshan, a final year student at Cochin University of Science and Technology (CUSAT) in Computer Science Engineering. I am also working as a project intern at NIT Calicut. I am passionate about my field and dedicated to advancing my skills in computer science and engineering. My interests include data engineering, artificial intelligence, and computer vision, and I am always eager to learn and take on new challenges. I strive to contribute meaningfully to the projects I work on and am committed to continuous improvement and innovation.


          </p>
        </div>
      </div>
    </div>
  );
}

