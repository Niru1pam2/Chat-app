import React, { useState } from "react";

import { RiSearchEyeLine } from "react-icons/ri";
import useConversation from "../store/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";
function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLocaleLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <form className="flex items-center gap-2 p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn ">
        <RiSearchEyeLine className="h-6 w-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
