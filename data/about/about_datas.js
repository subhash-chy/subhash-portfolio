export const about_datas = [
  {
    title: `More Than A Developer`,
    description: [
      `I am a student, mainly a tech enthusiast. I like coding, write blogs
	  on various topic of programming. The main weapons are NextJS and
	  TailwindCSS.`,
    ],
  },
  {
    title: `How My Journey Started`,
    description: [
     `My journey into front-end development was a deliberate shift driven by a pursuit of efficient creativity.`,
     
     `Originally drawn to 3D design with Blender, I found its resource demands cumbersome. Switching to mobile app development using Flutter provided relief, yet I craved more. Enter React and NextJS, where I delved into Static Site Generation, Server Side Rendering, and Incremental Static Regeneration for a refined development experience.`,

     `If you're unfamiliar with SSG, SSR, and ISR, let's explore together`
    ],
    button: {
      title: "Click Here",
      onClick: () => {
        window.open(
          "https://nextjs.org/docs/basic-features/data-fetching/overview",
          "_blank",
          "noopener noreferrer"
        );
      },
    },
  },
];
