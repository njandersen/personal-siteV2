import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setSubmitMessage("Message sent! I'll be in touch soon.");
        setIsSubmitting(false);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setSubmitMessage("Something went wrong. Please try again.");
        setIsSubmitting(false);
        console.error(error);
      });
  };

  const inputClass =
    "w-full bg-primary-100/20 border border-primary-100/40 rounded-lg py-3 px-4 text-white font-hind placeholder-gray-500 focus:outline-none focus:border-accent-100 transition-all";

  return (
    <section className="px-8 md:px-20 lg:px-32 py-24 pb-32 relative overflow-hidden">
      {/* Ambient purple glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "400px",
          bottom: "-100px",
          left: "-100px",
          background: "radial-gradient(ellipse, rgba(76,29,143,0.2) 0%, transparent 70%)",
        }}
      />
      <h2
        id="contact"
        className="font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg px-10 py-3 inline-block mb-16 relative z-10"
        style={{ boxShadow: "0 0 20px rgba(72,133,255,0.2)" }}
      >
        Contact
      </h2>

      <form
        className="max-w-lg relative z-10"
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="mb-5">
          <label htmlFor="name" className="block font-montserrat text-gray-300 text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block font-montserrat text-gray-300 text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block font-montserrat text-gray-300 text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
            placeholder="Your message..."
            rows="5"
            required
          />
        </div>

        <div className="flex items-center gap-6">
          <button
            type="submit"
            className={`bg-accent-100 text-primary-300 font-montserrat font-bold text-base px-8 py-3 rounded-md transition-opacity ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitMessage && (
            <p className="font-hind text-gray-300 text-sm">{submitMessage}</p>
          )}
        </div>
      </form>
    </section>
  );
}
