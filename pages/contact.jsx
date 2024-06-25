import { useEffect, useRef, useState } from "react";
import { Button, Header } from "../components";
import { Layout } from "../layouts";
import { useSendMail } from "../hooks/useSendMail";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const { isLoading, buttonTitle, sendMail } = useSendMail(resetFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail(name, email, message);
  };

  return (
    <Layout
      title="Contact - Subhash Chaudhary"
      description="Note: Before sending any email, please be clear about what you want to communicate about and please do not try to spam the mail."
    >
      <Header
        title="Contact Me"
        paragraphs="Note: Before sending any email, please be clear about what you want to communicate about and please do not try to spam the mail."
        button={{
          title: "Send A Mail",
          onClick: () => {
            window.open(
              "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfrKhvpJHGpNmHBNnHkmlLKGJpgfFvlZpvdbvCRZNlxMRfJfvGFWBlQJDzPThJXJnBVjGq",
              "_blank",
              "noopener noreferrer"
            );
          },
        }}
      />
      <div className="py-20 max-w-custom space-y-20">
        <div className="space-y-5">
          <h1>Send Message</h1>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-custom bg-[#f3f3f3] focus:bg-[#eeeeee]"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Your E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-custom bg-[#f3f3f3] focus:bg-[#eeeeee]"
                type="email"
                name="email"
                placeholder="steve@gmail.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input-custom bg-[#f3f3f3] focus:bg-[#eeeeee]"
                name="message"
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex">
              <Button highEmphasis loading={isLoading}>
                {buttonTitle}
              </Button>
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
