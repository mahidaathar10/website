import Image from "next/image";

const StyleSection = () => {
  const styles = [
    { img: "/black.jpeg" }, 
    { img: "/image.jpeg" },
    { img: "/dress2.jpeg" },
    { img: "/dress3.jpeg" },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-6">
        
        <div className="w-12 lg:w-24 flex items-center justify-center mb-6 lg:mb-0">
          <p className="transform -rotate-90 text-xl font-semibold text-gray-700 whitespace-nowrap">
            Explore New and Popular Styles
          </p>
        </div>

        
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          <div className="relative flex justify-center lg:w-1/2 mb-4 lg:mb-0 animate-float">
            <div className="absolute inset-0 animate-light-glare pointer-events-none z-10"></div>
            <Image
              src="/black.jpeg" 
              alt="Main Style"
              width={648} 
              height={648} 
              className="object-cover rounded-lg"
            />
          </div>

          
          <div className="grid grid-cols-2 gap-6 lg:w-1/2">
            {styles.map((style, index) => (
              <div key={index} className="relative w-full h-auto animate-float">
                <div className="absolute inset-0 animate-light-glare pointer-events-none z-10"></div>
                <Image
                  src={style.img}
                  alt={`Style ${index + 2}`} 
                  width={312} 
                  height={312} 
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSection;