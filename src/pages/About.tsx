const image1 = "/images/dan-choi.jpg";
const image2 = "/images/sneakers.jpg";
const image3 = "/images/télécharger.jpg";

const AboutPage = () => {
  const images = [image1, image2, image3];

  return (
    <div className="aboutPage h-full w-3/4 mx-auto rounded-lg mb-[10%] mt-[20%] md:mt-[10%]  flex flex-col justify-around ">
      <h2 className="text-3xl capitalize underline text-justify   mb-10 ">about us :</h2>
      <p className="w-11/12 mx-auto  mb-10 ">
        Welcome to [Your Store Name], your go-to destination for the latest in
        shoes, t-shirts, and sneakers! Discover a curated collection blending
        style, comfort, and functionality. Whether it's street-style sneakers or
        statement tees, find unique pieces from iconic brands and emerging
        designers. Our commitment to quality ensures products that stand the
        test of time. Explore our store for a seamless, enjoyable, and memorable
        shopping experience. Thank you for choosing [Your Store Name]. Let's
        make a statement together on this fashion journey!
      </p>
      <div className="  justify-center items-center grid  md:grid-cols-2 lg:grid-cols-3 gap-2">
        {images.map((img) => (
          <div key={img} className="mr-2">
            <img
              src={img}
              alt=""
              className="w-60 h-60 rounded-lg border-4 border-slate-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
