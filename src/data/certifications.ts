export interface Certification {
  id: string;
  title: string;
  image: string;
  credly: string;
  href: string;
}

const credly = "https://www.credly.com/users/hamzamomin";

export const certifications: Certification[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    image: "/awsccp.png",
    credly,
    href: "https://www.linkedin.com/in/hamzamomin/details/certifications/",
  },
  {
    id: "azure-ai-900",
    title: "Azure AI-900",
    image: "/ai-900.png",
    credly,
    href: "https://learn.microsoft.com/api/credentials/share/en-us/HamzaMomin-4430/70F2B077493FB879?sharingId=78FB71087244859F",
  },
  {
    id: "google-it",
    title: "Google IT Support",
    image: "/google.png",
    credly,
    href: "https://www.coursera.org/account/accomplishments/professional-cert/6ZUF6RFWR4A8",
  },
  {
    id: "ibm-it",
    title: "IBM IT Support Professional Certificate",
    image: "/ibm.png",
    credly,
    href: "https://coursera.org/share/0ac78ab417730e713e8ac5c3dea5690c",
  },
  {
    id: "sql",
    title: "Data Analyst in SQL",
    image: "/datacamp.png",
    credly,
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/3a9d3a51c39e3f926c0e4fbf9b5d32c3c9ab6fe3",
  },
];
