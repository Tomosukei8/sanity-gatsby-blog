export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a34c90b85bd63bae97706a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-edtwz8m3",
                  apiId: "de81f861-bba9-4095-9d2d-d482835353bb",
                },
                {
                  buildHookId: "62a34c917fde1e472755f5ac",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zg41fnr2",
                  apiId: "d60a6fa7-9e29-45f9-92bd-de68df18572f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Tomosukei8/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zg41fnr2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
