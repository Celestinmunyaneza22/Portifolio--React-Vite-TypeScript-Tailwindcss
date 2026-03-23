import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        form.current!,
        "PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          alert(" Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          alert(" Failed to send message. Please try again.");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <motion.h2
          className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 mb-8">
          Have a project or opportunity? Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="text-center text-gray-300 mb-8 space-y-1">
          <p>Email: <span className="text-blue-400">munezacelestin@email.com</span></p>
          <p>Location: Kigali, Rwanda</p>
        </div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-gray-400">
          <a
            href="https://github.com/Celestinmunyaneza22"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/munyaneza-celestin-7b34b5123/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;