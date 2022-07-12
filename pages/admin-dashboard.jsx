import { useEffect, useState } from "react";
import { Layout } from "../layouts";
import dayjs from "dayjs";
import { Header } from "../components";
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

  const { user, loading } = useAuth();

  const isOwner = user?.email == process.env.NEXT_PUBLIC_EMAIL;

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
            <h1>All Members</h1>
            <p className="text-xs">
              <span className="dark:text-white">Total Members: </span>{" "}
              {members?.length}
            </p>
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
          </div>
        ) : (
          <p>It seems that you are not the website owner!</p>
        )}
      </div>
    </Layout>
  );
}

export default AdminDashboard;
