import inventory from "../assets/inventory.png"
import rasoiwallah from "../assets/rasoiWallah.png";
import goHealthy from "../assets/goHealthy.png";
import movieBooking from "../assets/movieBooking.png";



export const projectList = [
  {
    name: "RasoiWallah - food delivery",
    img: rasoiwallah,
    description:
      "Rasoiwallah is a restaurant app with secure login/signup, private routes, and restaurant cards. Users can explore menus, add items to their cart, and place orders for a personalized dining experience.",
    github: "https://github.com/SubhashPrasad23/RasoiWallah-",
    demo: "https://rasoiwallah.netlify.app/",
    tech: ["ReactJS", "Tailwind CSS", "Redux-Toolkit", "local storage"],
  },
  {
    name: "GO Healthy- Juice Shop Menu",
    img: goHealthy,
    description:
      "Go Healthy Juice Shop offers a diverse menu of fresh juices, shakes, and snacks. The platform includes a convenient filter function, allowing customers to easily browse options based on snacks, shakes, or juices.",
    github: "https://github.com/SubhashPrasad23/juices-shop",
    demo: "https://juices-shop.vercel.app/",
    tech: ["ReactJS", "Tailwind CSS"],
  },
  {
    name: "TicketTube - movie ticket booking with YouTube video search.",
    img: movieBooking,
    description:
      "TicketTube is a movie booking platform integrated with YouTube video search. It offers functionalities like viewing now-playing movies, searching films, displaying movie details, selecting date and time, and booking seats.",
    github: "https://github.com/SubhashPrasad23/ticketTube",
    demo: "https://ticket-tube.vercel.app/",
    tech: ["ReactJS", "Tailwind CSS"],
  },
  {
    name: "Inventory Management",
    img: inventory,
    description:
      "Inventory Management allows users to add stock, view stock lists, track sales data, and generate billing options. It also displays details on total sales, expenses, and income for efficient management.",
    github: "https://github.com/SubhashPrasad23/inventory_management",
    demo: "https://inventorybysubhash.vercel.app/",
    tech: ["ReactJS", "Tailwind CSS", "local storage"],
  },
  {
    name: "HealthBell -medicine reminder",
    img: "",
    description:
      "HealthBell allows users to add various medications and their details, with options to delete entries. Users also receive web push notifications to alert them when it's time to take their medicine.",
    github: "#",
    demo: "#",
    tech: ["ReactJS", "Tailwind CSS", "local storage", "firebase"],
  },
];
