import React, { useEffect, useRef, useState } from "react";
import Profile from "../CVEditor/Profile";
import Summary from "../CVEditor/Summary";
import Section from "../CVEditor/Section";
import Experience from "../CVEditor/Experience";
import Education from "../CVEditor/Education";
import Contact from "../CVEditor/Contact";
import Project from "../CVEditor/Project";
import ScrollButtons from "../../ScrollButtons";

import CVPreview from "../CVPreview";
import { saveAsImage } from "../utils/saveAsImage";

const DEFAULT = {
  profile: {
    name: "Nguyễn Văn A",
    title: "Frontend Developer",
    avatar: "/assets/avatarsUser/avatar-default.jpg",
    email: "nguyenvana@example.com",
    phone: "0123 456 789",
    location: "Huế, Việt Nam",
    website: "https://portfolio.example",
    github: "github.com/yourname",
    linkedin: "linkedin.com/in/yourname",
  },
  summary: "Kỹ sư phần mềm chuyên về front-end...",
};

export default function CVBuilder() {
  const [data, setData] = useState(() => {
    try {
      const s = localStorage.getItem("mycv_v1");
      return s ? JSON.parse(s) : DEFAULT;
    } catch {
      return DEFAULT;
    }
  });

  const previewRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("mycv_v1", JSON.stringify(data));
  }, [data]);

  function clearAll() {
    if (!window.confirm("Xóa toàn bộ thông tin?")) return;
    localStorage.removeItem("mycv_v1");
    setData(DEFAULT);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <Profile data={data} setData={setData} />
          <Summary data={data} setData={setData} nameSection={`Tóm tắt / Mục tiêu`} />
          <Education data={data} setData={setData} field="educations" nameSection="Học Vấn" />
          <Section data={data} setData={setData} field="skills" nameSection="Kỹ Năng" />
          <Section data={data} setData={setData} field="languages" nameSection="Ngôn Ngữ" />
          <Experience data={data} setData={setData} field="experiences" nameSection="Kinh Nghiệm" />
          <Project data={data} setData={setData} field="projects" nameSection="Dự Án" />
          <Contact data={data} setData={setData} field="contacts" nameSection="Liên Hệ" />
          
          
          <div className="flex gap-2 mt-2">
            <button className="!bg-black text-white flex-1" onClick={clearAll}>
              Xóa thông tin
            </button>
            <button
              className="!bg-black text-white flex-1"
              onClick={() => saveAsImage(previewRef, data.profile.name)}
            >
              Lưu ảnh CV
            </button>
          </div>
        </div>
        
        <div className="md:col-span-3 md:ml-5">
          <CVPreview data={data} previewRef={previewRef} />
        </div>

        {/* Nút scroll lên/xuống */}
        <ScrollButtons />
      </div>
    </div>
  );
}
