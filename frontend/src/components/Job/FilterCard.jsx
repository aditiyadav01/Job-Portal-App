import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi NCR",
      "Bangalore",
      "Hyderabad",
      "Gurgaon",
      "Pune",
      "Mumbai",
      "Chennai",
      "Ahmedabad",
      "Remote",
      "Kolkata",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "Data Scientist",
      "DevOps Engineer",
      "UI/UX Designer",
      "Project Manager",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-1LPA",
      "1LPA-5LPA",
      "5LPA-10LPA",
      "10LPA-15LPA",
      "15LPA-20LPA",
      "Negotiable",
      "Internship Stipend",
    ],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [expanded, setExpanded] = useState({}); // Track expanded state for each filter section
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  const toggleShowMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      <h1 className="font-bold text-xl mb-3">Filter Jobs</h1>
      <hr className="mb-4" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => {
          const showAll = expanded[index];
          const displayedItems = showAll ? data.array : data.array.slice(0, 5);

          return (
            <div key={index} className="mb-5">
              <h1 className="font-semibold text-lg mb-2">{data.filterType}</h1>

              {displayedItems.map((item, idx) => {
                const itemId = `id${index}-${idx}`;
                return (
                  <div key={idx} className="flex items-center space-x-2 my-1">
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                );
              })}

              {data.array.length > 5 && (
                <button
                  onClick={() => toggleShowMore(index)}
                  className="text-sm text-purple-600 mt-1 hover:underline"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
