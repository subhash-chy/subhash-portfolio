import { useEffect, useRef, useState } from "react";
import { Button } from ".";

function Newsletter() {
  const inputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Subscribe");
  const [subscriberCount, setSubscriberCount] = useState(null);

  useEffect(() => {
    fetch("/api/subscribers")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setSubscriberCount(data?.total_items ?? 0))
      .catch(() => setSubscriberCount(0));
  }, []);

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
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (response.ok && !data.error) {
          setMessage("Subscribed!");
        } else {
          setMessage("Try again later");
        }
        setLoading(false);
      })
      .catch(() => {
        setMessage("Try again later");
        setLoading(false);
      })
      .then(() => {
        inputRef.current.value = "";
        setTimeout(() => {
          setMessage("Subscribe");
        }, 2000);
      });
  };

  return (
    <div className="mt-20 py-8 px-6 md:px-12 rounded-[28px] glass glass-edge sheen">
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
          <div className="flex flex-col md:flex-row gap-4">
            <input
              ref={inputRef}
              className="input-custom"
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="john@gmail.com"
              required
            />
            <Button highEmphasis loading={loading}>
              {message}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-neutral-600 dark:text-neutral-400">
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
