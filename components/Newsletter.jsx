import { useRef } from "react";
import { Button } from ".";

function Newsletter() {
  const inputRef = useRef();

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
      method: "POST",
    });
    console.log("Data=>", res);

    const { error } = await res.json();
    if (error) {
      console.log("Error=> ", error);
      return;
    }
  };

  return (
    <div className="mt-20 space-y-5 p-10 rounded-md bg-accent/10 dark:bg-accent_dark/5">
      <h2>
        <span className="text-accent dark:text-accent_dark">Hooyah!</span> Get
        In Touch By Subscribing To The Newsletter{" "}
        <span className="text-accent dark:text-accent_dark">.</span> (work in
        progress)
      </h2>
      <p>
        Subscribe now to get latest blog post notification via email whenever I
        post a new blog.
      </p>

      {/* Newsletter form */}
      <form className="space-y-5" onSubmit={subscribe}>
        <input
          ref={inputRef}
          className=" dark:bg-[#222222] p-3 outline-none w-full rounded-sm"
          type="email"
          name="email"
          placeholder="you@gmail.com"
          required
        />
        <Button title="Subscribe" highEmphasis />
        {/* <button type="submit">Subscribe</button> */}
      </form>
    </div>
  );
}

export default Newsletter;
