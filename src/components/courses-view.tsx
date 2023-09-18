import React, { useState } from "react";
import { type Course } from "~/utils/types";
import c from "../data/courses.json";

// `unknown` conversion is required because TS becomes confused
// and we need to condense all the types first
const courses = c as unknown as Course[];

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col space-y-4 rounded-lg border border-black/20 p-5 shadow">
      {children}
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-xl border border-black/10 px-2 py-0.5">
      {children}
    </div>
  );
};

const DescriptionText = ({ text }: { text: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-3">
      <p className={open ? `line-clamp-none` : `line-clamp-3`}>{text}</p>
      <button
        className="rounded-full bg-gray-100 py-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-800 hover:underline"
        onClick={() => setOpen(!open)}
      >
        {open ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

const CourseComponent = ({
  info,
  initAdded,
  handleCartAdd,
  handleCartRemove,
}: {
  info: Course;
  initAdded: boolean;
  handleCartAdd: () => boolean;
  handleCartRemove: () => void;
}) => {
  const [added, setAdded] = useState(initAdded);
  const { dept, number, title, prereqs, description } = info;

  // we should display *something* if there are no prereqs. this lets
  // the user have a visual confirmation
  const prerequisites = prereqs ? (
    <div className="flex flex-col space-y-1 text-sm">
      <h4 className="font-semibold">Prerequisites</h4>
      <div className="flex flex-wrap gap-1">
        {Array.isArray(prereqs) ? (
          prereqs.map((course) => <Badge key={course}>{course}</Badge>)
        ) : (
          <Badge>{prereqs}</Badge>
        )}
      </div>
    </div>
  ) : (
    <h4 className="text-sm font-semibold text-gray-500">No prerequisites!</h4>
  );

  const addComponent = (
    <button
      className="rounded-full bg-sky-500 py-1.5 text-white hover:bg-sky-600 hover:underline"
      onClick={() => {
        setAdded(handleCartAdd());
      }}
    >
      <span className="font-bold">Add to cart!</span>
    </button>
  );

  const removeComponent = (
    <button
      className="rounded-full bg-red-500 py-1.5 text-white hover:bg-red-600 hover:underline"
      onClick={() => {
        handleCartRemove();
        setAdded(false);
      }}
    >
      <span className="font-bold">Remove from cart</span>
    </button>
  );

  return (
    <Card key={`${dept}-${number}`}>
      <div>
        <h3 className="text-lg font-semibold leading-none">
          {dept} {number}
        </h3>
        <h2>{title}</h2>
      </div>
      {prerequisites}
      <div className="flex flex-col space-y-1 text-sm">
        <h4 className="font-semibold">Description</h4>
        <div className="flex flex-col space-y-2">
          <DescriptionText text={description} />
          {added ? removeComponent : addComponent}
        </div>
      </div>
    </Card>
  );
};

const CoursesView = ({
  cart,
  addToCart,
  removeFromCart,
}: {
  cart: Course[];
  addToCart: (crs: Course) => boolean;
  removeFromCart: (crs: Course) => void;
}) => {
  const [search, setSearch] = useState("");

  // returns a list of courses that match the search query
  const filterCourses = (courses: Course[], search: string) => {
    if (search === "") {
      return courses;
    }

    return courses.filter(({ number, dept, title, description }) => {
      return (
        (dept.toLowerCase() + " " + number).includes(search) ||
        title.toLowerCase().includes(search) ||
        description.toLowerCase().includes(search)
      );
    });
  };

  const courseList = filterCourses(courses, search).map((c) => {
    const added = cart.some((crs) => crs.number === c.number);

    return (
      <CourseComponent
        key={`${c.dept} ${c.number}`}
        info={c}
        initAdded={added}
        handleCartAdd={() => addToCart(c)}
        handleCartRemove={() => removeFromCart(c)}
      />
    );
  });

  return (
    <main className="flex flex-col items-center space-y-8 px-8 pb-8 pt-[calc(2rem+57px)]">
      <section className="flex w-1/3 min-w-[250px] flex-col space-y-3">
        <p className="text-center font-semibold">
          Begin searching for a course name, description, or number!
        </p>
        <input
          type="search"
          className="h-10 w-full rounded-md border border-black/30 bg-gray-50 p-2 text-center"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </section>
      {courseList.length === 0 ? (
        <p className="gap-5 text-zinc-600">
          No courses found! Please refine your search.
        </p>
      ) : (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courseList}
        </section>
      )}
    </main>
  );
};

export default CoursesView;
