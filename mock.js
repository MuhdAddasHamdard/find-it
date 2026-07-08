import { describe } from "zod/v4/core";
import { HiCheckCircle } from "react-icons/hi";
export const mainLinks = [
  { name: "Home", path: "#" },
  { name: "About us", path: "#" },
  { name: "Properties", path: "#" },
  { name: "Agents", path: "#" },
  { name: "Blog", path: "#" },
];

export const actionLinks = [
  { name: "Contact us", path: "#" },
  { name: "Submit property", path: "#" },
];

export const featured = [
  {
    id: 0,
    img: "https://framerusercontent.com/images/tRZfzBydgDWngJXcMe6rIohrW4w.jpg?width=1400&height=785",
    tags: ["Houses", "Rent"],
    title: "Marble House",
    address: "161-03 84th Ave, Queens, NY 11432, USA Queens New York",
  },
  {
    id: 1,
    img: "https://framerusercontent.com/images/TpOlK8PJWmrVAp7lYOI63ckh1fQ.jpg?width=1400&height=785",
    tags: ["Apartments", "Rent"],
    title: "Family Mansion",
    address: "654 Water St, New York, NY 10002, USA Manhattan New York",
  },
  {
    id: 2,
    img: "https://framerusercontent.com/images/K1cAdts1F9uFubPR2QMKH0UzK5s.jpg?width=1400&height=785",

    tags: ["Houses", "Sell"],
    title: "South Side Garden",
    address: "161-03 84th Ave, Queens, NY 11432, USA Queens New York",
  },
  {
    id: 3,
    img: "https://framerusercontent.com/images/ESBHeCBUOjwbcy4XSYGlllANrM.jpg?width=1300&height=817",

    tags: ["Apartments", "Rent"],
    title: "Modren Family Home",
    address: "654 Water St, New York, NY 10002, USA Manhattan New York",
  },
  {
    id: 4,
    img: "https://framerusercontent.com/images/jEo4jPXWzEmu0zclMrEwpeXUWk4.jpg?width=1024&height=644",

    tags: ["Condos", "Rent"],
    title: "Rustic Forest Cabin",
    address: "1845 Tenbroeck Ave, The Bronx, NY 10461, USA The Bronx New York",
  },
];

export const benefits = [
  {
    id: 0,
    img: "https://framerusercontent.com/images/4LNT35jK5LrTtRveozZqCOzc1s.jpg?scale-down-to=512&width=6000&height=4000",
  },
  {
    id: 1,
    img: "https://framerusercontent.com/images/XXg8QrmCUY5PgWmNqLkowpEAc.jpg?scale-down-to=1024&width=3376&height=6000",
  },

  {
    id: 2,
    img: "https://framerusercontent.com/images/AvzyVNCd4TdEaYRLz3JpLs0hzAc.jpg?scale-down-to=512&width=4096&height=4096",
  },
];

export const imgTags = [
  {
    id: 0,
    tag: "Trusted Expertise",
    icon: HiCheckCircle,
  },
  {
    id: 1,
    tag: "Tailored to You",
    icon: HiCheckCircle,
  },
  {
    id: 2,
    tag: "Seamless Process",
    icon: HiCheckCircle,
  },
  {
    id: 3,
    tag: "Strong Market Insights",
    icon: HiCheckCircle,
  },
  {
    id: 4,
    tag: "After-Sales Support",
    icon: HiCheckCircle,
  },
];
export const list = [
  {
    id: 0,
    title: "Buy a new home",
    desc: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
  },

  {
    id: 1,
    title: "Rent a home",
    desc: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
  },
  {
    id: 2,
    title: " Sell a home",
    desc: "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
  },
];
export const imagePositions = [
  "lg:top-0 -top-10 -right-3 z-50 w-2/4",
  "lg:top-20 lg:left-1/6 h-150 w-124 lg:h-[400px] top-7 left-9 w-60 lg:w-96",
  "lg:-bottom-0 lg:left-0  -bottom-12 -left-3 lg:w-2/4 w-[250px] ",
];
