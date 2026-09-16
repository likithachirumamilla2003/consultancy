"use client";

import { FormEvent, useState } from "react";

const serviceItems = [
  {
    icon: "🎓",
    title: "Profile Evaluation",
    text: "Understand your academic profile, interests and goals to identify suitable study opportunities.",
  },
  {
    icon: "🧭",
    title: "Course & University Selection",
    text: "Explore courses and universities based on your academic background, interests and future goals.",
  },
  {
    icon: "🌍",
    title: "Country Guidance",
    text: "Compare study destinations such as the USA, UK, Australia and Germany.",
  },
  {
    icon: "📋",
    title: "Application Support",
    text: "Get organized guidance throughout the university application process.",
  },
];

const destinations = [
  {
    code: "USA",
    title: "United States",
    text: "Explore universities, courses and opportunities across the United States.",
  },
  {
    code: "UK",
    title: "United Kingdom",
    text: "Discover globally recognized universities and diverse study programs.",
  },
  {
    code: "AUS",
    title: "Australia",
    text: "Explore international education opportunities in Australia.",
  },
  {
    code: "GER",
    title: "Germany",
    text: "Learn about study options and universities across Germany.",
  },
];

export default function Home() {
  const [bookingStatus, setBookingStatus] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  async function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setBookingLoading(true);
    setBookingStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      formType: "Booking / Consultation Request",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      destination: formData.get("destination"),
      studyLevel: formData.get("studyLevel"),
      preferredDate: formData.get("preferredDate"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setBookingStatus(
        "Your consultation request has been sent successfully. We will contact you soon."
      );

      form.reset();
    } catch (error) {
      console.error(error);
      setBookingStatus(
        "Unable to send your request right now. Please try again."
      );
    } finally {
      setBookingLoading(false);
    }
  }

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setContactLoading(true);
    setContactStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      formType: "Contact Inquiry",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setContactStatus(
        "Your message has been sent successfully. We will get back to you soon."
      );

      form.reset();
    } catch (error) {
      console.error(error);
      setContactStatus(
        "Unable to send your message right now. Please try again."
      );
    } finally {
      setContactLoading(false);
    }
  }

  return (
    <main>
      {/* TOP BAR */}
      <div className="topbar">
        <span>International Education Guidance</span>
        <span className="topbar-right">Study • Travel • Achieve</span>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <div className="brand-icon">✦</div>

          <div>
            <strong>Likitha&apos;s Consultancy</strong>
            <small>INTERNATIONAL EDUCATION</small>
          </div>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#booking" className="nav-button">
          Book Consultation
        </a>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR JOURNEY, SIMPLIFIED</p>

          <h1>
            Your Journey to Your
            <span>Dream University.</span>
          </h1>

          <p className="hero-text">
            From choosing the right destination and course to university
            applications and preparing for your journey, we provide
            personalized guidance at every step.
          </p>

          <div className="hero-buttons">
            <a href="#booking" className="primary-button">
              Book a Consultation
            </a>

            <a href="#services" className="secondary-button">
              Explore Services
            </a>
          </div>

          <div className="hero-features">
            <div>
              <span>01</span>
              <p>Personalized Guidance</p>
            </div>

            <div>
              <span>02</span>
              <p>Global Destinations</p>
            </div>

            <div>
              <span>03</span>
              <p>Application Support</p>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL CONSULTANT VISUAL */}
        <div className="hero-visual">
          <div className="visual-glow glow-one"></div>
          <div className="visual-glow glow-two"></div>

          <div className="consultant-card">
            <div className="consultant-background">
              <div className="person">
                <div className="person-hair"></div>

                <div className="person-head">
                  <div className="eye eye-left"></div>
                  <div className="eye eye-right"></div>
                  <div className="smile"></div>
                </div>

                <div className="person-neck"></div>

                <div className="person-body">
                  <div className="shirt"></div>
                  <div className="jacket-left"></div>
                  <div className="jacket-right"></div>
                </div>
              </div>

              <div className="laptop">
                <div className="laptop-screen">
                  <div className="screen-line"></div>
                  <div className="screen-line short"></div>
                  <div className="screen-box"></div>
                </div>

                <div className="laptop-base"></div>
              </div>
            </div>

            <div className="consultant-info">
              <p>PROFESSIONAL GUIDANCE</p>
              <h3>Your Future. Our Guidance.</h3>
              <span>
                Helping students plan their international education journey
                with clarity.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="about-grid">
          <div>
            <p className="eyebrow">YOUR JOURNEY, SIMPLIFIED</p>

            <h2>One Journey. Complete Guidance.</h2>

            <p className="section-text">
              Choosing to study abroad is a major decision. We help students
              understand their options, choose suitable courses and
              universities, prepare their applications, and move forward with
              confidence.
            </p>

            <a href="#services" className="primary-button">
              What We Do
            </a>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <div className="info-icon">🎓</div>
              <h3>Student Focused</h3>
              <p>
                Guidance based on your academic background, interests and
                goals.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🌍</div>
              <h3>Global Destinations</h3>
              <p>
                Explore study opportunities across popular international
                destinations.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📄</div>
              <h3>Application Support</h3>
              <p>
                Organized guidance throughout the university application
                process.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">💡</div>
              <h3>Clear Guidance</h3>
              <p>
                Understand your choices and move ahead with greater clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE OFFER</p>

          <h2>Complete Support for Your Study Abroad Journey</h2>

          <p>
            Practical guidance from your first consultation to your
            preparation for university life abroad.
          </p>
        </div>

        <div className="services-grid">
          {serviceItems.map((service, index) => (
            <div className="service-card" key={service.title}>
              <span className="service-number">0{index + 1}</span>

              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#booking" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="section destinations-section">
        <div className="section-heading">
          <p className="eyebrow">STUDY DESTINATIONS</p>

          <h2>Explore Your Global Options</h2>

          <p>
            Discover opportunities across some of the world&apos;s popular
            study destinations.
          </p>
        </div>

        <div className="destination-grid">
          {destinations.map((country) => (
            <div className="destination-card" key={country.code}>
              <div className="destination-image">
                <span>{country.code}</span>
              </div>

              <div className="destination-content">
                <div>
                  <h3>{country.title}</h3>
                  <p>{country.text}</p>
                </div>

                <a href="#booking" className="round-arrow">
                  →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section journey-section">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2>A Clear Path From Dream to Destination</h2>

          <p>
            We simplify the study-abroad process into clear and manageable
            steps.
          </p>
        </div>

        <div className="journey-grid">
          <div className="journey-card">
            <div className="journey-number">01</div>
            <div className="journey-icon">👤</div>
            <h3>Profile Review</h3>
            <p>Understand your academic profile and goals.</p>
          </div>

          <div className="journey-card">
            <div className="journey-number">02</div>
            <div className="journey-icon">🎯</div>
            <h3>Goal Planning</h3>
            <p>Identify suitable study paths for your future.</p>
          </div>

          <div className="journey-card">
            <div className="journey-number">03</div>
            <div className="journey-icon">🌍</div>
            <h3>Destination</h3>
            <p>Explore countries and university options.</p>
          </div>

          <div className="journey-card">
            <div className="journey-number">04</div>
            <div className="journey-icon">🎓</div>
            <h3>University</h3>
            <p>Select suitable courses and universities.</p>
          </div>

          <div className="journey-card">
            <div className="journey-number">05</div>
            <div className="journey-icon">📋</div>
            <h3>Application</h3>
            <p>Prepare and organize your application process.</p>
          </div>

          <div className="journey-card">
            <div className="journey-number">06</div>
            <div className="journey-icon">✈️</div>
            <h3>Next Step</h3>
            <p>Prepare for your journey abroad.</p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="booking-section">
        <div className="booking-card">
          <p className="eyebrow">LET&apos;S TALK</p>

          <h2>Take the First Step Toward Your Journey</h2>

          <p>
            Have questions about studying abroad? Book a consultation and
            let&apos;s discuss your goals, options and next steps.
          </p>

          <div className="booking-points">
            <div>✓ Personalized discussion</div>
            <div>✓ Course & university guidance</div>
            <div>✓ Destination planning</div>
            <div>✓ Application guidance</div>
          </div>
        </div>

        <div className="enquiry-card">
          <p className="eyebrow">BOOK A CONSULTATION</p>

          <h2>Tell Us About Your Plans</h2>

          <form onSubmit={handleBookingSubmit}>
            <div className="two-columns">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </label>
            </div>

            <div className="two-columns">
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </label>

              <label>
                Destination
                <select name="destination" defaultValue="" required>
                  <option value="" disabled>
                    Select destination
                  </option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Australia</option>
                  <option>Germany</option>
                </select>
              </label>
            </div>

            <div className="two-columns">
              <label>
                Study Level
                <select name="studyLevel" defaultValue="" required>
                  <option value="" disabled>
                    Select level
                  </option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>PhD</option>
                </select>
              </label>

              <label>
                Preferred Consultation Date
                <input type="date" name="preferredDate" />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your study-abroad plans..."
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="primary-button full-button"
              disabled={bookingLoading}
            >
              {bookingLoading ? "Sending..." : "Send Enquiry"}
            </button>

            {bookingStatus && (
              <p className="form-status">{bookingStatus}</p>
            )}
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-strip">
          <div>
            <p className="eyebrow">CONTACT US</p>

            <h2>Let&apos;s Talk About Your Future.</h2>

            <p>
              Have questions about courses, universities or study destinations?
              Get in touch with us to discuss your plans.
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <p className="eyebrow">SEND AN INQUIRY</p>

          <h2>How Can We Help You?</h2>

          <form onSubmit={handleContactSubmit}>
            <div className="two-columns">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </label>
            </div>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="primary-button full-button"
              disabled={contactLoading}
            >
              {contactLoading ? "Sending..." : "Send Inquiry"}
            </button>

            {contactStatus && (
              <p className="form-status">{contactStatus}</p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <h3>Likitha&apos;s Consultancy</h3>

            <p>
              Personalized guidance for your international education journey.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#destinations">Destinations</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4>Destinations</h4>

            <div className="footer-links">
              <a href="#destinations">United States</a>
              <a href="#destinations">United Kingdom</a>
              <a href="#destinations">Australia</a>
              <a href="#destinations">Germany</a>
            </div>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Likitha&apos;s Consultancy. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}