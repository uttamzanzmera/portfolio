import React from "react";
import test from "../Images/test.jpg"
import test1 from "../Images/test1.jpg"
import test2 from "../Images/test2.jpg"
import test3 from "../Images/test3.jpg"
import test4 from "../Images/test4.jpg"
import test5 from "../Images/test5.jpg"
import test6 from "../Images/test6.jpg"
import test7 from "../Images/test7.jpg"
import test8 from "../Images/test8.jpg"
import test9 from "../Images/test9.jpg"

const { useEffect, useState } = React;

// Data
const initialImages = [
  {
    img: test,
    name: "Image 1",
    desc: "Description for Image 1",
  },
  {
    img: test1,
    name: "Image 2",
    desc: "Description for Image 2",
  },
  {
    img: test2,
    name: "Image 3",
    desc: "Description for Image 3",
  },
  {
    img: test3,
    name: "Image 4",
    desc: "Description for Image 4",
  },
  {
    img: test4,
    name: "Image 5",
    desc: "Description for Image 5",
  },
  {
    img: test5,
    name: "Image 6",
    desc: "Description for Image 6",
  },
  {
    img: test6,
    name: "Image 7",
    desc: "Description for Image 7",
  },
  {
    img: test7,
    name: "Image 8",
    desc: "Description for Image 8",
  },
  {
    img: test8,
    name: "Image 9",
    desc: "Description for Image 9",
  },
  {
    img: test9,
    name: "Image 10",
    desc: "Description for Image 10",
  },
];

// Carousel
const Testonomial = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 3000); // Change the interval (in milliseconds) as desired

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    // Get the next index
    const nextIndex = (currentIndex + 1) % images.length;

    // Update the state with the new current index
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to create a circular index based on the current index and array length
  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center mt-5">What Our Valuable Clients Say</h1>
            <div className="carousel-container">
              <div className="d-flex flex-column">
                <div className="carousel-items">
                  {/* Render 5 items on the screen */}
                  {Array(5)
                    .fill()
                    .map((_, index) => {
                      const imageItem =
                        images[
                          getCircularIndex(
                            currentIndex + index - 2,
                            images.length
                          )
                        ];
                      return (
                        <div
                          key={index}
                          className={`${index === 2 ? "center" : "opacity"} ${
                            (index === 0 || index === 4) &&
                            "end d-none d-md-block d-lg-block"
                          }
                    ${
                      (index === 1 || index === 3) &&
                      "d-none d-md-block d-lg-block"
                    }`}
                          onClick={() =>
                            handleItemClick(
                              getCircularIndex(
                                currentIndex + index - 2,
                                images.length
                              )
                            )
                          }
                        >
                          <img className="carousal-img" src={imageItem.img} alt="item" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {/* Render the current item description */}
                  <div className="description">
                    <p>
                      <b>{images[currentIndex].name}</b>
                    </p>
                    <p>{images[currentIndex].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testonomial;
