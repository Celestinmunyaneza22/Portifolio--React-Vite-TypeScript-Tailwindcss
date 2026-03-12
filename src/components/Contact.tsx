import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "SERVICE_ID",
      "TEMPLATE_ID",
      form.current!,
      "PUBLIC_KEY"
    );

    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900">

      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-white p-6 sm:p-8 rounded-xl shadow-md"
        >

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;