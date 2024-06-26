import { useRef, useState } from "react";
import { Button } from ".";
import useSWR from "swr";

function Newsletter() {
  const inputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Subscribe");
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data } = useSWR("/api/subscribers", fetcher);
  const subscriberCount = data?.total_items;

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
    <div className="mt-20 py-10 px-5 md:px-10 rounded-md bg-accent/10 dark:bg-accent_dark/5">
      <div className="space-y-5">
        <h2 className="font-bold md:text-3xl">
          <span className="text-accent dark:text-accent_dark">Stay</span> ahead
          of everyone{" "}
          <span className="text-accent dark:text-accent_dark">!</span>
        </h2>
        <p>
          Subscribe to receive timely email notifications for my latest blog
          posts. Be the first to access valuable content as soon as it is
          published.
        </p>

        {/* Newsletter form */}
        <form className="space-y-5" onSubmit={subscribe}>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0">
            <input
              ref={inputRef}
              className="input-custom bg-white/70 focus:bg-white"
              type="email"
              name="email"
              placeholder="john@gmail.com"
              required
            />
            <Button highEmphasis loading={loading}>
              {message}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-accent dark:text-accent_dark font-semibold">
              {subscriberCount > 0
                ? `${subscriberCount} Subscribers`
                : `No Subscriber`}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
