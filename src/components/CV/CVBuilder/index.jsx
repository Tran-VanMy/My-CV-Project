import React, { useEffect, useRef, useState } from "react";
import Profile from "../CVEditor/Profile";
import Summary from "../CVEditor/Summary";
import Skills from "../CVEditor/Skills";
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
  skills: [],
  experiences: [],
  projects: [],
  education: [],
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
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <Profile data={data} setData={setData} />
          <Summary data={data} setData={setData} />
          <Skills data={data} setData={setData} />
          
          <div className="flex gap-2 mt-4">
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
        
        <div className="md:col-span-2 md:ml-5">
          <CVPreview data={data} previewRef={previewRef} />
        </div>
      </div>
    </div>
  );
}
