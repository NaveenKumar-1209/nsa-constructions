import { useState } from "react";
import { GraduationCap, Heart, Users, TrendingUp, X } from "lucide-react";
import JobApplicationModal from "../components/JobApplicationModal";
import "./Careers.css";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openApplicationForm = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeApplicationForm = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const jobs = [
    {
      id: 1,
      title: "Project Manager",
      type: "Full-time",
      location: "Multiple Locations",
      experience: "5+ Years Experience",
      salary: "Competitive Salary",
      description:
        "Lead construction projects from planning to completion. Manage teams, budgets, and timelines while ensuring quality and safety standards.",
      requirements: [
        "Bachelor's degree in Construction Management or related field",
        "5+ years of construction project management experience",
        "Strong leadership and communication skills",
        "PMP certification preferred",
      ],
    },
    {
      id: 2,
      title: "Construction Supervisor",
      type: "Full-time",
      location: "Field Locations",
      experience: "3+ Years Experience",
      salary: "Competitive Salary",
      description:
        "Oversee daily construction activities, manage crews, and ensure projects meet quality and safety standards.",
      requirements: [
        "High school diploma or equivalent",
        "3+ years of construction supervision experience",
        "OSHA safety certification",
        "Strong problem-solving skills",
      ],
    },
    {
      id: 3,
      title: "Skilled Laborer",
      type: "Full-time",
      location: "Field Locations",
      experience: "1+ Years Experience",
      salary: "Competitive Hourly Rate",
      description:
        "Perform various construction tasks including framing, concrete work, and general labor duties.",
      requirements: [
        "Previous construction experience preferred",
        "Physical ability to perform construction tasks",
        "Reliable transportation",
        "Willingness to learn and follow safety protocols",
      ],
    },
    {
      id: 4,
      title: "Safety Coordinator",
      type: "Full-time",
      location: "Office & Field",
      experience: "2+ Years Experience",
      salary: "Competitive Salary",
      description:
        "Develop and implement safety programs, conduct training, and ensure compliance with safety regulations.",
      requirements: [
        "OSHA 30-hour certification",
        "2+ years of construction safety experience",
        "Strong communication and training skills",
        "Attention to detail and problem-solving abilities",
      ],
    },
  ];

  return (
    <div className="careers">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>
            Build your career with NSA Constructions - where excellence meets
            opportunity
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-with-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With NSA Constructions?</h2>
            <p>
              We offer more than just a job - we offer a career path in the
              construction industry
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <GraduationCap size={30} />
              </div>
              <h3>Professional Development</h3>
              <p>
                Continuous training and skill development opportunities to
                advance your career
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Heart size={30} />
              </div>
              <h3>Health & Safety</h3>
              <p>
                Comprehensive health benefits and safety programs to protect our
                team
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={30} />
              </div>
              <h3>Team Environment</h3>
              <p>
                Work with experienced professionals in a collaborative and
                supportive environment
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <TrendingUp size={30} />
              </div>
              <h3>Growth Opportunities</h3>
              <p>
                Clear career progression paths and opportunities for advancement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="job-openings">
        <div className="container">
          <div className="section-header">
            <h2>Current Job Openings</h2>
            <p>
              Explore our available positions and find your next career
              opportunity
            </p>
          </div>
          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-details">
                  <p>
                    <span>📍</span> {job.location}
                  </p>
                  <p>
                    <span>⏰</span> {job.experience}
                  </p>
                  <p>
                    <span>💰</span> {job.salary}
                  </p>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn btn-primary apply-btn"
                  onClick={() => openApplicationForm(job.title)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See Your Ideal Position?</h2>
            <p>
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <a href="/contact" className="btn btn-white">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {isModalOpen && (
        <JobApplicationModal
          jobTitle={selectedJob}
          onClose={closeApplicationForm}
        />
      )}
    </div>
  );
};

export default Careers;
