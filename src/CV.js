import React from 'react';
import './CV.css';
import CVPdf from './assets/Robert_Hayward_CV.pdf';

const CV = () => {
  return (
    <div className="cv-container">

      <div className="cv-content">
        <div className="cv-left-column">
          <div className="cv-section">
            <h3 className="cv-section-title">Details</h3>
            <p>London</p>
            <p>07540841820</p>
            <p>hayward.m.rob@gmail.com</p>
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Skills</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Django</li>
              <li>React</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Bootstrap</li>
              <li>PostgreSQL</li>
              <li>GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Communication skills</li>
              <li>Teamwork</li>
              <li>Problem-solving</li>
              <li>Attention to detail</li>
            </ul>
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Hobbies</h3>
            <ul>
              <li>Teaching Jiu-Jitsu</li>
              <li>Climbing</li>
              <li>Studying</li>
              <li>Gaming</li>
            </ul>
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Download CV</h3>
            <a href={CVPdf} download="Robert_Hayward_CV.pdf" className="cv-download-link">
              Download PDF
            </a>
          </div>
        </div>

        <div className="cv-right-column">
          <div className="cv-section">
            <h3 className="cv-section-title">Profile</h3>
            <p>
              Driven by a passion for impactful technology, I'm a junior Python developer
              transitioning from a successful coaching career. I've engineered solutions such
              as a decentralised dictionary, retro 2D game, data collection tools, voting, and
              discussion platforms. Proficient in React, Django, PostgreSQL, and D3.js, I focus on
              secure authentication, dynamic interactions, and custom visualisations. Successfully
              deployed portfolio sites and passwordless systems on AWS using Docker, WebAuthn,
              and JWT, enhancing security and user experience.
            </p>
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Employment History</h3>
            <h4>Personal Coach, Self Employed, London</h4>
            <p className="cv-date">2012 — Present</p>
            <ul>
              <li>Delivered high-quality coaching services, achieving high client satisfaction</li>
              <li>Fostered strong client relationships, leading to increased retention and referrals</li>
              <li>Demonstrated exceptional leadership, teamwork, and problem-solving skills, consistently meeting and exceeding goals</li>
            </ul>

            <h4>The Essential Strength Team London (TEST), Self Employed, London</h4>
            <p className="cv-date">2010 — 2012</p>
            <ul>
              <li>Founded a successful strength and conditioning group, building a strong community and client base</li>
              <li>Managed a personal training studio, leading trainers to consistently achieve client goals and high satisfaction</li>
              <li>Developed and implemented marketing strategies, increasing client acquisition and studio revenue</li>
            </ul>

            <h4>Master Trainer / Team Manager, Virgin Active, London</h4>
            <p className="cv-date">2006 — 2009</p>
            <ul>
              <li>Led a team of 20-40 trainers, consistently exceeding revenue targets</li>
              <li>Improved trainers' technical skills and business acumen through targeted training sessions</li>
              <li>Managed strategic and daily operations, ensuring smooth business functioning</li>
              <li>Enhanced satisfaction and retention with effective customer service strategies</li>
            </ul>
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Education</h3>
            <h4>PCAP – Certified Associate in Python Programming, Python Institute</h4>
            <p className="cv-date">2024 — Present</p>

            <h4>Introduction to Computer Science and Programming, MIT OpenCourseWare</h4>
            <p className="cv-date">2024 — Present</p>

            <h4>PCEP – Certified Entry-Level Python Programmer, Python Institute</h4>
            <p className="cv-date">2024 — 2024</p>

            <h4>100 Days of Python, Udemy</h4>
            <p className="cv-date">2022 — 2023</p>

            <h4>BSc (Hons), Sport & Exercise Science, University of Birmingham</h4>
            <p className="cv-date">2002 — 2005</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;