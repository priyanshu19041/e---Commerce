// import React from "react";

// const Home = () => {
//   return (
//     <>
//       <div className="hero border-1 pb-3">
//         <div className="card bg-dark text-white border-0 mx-3">
//           <img
//             className="card-img img-fluid"
//             src="./assets/main.png.jpg"
//             alt="Card"
//             height={500}
//           />
//           <div className="card-img-overlay d-flex align-items-center">
//             <div className="container">
//               <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
//               <p className="card-text fs-5 d-none d-sm-block ">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <video 
            className="card-img img-fluid" 
            src="./assets/8306452-hd_1366_720_25fps.mp4 " // <-- Add your video source here
            autoPlay 
            loop 
            muted 
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block">
              "Style is a way to say who you are without having to speak." – Rachel Zoe
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
