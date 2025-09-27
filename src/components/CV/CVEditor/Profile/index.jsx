import React, { useState } from "react";

export default function Profile({ data, setData }) {

    function handleProfileChange(field, value) {
        setData((p) => ({ ...p, profile: { ...p.profile, [field]: value } }));
    }

    function handleAvatarChange(e) {
        const f = e?.target?.files?.[0]; // lấy file đầu tiên mà user chọn (ảnh)
        if (!f) return; // nếu không có file thì thoát
        const reader = new FileReader();  // tạo đối tượng FileReader để đọc file
        reader.onload = (ev) => handleProfileChange("avatar", ev.target.result); // khi đọc xong file, ta lấy kết quả ev.target.result chính là chuỗi Base64 đó
        reader.readAsDataURL(f); // chuyển file ảnh thành một chuỗi Base64
    }

    return (
        <div className="pb-4">
            <div className="bg-white p-6 rounded-2xl shadow-md border">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Thông tin cá nhân</h3>

                {/* Avatar upload */}
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <img
                            src={data.profile.avatar}
                            alt="avatar"
                            className="w-24 h-24 object-cover rounded-full border shadow-sm group-hover:opacity-80 transition"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Tải ảnh:
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4
                                       file:rounded-full file:border-0 file:text-sm file:font-semibold
                                       file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                </div>

                {/* Inputs */}
                <div className="mt-5 grid gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Họ và tên</label>
                        <input
                            className="w-full input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Nhập họ và tên"
                            value={data.profile.name}
                            onChange={(e) => handleProfileChange("name", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Chức danh</label>
                        <input
                            className="w-full input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Nhập chức danh"
                            value={data.profile.title}
                            onChange={(e) => handleProfileChange("title", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                        <input
                            className="w-full input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Nhập email"
                            value={data.profile.email}
                            onChange={(e) => handleProfileChange("email", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Số điện thoại</label>
                        <input
                            className="w-full input border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Nhập số điện thoại"
                            value={data.profile.phone}
                            onChange={(e) => handleProfileChange("phone", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
