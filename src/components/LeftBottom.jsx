import React, { useState } from "react";

const LeftBottom = () => {
  const [slideNumber, setSlideNumber] = React.useState(0);
  const imageListRef = React.useRef();
  const [dist, setDist] = React.useState(0);
  const [images, setImages] = useState({
    imageList: [
      "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    len: 4,
  });

  const handleChange = (e) => {
    const file = e.target.files[0];
    if(file) {
        const url = URL.createObjectURL(file);
        const imagesArray = [url,...images.imageList]
        setImages({imageList: imagesArray,len: images.len+1})
    }
  }

  const handleClick = (side) => {
    const width = imageListRef.current.getBoundingClientRect().width
    const clicks = images.len - Math.floor((width - 10)/155)
    if (side === "left" && slideNumber > 0) {
      imageListRef.current.style.transform = `translateX(${dist + 170}px)`;
      setDist(dist + 170);
      setSlideNumber(slideNumber - 1);
    }
    if (side === "right" && slideNumber < clicks) {
      imageListRef.current.style.transform = `translateX(${dist - 170}px)`;
      setDist(dist - 170);
      setSlideNumber(slideNumber + 1);
    }
  };
  return (
    <div className="min-h-[46%] rounded-[18.89px] bg-[#363C43] shadow-rightShadow">
      <div className="flex gap-2 h-full py-[14px] px-[10px]">
        <div className="flex flex-col w-[6%] h-1/2 justify-between md:min-w-[28px]">
          <img src="/question.png" alt="" className="w-6 h-6 object-cover" />
          <img src="/blocks.png" alt="" className="w-6 h-6 object-cover" />
        </div>
        <div className="flex flex-col gap-5 flex-start w-[94%] justify-between">
          <div className="flex h-[62px] items-center justify-between">
            <div className="h-full font-medium text-xl text-white rounded-[20px] min-w-[100px] flex items-center justify-center shadow-[0px_4px_10px_2px_#00000040_inset] bg-[#171717]">
              Gallery
            </div>
            <div className="flex md:gap-5 xl:gap-10 items-center">
                <input onChange={handleChange} type="file" name="imgUpload" id="imgUpload" className="hidden" />
              <label for="imgUpload" className="flex items-center justify-center cursor-pointer text-white text-xs bg-[#363C43] shadow-imageBtnShadow rounded-full h-[50px] font-bold tracking-wider px-5">
                + ADD IMAGE
              </label>
              <div className="flex md:pr-2 items-center gap-4">
                <div
                  onClick={() => handleClick("left")}
                  className="hover:border-gray-700 hover:border bg-gradient-to-br cursor-pointer from-[#303439] to-[#161718] w-[45px] h-[45px] rounded-full flex items-center justify-center shadow-arrowShadow"
                >
                  <img src="/arrow.png" alt="" className="" />
                </div>
                <div
                  onClick={() => handleClick("right")}
                  className="hover:border-gray-700 hover:border bg-gradient-to-br cursor-pointer from-[#303439] to-[#161718] w-[45px] h-[45px] rounded-full flex items-center justify-center shadow-arrowShadow"
                >
                  <img
                    src="/arrow.png"
                    alt=""
                    className="transform rotate-180"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full h-full">
            <div
              className="transition-all p-[5px] w-full h-full flex gap-5"
              ref={imageListRef}
            >
              {images.imageList.map((image,i) => (
                <div key={i} className="min-w-[150px] h-full rounded-[24px]">
                  <img
                    className="transition-all  w-[150px] h-full rounded-[24px] object-cover hover:scale-105"
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBottom;
