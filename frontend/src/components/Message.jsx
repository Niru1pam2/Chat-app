import React from "react";

function Message() {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://avatar.iran.liara.run/public"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-600">
        You were the Chosen One!
      </div>
      <div className="chat-footer opacity-50 flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}

export default Message;
