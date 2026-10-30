export interface Review {
  id: string;
  platform: "Fiverr" | "Upwork" | "LinkedIn";
  logo: string;
  quote: string;
  name: string;
  stars?: number;
  gig?: string;
}

export const reviews: Review[] = [
  {
    id: "upwork-ali",
    platform: "Upwork",
    logo: "/upwork.svg",
    quote:
      "Excellent work by Hamza Momin. Very professional and dependable. Highly satisfied.",
    name: "Ali H.",
    gig: "Elementor fix",
    stars: 5,
  },
  {
    id: "fiverr-amauri",
    platform: "Fiverr",
    logo: "/fiverr.svg",
    quote:
      "Amazing artist, animator and professional, I can recommend seller to anyone needing video game art while on a tight budget!",
    name: "amauri64, United States",
    gig: "Pixel art",
    stars: 5,
  },
  {
    id: "linkedin-amina",
    platform: "LinkedIn",
    logo: "/linkedin.svg",
    quote:
      "I had the pleasure of working alongside Hamza at Xgrid, where I served as his Product Owner, and honestly, he made my job easier. He'd pick up frontend tasks quickly, ask the right questions, and just get things done. Hamza has a solid grasp of modern frontend technologies and brings both technical depth and a good product sense to the table. I'd recommend him without hesitation to any team looking for a skilled and dependable frontend developer.",
    name: "Amina Shah",
    gig: "Product Owner, Xgrid",
  },
  {
    id: "upwork-sohail",
    platform: "Upwork",
    logo: "/upwork.svg",
    quote: "Very polite and helpful with quick response time.",
    name: "Sohail N.",
    gig: "n8n workflow",
    stars: 5,
  },
  {
    id: "fiverr-funky",
    platform: "Fiverr",
    logo: "/fiverr.svg",
    quote:
      "Friendly seller and who have shown expertise with chatgpt. Hamza Momin have provided great prompts to help with my projects. Thank you",
    name: "funky9, Australia",
    gig: "AI work",
    stars: 5,
  },
  {
    id: "linkedin-guloona",
    platform: "LinkedIn",
    logo: "/linkedin.svg",
    quote:
      "I had the pleasure of working with Hamza and found him to be a highly dedicated, professional, and dependable individual. He consistently demonstrated strong problem-solving abilities, a proactive attitude, and a commitment to delivering quality results. Hamza works well both independently and as part of a team, communicates effectively, and is always willing to take on new challenges. His positive mindset and strong work ethic make him a valuable asset to any organization. I would confidently recommend Hamza for any role that requires professionalism, responsibility, and a results-driven approach. I wish him continued success in his career.",
    name: "Guloona Imtiaz",
  },
  {
    id: "upwork-scss",
    platform: "Upwork",
    logo: "/upwork.svg",
    quote:
      "Outstanding work! Delivered on time and exceeded expectations. Highly recommended.",
    name: "Upwork client",
    gig: "WordPress theme",
    stars: 5,
  },
  {
    id: "fiverr-elun",
    platform: "Fiverr",
    logo: "/fiverr.svg",
    quote: "amazing experience",
    name: "elun_stud, Nigeria",
    gig: "Pixel art",
    stars: 5,
  },
  {
    id: "upwork-cta",
    platform: "Upwork",
    logo: "/upwork.svg",
    quote: "Hamza was great to work with. Very responsive and got the job done perfectly.",
    name: "Upwork client",
    gig: "WordPress fix",
    stars: 5,
  },
  {
    id: "fiverr-mjbotte",
    platform: "Fiverr",
    logo: "/fiverr.svg",
    quote: "Very fast and responsive",
    name: "mjbotte1, United States",
    gig: "Pixel art",
    stars: 5,
  },
  {
    id: "upwork-website",
    platform: "Upwork",
    logo: "/upwork.svg",
    quote: "It was great working with you. Projects accomplished promptly",
    name: "Upwork client",
    gig: "New website",
    stars: 5,
  },
  {
    id: "fiverr-azfar",
    platform: "Fiverr",
    logo: "/fiverr.svg",
    quote: "Happy with the service, would recommend to all",
    name: "azfarahmed5, United Arab Emirates",
    gig: "AI work",
    stars: 5,
  },
  {
    id: "fiverr-tony",
    platform: "Fiverr",
    logo: "/fiverr.svg",
    quote:
      "Hamza provided prompt response and was attentive to detail. He executed on time and according to requirements. Above all he was accommodative to my needs and patiently clarified any quesries.",
    name: "tonybony954, Malta",
    gig: "AI work",
    stars: 5,
  },
];
