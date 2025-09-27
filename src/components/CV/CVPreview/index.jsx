import React from "react";
import Preview_Profile from "./Preview_Profile";
import Preview_Section from "./Preview_Section";
import Preview_Summary from "./Preview_Summary";
import Preview_Contact from "./Preview_Contact";
import Preview_Experiences from "./Preview_Experiences";
import Preview_Project from "./Preview_Project";
import Preview_Education from "./Preview_Education";

export default function CVPreview({ data, previewRef }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
      <div
        ref={previewRef}
        className="mx-auto bg-white border border-gray-200 text-gray-800 w-full max-w-[794px] rounded-lg shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="w-full bg-gradient-to-r from-indigo-700 to-indigo-500 text-white px-8 py-6 flex gap-6 items-center">
          <Preview_Profile data={data} />
        </div>

        {/* Body */}
        <div className="grid grid-cols-3 gap-8 p-8">
          {/* Left column */}
          <div className="col-span-1 space-y-6 divide-y divide-gray-300  bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
            <section className="pb-6">
              <Preview_Section
                data={data}
                field="skills"
                nameSection="Kỹ Năng :"
              />
            </section>

            <section className="pb-6">
              <Preview_Contact
                data={data}
                field="contacts"
                nameSection="Liên Hệ :"
              />
            </section>

            <section className="pb-6">
              <Preview_Education
                data={data}
                field="educations"
                nameSection="Học Vấn :"
              />
            </section>

            <section className="pb-6">
              <Preview_Section
                data={data}
                field="languages"
                nameSection="Ngôn Ngữ :"
              />
            </section>
          </div>

          {/* Right column */}
          <div className="col-span-2 space-y-8 divide-y divide-gray-300">
            <section className="pb-6">
              <Preview_Summary
                data={data}
                nameSection={`Tóm tắt / Mục tiêu :`}
              />
            </section>

            <section className="pb-6">
              <Preview_Experiences
                data={data}
                field="experiences"
                nameSection="Kinh Nghiệm :"
              />
            </section>

            <section className="pb-6">
              <Preview_Project
                data={data}
                field="projects"
                nameSection="Dự Án :"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
