import React from "react";

function Conversation() {
  return (
    <>
      <div className="flex gap-2 p-2 py-1 items-center hover:bg-purple-400 rounded cursor-pointer hover:transition">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/8"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John doe</p>
            <span className="text-xl">😅</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

export default Conversation;
