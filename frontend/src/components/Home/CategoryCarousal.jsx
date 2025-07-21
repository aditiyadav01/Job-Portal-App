import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "FullStack Developer",
  "Mobile App Developer",
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Cybersecurity Analyst",
  "UI/UX Designer",
  "Graphic Designer",
  "Product Manager",
  "Project Manager",
  "Quality Assurance (QA)",
  "Technical Writer",
  "Business Analyst",
  "Database Administrator",
  "System Administrator",
  "Network Engineer",
  "Blockchain Developer",
  "AI Engineer",
  "Game Developer",
  "Software Tester",
  "IT Support",
  "Digital Marketing",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="overflow-hidden">
      <Carousel className="w-full max-w-3xl mx-auto px-4 my-20">
        <CarouselContent className="gap-2 sm:gap-4">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full w-[90%] sm:w-full text-sm sm:text-base bg-black text-white"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:-left-6 bg-black text-white" />
        <CarouselNext className="right-2 sm:-right-6 bg-black text-white" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
