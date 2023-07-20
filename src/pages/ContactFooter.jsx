/* eslint-disable react/no-unknown-property */
import { useState } from "react";

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Send form data to server or API
  };
  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <h2
        id="contact"
        className="px-10 py-3 font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg"
      >
        Connect
      </h2>
      <form
        className="mt-14 w-full max-w-md"
        onSubmit={handleSubmit}
        method="POST"
        netlify
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-200 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-200 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-secondary-100 hover:bg-secondary-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
