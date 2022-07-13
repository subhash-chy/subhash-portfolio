import { useEffect, useState, useRef } from "react";
import { Layout } from "../layouts";
import dayjs from "dayjs";
import { Button, Header } from "../components";
import useAuth from "../hooks/useAuth";
import { parse } from "cookie";
import { getAuthToken } from "../lib/cookie";

export const getServerSideProps = async ({ req, res }) => {
  const cookies = parse(req.headers.cookie || "");
  const token = getAuthToken(cookies);

  if (!token) {
    res.writeHead(303, { location: "/admin" });
    res.end();
  }

  return { props: {} };
};

function AdminDashboard() {
  const [members, setMembers] = useState([]);
  const [sendLoading, setSendLoading] = useState(false);

  const { user, loading } = useAuth();

  const isOwner = user?.email == process.env.NEXT_PUBLIC_EMAIL;

  const messageRef = useRef(null);

  useEffect(() => {
    isOwner && findAllSubscribers();
  }, [isOwner]);

  const findAllSubscribers = async () => {
    const response = await fetch("/api/subscribers", {
      method: "GET",
    });
    const members = await response.json();
    setMembers(members.members);
  };

  const sendMailToSubscribers = async (e) => {
    e.preventDefault();
    setSendLoading(true);
    const allMails = members.map((member) => {
      return member.email_address;
    });

    const allMailsStringified = allMails.join(", ");
    const response = await fetch("/api/sendmail", {
      body: JSON.stringify({
        email: allMailsStringified,
        message: messageRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    });
    setSendLoading(false);
    messageRef.current.value = "";
  };

  return (
    <Layout>
      <Header
        title={isOwner ? `Welcome Admin!` : "You are not the website owner."}
        paragraphs={`${
          isOwner
            ? `See all users subscribed to your newsletter.`
            : "This page is only for website owner. If you are not a website owner, this page is of no use. So, go back to home page and explore other pages!"
        }`}
        button={{
          title: "Back To Home",
          highEmphasis: true,
          onClick: () => router.push("/"),
        }}
      />
      <div className="py-20 max-w-custom">
        {isOwner ? (
          <div className="space-y-10">
            <div>
              <h1 className="mb-3">All Members</h1>
              <p className="text-sm">
                <span className="dark:text-white">Total Members: </span>{" "}
                <span className="text-accent dark:text-accent_dark">
                  {members?.length}
                </span>
              </p>
            </div>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">VIP Member</th>
                    <th scope="col">Subscribed on</th>
                  </tr>
                </thead>
                <tbody>
                  {members?.map((member, i) => (
                    <tr key={member.id}>
                      <td>{i + 1}</td>
                      <td>{member.full_name ? member.full_name : "-"}</td>
                      <td>{member.email_address}</td>
                      <td>{member.vip ? "✔️" : "❌"}</td>
                      <td>
                        {dayjs(member.last_changed).format("YYYY MMMM, D")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/*  */}
            <form onSubmit={sendMailToSubscribers}>
              <div className="space-y-2">
                <label htmlFor="message">
                  Want to send some message to your subscribers?
                </label>
                <textarea
                  ref={messageRef}
                  className="input-custom bg-[#f3f3f3] focus:bg-[#eeeeee]"
                  name="message"
                  placeholder="Your Message..."
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <Button highEmphasis loading={sendLoading}>
                SEND TO ALL
              </Button>
            </form>
          </div>
        ) : (
          <p>It seems that you are not the website owner!</p>
        )}
      </div>
    </Layout>
  );
}

export default AdminDashboard;
