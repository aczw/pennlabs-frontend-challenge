import courses from "../data/courses.json";

const Courses = () => {
  const courseCardsList = courses.map(
    ({ dept, number, title, description }) => (
      <div
        className="w-full rounded-md bg-red-100 p-5"
        key={`${dept}-${number}`}
      >
        <h3>
          {dept} {number}
        </h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    ),
  );

  return <div className="grid grid-cols-3 gap-5 p-5">{courseCardsList}</div>;
};

export default Courses;
