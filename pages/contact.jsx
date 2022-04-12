import { useRef, useState } from "react";
import { Button, Header } from "../components";
import { Layout } from "../layouts";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Send Message");

  const sendMail = async (e) => {
    setLoading(true);
    setButtonTitle("Sending!");
    e.preventDefault();

    // calling sendmail api endpoint
    const response = await fetch("/api/sendmail", {
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    });
    setLoading(false);
    response.ok
      ? setButtonTitle("Message Sent!")
      : setButtonTitle("Message Not Sent!");

    setTimeout(() => {
      setButtonTitle("Send Message");
    }, 2500);
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <Layout
      title="Contact - Subash Chaudhary"
      description="Note: Before sending any email, please be clear about what you want to communicate about and please do not try to spam the mail."
    >
      <Header
        title="Contact Me"
        paragraphs="Note: Before sending any email, please be clear about what you want to communicate about and please do not try to spam the mail."
        button={{
          title: "Send A Mail",
          onClick: () => {
            window.open(
              "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvnrLKTbwflRnFkJbxttBfhwldvDHgXpkKGfDrhmjVSJhVWjkDpQLrQjcBSqdCffTxmvCL",
              "_blank",
              "noopener noreferrer"
            );
          },
        }}
      />
      <div className="py-20 max-w-custom space-y-20">
        <div className="space-y-5">
          <h1>Send Message</h1>
          <form className="space-y-8" onSubmit={sendMail}>
            <div className="space-y-2">
              <label htmlFor="name">Your Name</label>
              <input
                ref={nameRef}
                className="bg-secondary dark:bg-[#222222] p-3 outline-none w-full rounded-md"
                type="text"
                name="name"
                // placeholder="Your Name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Your E-mail</label>
              <input
                ref={emailRef}
                className="bg-secondary dark:bg-[#222222] p-3 outline-none w-full rounded-md"
                type="email"
                name="email"
                placeholder="steve@gmail.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Your Message</label>
              <textarea
                ref={messageRef}
                className="bg-secondary dark:bg-[#222222] p-3 outline-none w-full rounded-md"
                name="message"
                // placeholder="Your Message..."
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex">
              <Button title={buttonTitle} highEmphasis loading={loading} />
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
