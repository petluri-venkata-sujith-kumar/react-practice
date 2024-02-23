import { useState } from "react";

const App = () => {
  let [courses, setCourse] = useState([
    {
      course_id: 1,
      course_name: "MernStack",
      duration: 4,
      trainers: ["Imran", "Pooja", "Lawan", "Sujith"],
      price: 50000,
      branch: "BTM",
      course_details: {
        frontend: [
          "react",
          "redux",
          "Vue",
          "Svelte",
          "bootstrap",
          "tailwindcss",
        ],
        backend: [
          "Node.Js",
          ".Net Core",
          "Express JS",
          "Django",
          "Laravel",
        ],
        database: ["MySQL", "PostgreSQL", "Oracle Database", "MS SQL Server"],
        tools: ["Git", "Jira", "Trello", "Visual Studio Code", "Sublime Text"],
      },
    },
    {
      course_id: 2,
      course_name: "MeanStack",
      duration: 4,
      trainers: ["Imran", "Pooja", "Lawan", "Sujith"],
      price: 50000,
      branch: "Basavangundi",
      course_details: {
        frontend: [
          "react",
          "redux",
          "HTMl",
          "Angular",
          "bootstrap",
          "tailwindcss",
        ],
        backend: [
          "Node.Js",
          ".Net Core",
          "Express JS",
          "Django",
          "Flask",
        ],
        database: ["MySQL", "PostgreSQL", "Oracle Database", "MS SQL Server"],
        tools: ["Git", "Jira", "Trello", "Visual Studio Code", "AWS"],
      },
    },
    {
      course_id: 3,
      course_name: "PythonFullStack",
      duration: 4,
      trainers: ["Imran", "Pooja", "Lawan", "Sujith"],
      price: 50000,
      branch: "Jayanagar",
      course_details: {
        frontend: [
          "react",
          "Vue",
          "HTMl",
          "Angular",
          "bootstrap",
          "tailwindcss",
        ],
        backend: [
          "Node.Js",
          ".Net Core",
          "Express JS",
          "Django",
          "Python",
          "Laravel",
        ],
        database: ["MySQL", "PostgreSQL", "Oracle Database", "MS SQL Server"],
        tools: ["Git", "Jira", "Trello", "Visual Studio Code", "Sublime Text"],
      },
    },
  ]);
  return (
    <section id="courseBlock">
      <article>
        <main>
          <header>
            {/* className="font-bold text-2xl md:text-6xl lg:text-8xl mt-1" */}
            <h1>List of courses</h1>
          </header>
          <aside className="container">
            {courses.map((course) => {
              return (
                <>
                  <div className="list" key={courses.course_id}>
                    <h2>{course.course_name+":"}</h2>
                    <p className="head">
                      <span className="heading">Branch: </span>
                      <span>{course.branch}</span>
                    </p>
                    <p className="head">
                      <span className="heading">Duration: </span>
                      <span>{course.duration + " " + "months"}</span>
                    </p>
                    <p className="head">
                      <span className="heading">Price: </span>
                      <span>&#8377; {course.price}</span>
                    </p>
                    <p>
                      <span className="heading">Trainers: </span>
                      <div>
                        {course.trainers.map((trainer) => {
                          return (
                            <>
                              <p>{trainer}</p>
                            </>
                          );
                        })}
                      </div>
                    </p>
                    <div>
                      <span className="heading">Frontend Technologies: </span><br />
                      {course.course_details.frontend.map((frontend) => {
                        return (
                          <>
                            <span className="tech">{frontend}</span>
                          </>
                        );
                      })}
                    </div>
                    <div>
                      <span className="heading">Backend Technologies: </span><br />
                      {course.course_details.backend.map((backend) => {
                        return (
                          <>
                            <span className="tech">{backend}</span>
                          </>
                        );
                      })}
                    </div>
                    <div>
                      <span className="heading">Database Technology: </span><br />
                      {course.course_details.database.map((db) => {
                        return (
                          <>
                            <span className="tech">{db}</span>
                          </>
                        );
                      })}
                    </div>
                    <button>Apply</button>
                  </div>
                </>
              );
            })}
          </aside>
        </main>
      </article>
    </section>
  );
};

export default App;
