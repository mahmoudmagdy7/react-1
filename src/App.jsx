import "./App.css";
import Card from "./components/Card";

function App() {
  const users = [
    {
      id: 1,
      name: "Mahmoud Magdy",
      age: 24,
      title: "Frontend Dev",
      position: "dev",
      rate: 3.5,
      verified: true,
      description:
        "Experienced in building user interfaces using React and Vue.",
    },
    {
      id: 2,
      name: "John Doe",
      age: 30,
      title: "Backend Dev",
      position: "dev",
      rate: 4.2,
      verified: true,
      description:
        "Specializes in server-side logic and database management with Node.js and MongoDB.",
    },
    {
      id: 3,
      name: "Jane Smith",
      age: 28,
      title: "Fullstack Dev",
      position: "dev",
      rate: 4.5,
      verified: false,
      description:
        "Proficient in both frontend and backend development, using MERN stack.",
    },
    {
      id: 4,
      name: "Alice Johnson",
      age: 35,
      title: "Project Manager",
      position: "manager",
      rate: 4.7,
      verified: true,
      description:
        "Experienced in managing software development projects with Agile methodologies.",
    },
    {
      id: 5,
      name: "Bob Brown",
      age: 40,
      title: "QA Engineer",
      position: "qa",
      rate: 3.8,
      verified: false,
      description:
        "Ensures software quality through rigorous testing and automation.",
    },
  ];

  return (
    <>
      <Card users={users} />
    </>
  );
}

export default App;
