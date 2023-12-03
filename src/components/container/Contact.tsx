import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (formData: any) => {
    emailjs
      .sendForm(
        "service_2he50p7",
        "template_b0nsbnd",
        formData,
        "9YISU9my8nYDU1WTW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#fff] h-screen flex flex-col">
      <div className="px-5 pt-10 h-1/6">
        <span className=" font-extrabold font-noto text-6xl px-2">Contact</span>
      </div>
      <div className="flex flex-row mx-4 h-5/6">
        <div className="flex flex-row justify-center items-center w-1/2 h-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-2 bg-slate-500 w-[80%] h-[90%] items-center justify-around rounded-xl "
          >
            <span className="text-xl font-noto text-semibold px-2 py-4 text-white">
              I am always open to discussing product design work or
              partnerships.
            </span>
            <input
              type="text"
              name="user_name"
              className=" bg-transparent border-b-2 border-gray-100 focus:outline-none text-white w-80 text-xl pb-2"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className=" bg-transparent border-b-2 border-gray-100 focus:outline-none text-white w-80 text-xl pb-2"
              placeholder="E-Mail"
            />
            <textarea
              name="message"
              className=" bg-transparent border-b-2 border-gray-100 focus:outline-none text-white w-80 text-xl pb-2"
              placeholder="Message"
              rows={1}
            />
            <input
              type="submit"
              value="Send"
              className="border-2 py-2 px-5 text-lg rounded-xl text-white"
            />
          </form>
        </div>
        <div className="flex flex-row justify-center items-center w-1/2 h-full">
          <div className=" flex flex-col gap-2 w-[80%] h-[90%] items-center justify-around rounded-xl overflow-x-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.738584683042!2d79.9334257745298!3d23.17973771044636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae3de505f7a5%3A0x9d94a61cdb0fcc4d!2sHanumantal%20Rd%2C%20Hanumantal%20Ward%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482002!5e1!3m2!1sen!2sin!4v1701520706235!5m2!1sen!2sin"
              width="600"
              height="600"
              style={{ border: 0, padding: 5 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
