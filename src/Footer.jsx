import { useState } from "react";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-black">
      <section id="connect" className="border-2 border-cyan-400 p-6 max-w-xl mx-auto rounded-lg">
        <div className="text-white">
          <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>

          <form
            action="https://formspree.io/f/mabcdxyz" // <-- Replace with your real Formspree endpoint
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 border-2 border-cyan-400 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 border-2 border-cyan-400 rounded-md"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-2 border-2 border-cyan-400 rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-cyan-400 rounded-md transition-all hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Send Message
              </button>
            </div>

            {submitted && (
              <p className="text-sm text-green-400 mt-4 text-center">
                Your message has been sent!
              </p>
            )}
          </form>
        </div>
      </section>

      <div className="footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p className="text-cyan-400">© {new Date().getFullYear()} - All rights reserved by SAMIUR RAHMAN</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
