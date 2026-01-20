import React, { useState } from "react";

function Contact({ USER }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const nameHasNumbers = /\d/.test(trimmedName);
    const nameParts = trimmedName.split(" ").filter(Boolean);
    const emailRegexCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setFeedback("Full name is required.");
      return;
    }
    if (nameHasNumbers) {
      setFeedback("Name cannot contain numbers.");
      return;
    }
    if (nameParts.length < 2) {
      setFeedback("Please enter both your first name and surname.");
      return;
    }
    if (trimmedName.length > 50) {
      setFeedback("Full name cannot exceed 50 characters.");
      return;
    }
    if (nameParts.some(part => part.length > 25)) {
      setFeedback("Each part of the name must be 25 characters or less.");
      return;
    }
    if (!emailRegexCheck) {
      setFeedback("Enter a valid email address.");
      return;
    }
    if (!trimmedMessage) {
      setFeedback("Message cannot be empty.");
      return;
    }
    if (trimmedMessage.length > 300) {
      setFeedback("Message cannot exceed 300 characters.");
      return;
    }
    
    try {
      const response = await fetch("https://personal-projects-server-p6x4.onrender.com/SendNewMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: USER?._id,
          name: trimmedName,
          email,
          message: trimmedMessage
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setFeedback("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setFeedback(`Error sending message. ${error}`);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm open to being involved in software engineering projects, especially those related to AI, machine learning, or data-driven systems. I also welcome partnerships or job opportunities.
            </p>
            <div className="mb-4 mt-8">
              <span>London, UK</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {feedback && (
                <p className="text-sm text-red-400 font-medium">{feedback}</p>
              )}

              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
