import React from "react";
import Preview_Profile from "./Preview_Profile";
import Preview_Skills from "./Preview_Skills";
import Preview_Summary from "./Preview_Summary";
import Preview_Contact from "./Preview_Contact";
import Preview_Experiences from "./Preview_Experiences";
import Preview_Project from "./Preview_Project";

export default function CVPreview({ data, previewRef }) {
  return (
    <div className="bg-white p-6 rounded shadow overflow-auto">
      <div
        ref={previewRef}
        className="mx-auto bg-white text-gray-800"
        style={{ width: 800, padding: 24 }}
      >
        {/* Header */}
        <div className="bg-white p-6 rounded shadow overflow-auto">
          <div className="w-full bg-indigo-600 text-white rounded-t p-4 flex gap-4 items-center">
            <Preview_Profile data={data} />
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="col-span-1">
            <section className="mb-4">
              <Preview_Skills data={data} />
            </section>

            <section className="mb-4">
              <Preview_Contact data={data} />
            </section>
          </div>

          <div className="col-span-2">
            <section className="mb-4">
              <Preview_Summary data={data} />
            </section>

            <section className="mb-4">
              <Preview_Experiences data={data} />
            </section>

            <section className="mb-4">
              <Preview_Project data={data} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
