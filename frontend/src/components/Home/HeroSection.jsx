import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-6">
        <span className="mx-auto px-4 py-1.5 rounded-full bg-red-50 text-[#F83002] font-semibold text-sm sm:text-base shadow-sm">
          🚀 No. 1 Job Hunt Website
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Search, Apply & <br />
          Get Your{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Dream Jobs
          </span>
        </h1>

        <p className="text-sm sm:text-base max-w-xl mx-auto text-gray-600">
          Find the job that fits your life, not just your resume.
        </p>

        <div className="flex w-full max-w-xl mx-auto border border-gray-200 pl-4 rounded-full items-center gap-2 shadow-lg backdrop-blur-sm bg-white/80 transition">
          <input
            type="text"
            placeholder="Find your dream jobs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full py-3 bg-transparent text-sm sm:text-base placeholder-gray-400"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6A38C2] px-2 hover:bg-[#582e9f] transition"
          >
            <Search className="h-6 w-7 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
