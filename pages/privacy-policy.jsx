import React from "react";
import { Header } from "../components";
import { privacy_policy_datas } from "../data";
import { Layout } from "../layouts";

function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy - Subash Chaudhary">
      <Header
        title="Privacy Policy"
        paragraphs="If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."
      />
      <div className="py-20 max-w-custom space-y-10">
        {/* Mapping all privacy policy data */}
        {privacy_policy_datas.map((data, index) => (
          <div key={index} className="space-y-5">
            <h1>{data.title}</h1>

            {/* Again mapping from arrays of sub data i.e. array of description */}
            {data.description.map((description, i) => (
              <p key={i}>{description}</p>
            ))}

            {/* For the ordered lists i.e. `ol` */}
            <ol className="list-disc ml-4 space-y-4">
              {data.lists &&
                data.lists.map((list, i) => <li key={i}>{list}</li>)}
            </ol>

            {/* If there are more descriptions after the lists */}
            {data.more_description?.map((description, i) => (
              <p key={i}>{description}</p>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
