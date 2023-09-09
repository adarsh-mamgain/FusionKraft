"use client";
import { useState, useEffect } from "react";
import TodoApp from "@/component/ToDo";
import CompoundInterestCalculator from "@/component/CompoundInterestCalculator";
import ShowImage from "@/component/ShowImage";

const Home = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    bgColor: "#000000",
    fontColor: "#ffffff",
    width: 200,
    height: 200,
  });
  const [cardStyle, setCardStyle] = useState({
    width: user.width + "px",
    height: user.height + "px",
    maxWidth: "300px",
    maxHeight: "200px",
    backgroundColor: user.bgColor,
    color: user.fontColor,
  });

  useEffect(() => {
    setCardStyle((prevStyle) => ({
      ...prevStyle,
      width: user.width + "px",
      height: user.height + "px",
      backgroundColor: user.bgColor,
      color: user.fontColor,
    }));
  }, [user.name, user.bgColor, user.fontColor, user.width, user.height]);

  const [theme, setTheme] = useState("light"); // Default theme is "light"

  const lightThemeClass = "bg-white text-black";
  const darkThemeClass = "bg-black text-white";

  useEffect(() => {
    document.documentElement.className =
      theme === "light" ? lightThemeClass : darkThemeClass;
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex flex-col items-center p-10 text-white">
      <h1 className="text-3xl font-bold mb-5">FusionKraft Showcase</h1>

      <div className="flex items-center justify-center m-4 p-4 md:p-20 space-x-8 md:space-x-16 border rounded-xl">
        <div className="">
          <h2 className="text-3xl font-bold mb-4">useState Hook</h2>
          <p className="text-gray-400">import useState from "react";</p>
          <div className="mt-4">
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-800 border rounded py-2 px-3 w-full"
              value={user.name}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="block flex justify-between mt-4">
            <label htmlFor="bgcolor" className="text-gray-300 font-medium mb-1">
              Background Color:
            </label>
            <input
              type="color"
              id="bgcolor"
              value={user.bgColor}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  bgColor: e.target.value,
                }))
              }
            />
          </div>
          <div className="block flex justify-between mt-4">
            <label
              htmlFor="fontcolor"
              className="block text-gray-300 font-medium mb-1"
            >
              Font Color:
            </label>
            <input
              type="color"
              id="fontcolor"
              value={user.fontColor}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  fontColor: e.target.value,
                }))
              }
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="width"
              className="block text-gray-300 font-medium mb-1"
            >
              Width (px):
            </label>
            <input
              type="number"
              id="width"
              value={user.width}
              className="bg-gray-800 border rounded py-2 px-3 w-full"
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  width: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="height"
              className="block text-gray-300 font-medium mb-1"
            >
              Height (px):
            </label>
            <input
              type="number"
              id="height"
              value={user.height}
              className="bg-gray-800 border rounded py-2 px-3 w-full"
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  height: parseInt(e.target.value),
                }))
              }
            />
          </div>
        </div>
        <div>
          <div
            id="card"
            className="border rounded-lg flex items-center justify-center"
            style={cardStyle}
          >
            <p className="text-lg">
              {user.name ? `Welcome, ${user.name}!` : "Enter Name"}
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-500">max-width: 300px *</p>
          <p className="mt-2 text-sm text-gray-500">max-height: 200px *</p>
        </div>
      </div>

      <TodoApp />

      <CompoundInterestCalculator />
      
      <ShowImage />

      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>

      <footer className="mt-8 text-gray-400">
        <p>
          Built by{" "}
          <a
            className="text-blue-500"
            href="https://github.com/adarsh-mamgain/"
          >
            Adarsh Mamgain
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
