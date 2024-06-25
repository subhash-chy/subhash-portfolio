import { useState } from "react";

export const useSendMail = (resetFields) => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Send Message");

  const sendMail = async (name, email, message) => {
    setIsLoading(true);
    setButtonTitle("Sending!");

    try {
      const response = await fetch("/api/sendmail", {
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
      });

      if (response.ok) {
        setButtonTitle("Message Sent!");
        resetFields();
      } else setButtonTitle("Message Not Sent!");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setButtonTitle("Send Message");
      }, 2500);
    }
  };

  return { isLoading, buttonTitle, sendMail };
};
