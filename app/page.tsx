import { useState, useEffect } from "react";

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

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-4">FusionKraft Showcase</h1>

      <div className="flex items-center justify-center m-4 space-x-8 md:space-x-16">
        <div>
          <h2 className="text-2xl font-bold mb-3">useState Hook</h2>
          <p className="text-neutral-600">
            import useState from "react";
          </p>
          <div className="mt-4">
            <label
              htmlFor="name"
              className="block text-neutral-800 font-medium mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="bg-neutral-100 border rounded py-2 px-3 w-full"
              value={user.name}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="bgcolor"
              className="block text-neutral-800 font-medium mb-1"
            >
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
          <div className="mt-2">
            <label
              htmlFor="fontcolor"
              className="block text-neutral-800 font-medium mb-1"
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
          <div className="mt-2">
            <label
              htmlFor="width"
              className="block text-neutral-800 font-medium mb-1"
            >
              Width (px):
            </label>
            <input
              type="number"
              id="width"
              value={user.width}
              className="bg-neutral-100 border rounded py-2 px-3 w-full"
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  width: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="height"
              className="block text-neutral-800 font-medium mb-1"
            >
              Height (px):
            </label>
            <input
              type="number"
              id="height"
              value={user.height}
              className="bg-neutral-100 border rounded py-2 px-3 w-full"
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
        </div>
      </div>
      <footer className="mt-8 text-neutral-500">
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
