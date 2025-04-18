import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden pt-[72px]">
      {/* Background Video */}
      <video  
        className="absolute top-0 left-0 w-full h-full object-cover z-0"  
        src="/WEBSITE_DRAFTT.mp4"  
        autoPlay  
        muted  
        loop  
        playsInline  
      />

      {/* Overlay */}  
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />  

      {/* Content */}  
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] z-20 text-center flex flex-col items-center justify-center px-4 text-white max-w-3xl w-full">  
        <img src="/logo.png" alt="Logo" className="w-48 mb-6" />  
        <h1 className="text-2xl md:text-4xl font-semibold mb-6">  
          Partner with us and experience the Intouch advantage in the world of precision engineering.  
        </h1>  
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-72} // Adjust this value if your header height is different
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f8bf18",
              color: "#262626",
              "&:hover": {
                backgroundColor: "#262626",
                color: "#f8bf18",
              },
              paddingX: "2rem",
              paddingY: "0.5rem",
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: "12px",
            }}
          >
            Get InTouch
          </Button>
        </Link>
      </div>  
    </section>
  );
};

export default HeroSection;


// import React from "react";
// import { Button } from "@mui/material";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full min-h-[80vh] overflow-hidden pt-[72px]">
//       {/* Background Video */}
//       <video  
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"  
//         src="/WEBSITE_DRAFTT.mp4"  
//         autoPlay  
//         muted  
//         loop  
//         playsInline  
//       />

//       {/* Overlay */}  
//       <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />  

//       {/* Content */}  
//       <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] z-20 text-center flex flex-col items-center justify-center px-4 text-white max-w-3xl w-full">  
//         <img src="/logo.png" alt="Logo" className="w-48 mb-6" />  
//         <h1 className="text-2xl md:text-4xl font-semibold mb-6">  
//           Partner with us and experience the Intouch advantage in the world of precision engineering.  
//         </h1>  
//         <a href="tel:+919814944610">  
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#f8bf18",
//               color: "#262626",
//               "&:hover": {
//                 backgroundColor: "#262626",
//                 color: "#f8bf18",
//               },
//               paddingX: "2rem",
//               paddingY: "0.5rem",
//               fontSize: "1rem",
//               textTransform: "none",
//               borderRadius: "12px",
//             }}
//           >
//             Start
//           </Button>
//         </a>
//       </div>  
//     </section>
//   );
// };

// export default HeroSection;
