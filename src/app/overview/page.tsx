"use client";

const Overview = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <div className="bg-amber-200 w-full h-20 text-center text-3xl font-bold py-6">
        Overview
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Portfolio Overview</h2>

        <div>
          <h3 className="text-xl font-bold">🏠 Navigation & Header</h3>
          <ul className="list-disc list-inside">
            <li>
              Responsive Navbar with logo, navigation links, and theme toggle
            </li>
            <li>Logo Component with animated status dot</li>
            <li>Dark/Light Mode Toggle with smooth transitions</li>
            <li>Mobile-Friendly Menu with hamburger navigation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🚀 Hero Section</h3>
          <ul className="list-disc list-inside">
            <li>Dynamic Introduction with animated text and icons</li>
            <li>Professional Profile Image with floating animations</li>
            <li>Call-to-Action Buttons (Get In Touch, Download CV)</li>
            <li>Social Media Links (GitHub, LinkedIn, Email)</li>
            <li>Scroll Indicator for better UX</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">👨‍💻 About Me Section</h3>
          <ul className="list-disc list-inside">
            <li>Personal Story and professional background</li>
            <li>Technical Skills as interactive badges</li>
            <li>
              Professional Stats (50+ Projects, 3+ Years Experience, etc.)
            </li>
            <li>Download Resume Button</li>
            <li>Animated Profile Image with gradient effects</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🎯 Areas of Expertise</h3>
          <ul className="list-disc list-inside">
            <li>Frontend: React, Next.js</li>
            <li>Backend: Node.js, Express</li>
            <li>Databases: SQL, NoSQL</li>
            <li>APIs: REST, GraphQL</li>
            <li>Mobile: React Native</li>
            <li>UI/UX Design, Security, Testing, Clean Code Practices</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">💼 Projects Showcase</h3>
          <ul className="list-disc list-inside">
            <li>6 Featured Projects with filtering</li>
            <li>Categories: Web App, Mobile, API, UI/UX</li>
            <li>Interactive Filter Buttons</li>
            <li>Project Details: Description, Tech Stack, Live Demo, GitHub</li>
            <li>Hover Animations and Transitions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🛠️ Services Offered</h3>
          <ul className="list-disc list-inside">
            <li>12 Services including Web/Mobile Dev, UI/UX, APIs</li>
            <li>Code Review, SEO, Performance, Team Collaboration</li>
            <li>Technical Support & Security Solutions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">📞 Contact Section</h3>
          <ul className="list-disc list-inside">
            <li>EmailJS Integration for Gmail delivery</li>
            <li>Interactive Contact Form with validation</li>
            <li>Contact Cards: Email, Phone, Location</li>
            <li>Interactive Map (Queens, NY)</li>
            <li>Real-time Form Status & Quick Contact Buttons</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🗺️ Interactive Map</h3>
          <ul className="list-disc list-inside">
            <li>Leaflet.js with custom markers</li>
            <li>Queens, New York service area circle</li>
            <li>Custom Popup & Responsive Design</li>
            <li>Loading States and Smooth Animations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🦶 Footer</h3>
          <ul className="list-disc list-inside">
            <li>Brand Info with logo and description</li>
            <li>Quick Links to all sections</li>
            <li>Contact & Social Media</li>
            <li>Overview Button </li>
            <li>Copyright Info</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🎨 Design Features</h3>
          <ul className="list-disc list-inside">
            <li>Gradient Backgrounds, colorful accents</li>
            <li>Framer Motion animations</li>
            <li>Responsive Grid Layouts</li>
            <li>Custom Color Schemes</li>
            <li>Professional Typography (Inter font)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">💡 User Experience</h3>
          <ul className="list-disc list-inside">
            <li>Smooth Scrolling & Loading States</li>
            <li>Hover Effects & Mobile-First Design</li>
            <li>Accessibility Features</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🧠 Technical Implementation</h3>
          <ul className="list-disc list-inside">
            <li>Next.js 14 App Router</li>
            <li>TypeScript + Tailwind CSS + shadcn/ui</li>
            <li>Framer Motion, EmailJS, Leaflet.js</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🔧 Functional Features</h3>
          <ul className="list-disc list-inside">
            <li>EmailJS Integration (service_b4cishj, template_om3con9)</li>
            <li>Direct Gmail delivery</li>
            <li>Form Validation & Notifications</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🌗 Theme System</h3>
          <ul className="list-disc list-inside">
            <li>Dark/Light Mode Toggle</li>
            <li>System Theme Detection</li>
            <li>Smooth Theme Transitions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">⚡ Performance</h3>
          <ul className="list-disc list-inside">
            <li>Optimized Images (Next.js Image)</li>
            <li>Dynamic Imports</li>
            <li>Responsive Design & SEO Optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">📊 Portfolio Metrics</h3>
          <ul className="list-disc list-inside">
            <li>50+ Projects Completed</li>
            <li>3+ Years Experience</li>
            <li>20+ Happy Clients</li>
            <li>100% Success Rate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🛠 Technical Skills</h3>
          <ul className="list-disc list-inside">
            <li>
              Email:{" "}
              <a
                href="mailto:tahmina.afroz8801@gmail.com"
                className="underline text-blue-600"
              >
                tahmina.afroz8801@gmail.com
              </a>
            </li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Location: Queens, New York</li>
            <li>Response Time: 24 hours</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🚀 Key Strengths</h3>
          <ul className="list-disc list-inside">
            <li>Professional Design</li>
            <li>Fully Functional Contact Form</li>
            <li>Interactive Elements & Animations</li>
            <li>Responsive Layout on all devices</li>
            <li>Fast Performance</li>
            <li>SEO Ready</li>
            <li>Accessibility Friendly</li>
            <li>Modern Tech Stack</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">🎯 Perfect For</h3>
          <ul className="list-disc list-inside">
            <li>Freelance Developers</li>
            <li>Job Seekers in Tech</li>
            <li>Professional Networking</li>
            <li>Showcasing Technical Skills</li>
            <li>Building Personal Brand</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="bg-gray-700 text-3xl font-bold text-center text-white py-6">
          End
        </h2>
      </div>
    </div>
  );
};

export default Overview;
