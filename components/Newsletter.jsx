import { useRef, useEffect, useState } from "react";
import { Button } from ".";

function Newsletter() {
  const inputRef = useRef();

  const [subscriberCount, setSubscriberCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  async function fetchSubscribers() {
    const res = await fetch("/api/subscribers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setSubscriberCount(data.stats.member_count.toString());
    console.log("Data =>", data);
  }

  const subscribe = async (e) => {
    e.preventDefault();
    setMessage("Subscribing");

    await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then(() => setMessage("Subscribed!"))
      .catch((error) => console.log(error))
      .then(() => {
        inputRef.current.value = "";
        setTimeout(() => {
          fetchSubscribers();
          setMessage("");
        }, 2000);
      });
  };

  return (
    <div className="mt-20 space-y-5 p-10 rounded-md bg-accent/10 dark:bg-accent_dark/5">
      <h2 className="font-bold">
        <span className="text-accent dark:text-accent_dark">Hooyah!</span> Get
        In Touch By Subscribing To The Newsletter{" "}
        <span className="text-accent dark:text-accent_dark">.</span>
      </h2>
      <p>
        Subscribe now to get latest blog post notification via email whenever I
        post a new blog.
      </p>

      {/* Newsletter form */}
      <form className="space-y-5" onSubmit={subscribe}>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <input
            ref={inputRef}
            className=" dark:bg-[#222222] p-3 outline-none w-full rounded-sm"
            type="email"
            name="email"
            placeholder="you@gmail.com"
            required
          />
          <Button title="Subscribe" highEmphasis />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-accent dark:text-accent_dark">
            {subscriberCount} Subscribers
          </p>
          <p>{message}</p>
        </div>
        {/* <button type="submit">Subscribe</button> */}
      </form>
    </div>
  );
}

export default Newsletter;
