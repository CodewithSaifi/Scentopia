import React, { useState } from "react";

const Upload = () => {
  const [photo, setPhoto] = useState(null);

  return (
    <div className="flex flex-col items-center gap-[16px]">
      {/* Square Image Preview */}
      <div className="w-[50rem] h-[50rem] overflow-hidden">
        <img
          src={photo || "/sample-profile-img.png"}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        id="fileUpload"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) setPhoto(URL.createObjectURL(file));
        }}
      />

      {/* Custom Button */}
      <label
        htmlFor="fileUpload"
        className="cursor-pointer py-[.8rem] px-[2.4rem] bg-[#7e747f] text-white rounded-[8px] hover:opacity-90 text-[2rem]"
      >
        Choose Image
      </label>
    </div>
  );
};

export default Upload;
