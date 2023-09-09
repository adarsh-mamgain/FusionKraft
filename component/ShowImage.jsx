const ShowImage = () => {
  return (
    <>
      <div className=" m-4 p-4 md:p-20 border rounded-xl">
        <h2 className="text-3xl font-semibold mb-4">Lazy Image Loading</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-20 md:space-y-none md:space-x-8 md:space-x-16">
          <img
            className="animate-pulse"
            src="https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
            alt="Lazy-loaded Image"
            loading="lazy"
            width="300"
            height="200"
          />
          <img
            className="animate-bounce"
            src="https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
            alt="Lazy-loaded Image"
            loading="lazy"
            width="300"
            height="200"
          />
        </div>
      </div>
    </>
  );
};

export default ShowImage;
