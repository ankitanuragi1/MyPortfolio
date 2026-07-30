import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export interface ContactItem {
  icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
}

export const contactData: ContactItem[] = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "ankit@example.com",
    link: "mailto:ankit@example.com",
  },

  {
    icon: FaPhone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },

  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Bhopal, India",
  },

  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/ankit",
    link: "https://github.com/",
  },

  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/ankit",
    link: "https://linkedin.com/",
  },
];