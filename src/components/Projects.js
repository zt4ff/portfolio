import React, { useState } from "react";

// manually keep information in projects for now
const projects = [
  {
    name: "QShop eCommerce",
    description:
      "This is an ecommerce platform, with over 25k users, that helps you set up a powerful store within 5 minutes.",
    link: "https://app.qshop.tech/store/register",
  },
  {
    name: "McMaKler",
    description: "This is a real estate management platform.",
    link: "https://www.mcmakler.de/",
  },
  {
    name: "gittyIgnore",
    description:
      "This is an interactive command line to generate .gitignore file templates across different tools, framework, languages e.t.c.",
    link: "https://www.npmjs.com/package/gittyignore",
  },
  {
    name: "touch-alias",
    description:
      "This is a CLI tool to create files on UNIX based systems recursively and automatically create the path if the directories do not exist",
    link: "https://www.npmjs.com/package/touch-alias",
  },
  {
    name: "Auto Commenter",
    description:
      "This is a GitHub Actions plugin that can create comments automatically on a pull request or commit. It can comment a custom message or randomly generate quotes or memes",
    link: "https://github.com/marketplace/actions/auto-commentter",
  },
];

export const Projects = () => {
  const [totalItem, setTotalItem] = useState(4);

  return (
    <div className="row">
      <h2>Projects 🚧</h2>
      {projects.slice(0, totalItem).map((item) => (
        <div
          key={item.name}
          className="p-2 m-2 col-lg-3"
          style={{ border: "1px solid #000" }}
        >
          <p>{item.name}</p>
          <div>
            <small>{item.description}</small>
          </div>
          <a href={item.link} rel="noreferrer" target="_blank">
            View
          </a>
        </div>
      ))}
      {totalItem < projects.length && (
        <div className="text-center">
          <p
            onClick={() => {
              setTotalItem((prev) => prev + 3);
            }}
          >
            see more ...
          </p>
        </div>
      )}
    </div>
  );
};
