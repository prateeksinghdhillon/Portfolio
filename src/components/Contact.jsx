import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  
  //   // Replace "YOUR_FORM_ID" and "entry.X" with actual values from your form
  //   const formUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWxvajX7CgyYGcmDvcUH5BPdZQ-Ex5H1Etu5M7xBVjzUeGwQ/formResponse?usp=pp_url
  //     &entry.221897331=${encodeURIComponent(form.name)}
  //     &entry.1989710113=${encodeURIComponent(form.email)}
  //     &entry.419668333=${encodeURIComponent(form.message)}`;
  
  //   // Redirect to the Google Forms URL (submits the form)
  //   window.location.href = formUrl;
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // Replace with your actual Google Form Entry IDs
  //   const formUrl =
  //     "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWxvajX7CgyYGcmDvcUH5BPdZQ-Ex5H1Etu5M7xBVjzUeGwQ/formResponse?usp=pp_url";

  //   // Construct query parameters
  //   const queryParams = new URLSearchParams({
  //     "entry.123456789": form.name,
  //     "entry.987654321": form.email,
  //     "entry.567890123": form.message,
  //   }).toString();

  //   // Append query parameters to the form URL
  //   const finalUrl = `${formUrl}?${queryParams}`;

  //   fetch(finalUrl, {
  //     method: "POST",
  //     mode: "no-cors",
  //   })
  //     .then(() => {
  //       setLoading(false);
  //       alert("Thank you! Your message has been submitted.");
  //       setForm({ name: "", email: "", message: "" });
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.error(error);
  //       alert("Something went wrong. Please try again.");
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Replace "YOUR_FORM_ID" and "entry.X" with actual Google Form entry IDs
    const formUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWxvajX7CgyYGcmDvcUH5BPdZQ-Ex5H1Etu5M7xBVjzUeGwQ/formResponse?usp=pp_url
      &entry.221897331=${encodeURIComponent(form.name)}
      &entry.1989710113=${encodeURIComponent(form.email)}
      &entry.419668333=${encodeURIComponent(form.message)}`;
  
    // Send data without redirection
    fetch(formUrl, {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        setLoading(false);
        alert("Thank you! Your message has been submitted.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };
  
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
