import { useRef, useState } from "react";
import { Button } from ".";
import useSWR from "swr";

function Newsletter() {
  const inputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Subscribe");
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data } = useSWR("/api/subscribers", fetcher);
  const subscriberCount = data?.stats.member_count;

  const subscribe = async (e) => {
    e.preventDefault();
    setMessage("Subscribing");
    setLoading(true);

    await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then(() => {
        setMessage("Subscribed!");
        setLoading(false);
      })
      .catch((error) => console.log(error))
      .then(() => {
        inputRef.current.value = "";
        setTimeout(() => {
          setMessage("Subscribe");
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
          <Button title={message} highEmphasis loading={loading} />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-accent dark:text-accent_dark">
            {subscriberCount > 0
              ? `${subscriberCount} Subscribers`
              : `No Subscriber`}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
