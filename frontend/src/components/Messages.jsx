import React from "react";
import Message from "./Message";

function Messages() {
  return (
    <div className="overflow-auto px-4 flex-1">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
