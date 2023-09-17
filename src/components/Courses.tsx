import React, { useState } from "react";
import c from "../data/courses.json";

type Course = {
  dept: string;
  number: string;
  title: string;
  prereqs?: string | string[];
  description: string;
};

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
        className="rounded-md bg-gray-100 py-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 hover:underline"
        onClick={() => setOpen(!open)}
      >
        {open ? "see less" : "see more"}
      </button>
    </div>
  );
};

const Courses = () => {
  const courseList = courses.map(
    ({ dept, number, title, prereqs, description }) => {
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
        <h4 className="text-sm font-semibold text-gray-500">
          No prerequisites!
        </h4>
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
            <DescriptionText text={description} />
          </div>
        </Card>
      );
    },
  );

  return (
    <main className="grid grid-cols-1 gap-5 px-8 pb-8 pt-[calc(2rem+57px)] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courseList}
    </main>
  );
};

export default Courses;
