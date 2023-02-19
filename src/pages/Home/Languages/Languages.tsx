import { HiLightBulb } from "react-icons/hi";
/* <img className="w-20 mx-auto" src="https://www.svgrepo.com/show/427639/creativity-expertise-idea.svg" alt="head" /> */

const Languages = () => {  

    return (
        <div>
            <div>
              <div className="flex justify-center"><HiLightBulb className="text-8xl dark:text-white"/></div>   
              <h1 className=" text-[40px] text-center font-extrabold dark:text-white">Explore and Practice languages</h1>
            </div> 
            <div className="w-11/12 mx-auto grid gap-y-16 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center mt-10 mb-14">
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-amber-300">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/349419/javascript.svg" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">JavaScript</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-sky-700">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/452091/python.svg" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">Python</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-red-400">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/452234/java.svg" alt="Java" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">Java</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-blue-400">
               <figure className="py-4">
                <img src="https://img.icons8.com/color/256/c-programming.png" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">C</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-blue-400">
               <figure className="py-4">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#283593" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"/><path fill="#5c6bc0" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"/><path fill="#3949ab" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"/></svg>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">C++</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-sky-500">
               <figure className="py-4">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="O2zipXlwzZyOse8_3L2yya" x1="15.189" x2="32.276" y1="-.208" y2="46.737" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><rect width="36" height="36" x="6" y="6" fill="url(#O2zipXlwzZyOse8_3L2yya)"/><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"/><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986	c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92	c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"/></svg>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">TypeScript</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-black">
               <figure className="py-4"> 
                <img src="https://www.svgrepo.com/show/473774/rust.svg" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">RUST</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-rose-700">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/374055/ruby.svg" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">Ruby</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-rose-400">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/374112/swift.svg" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">Swift</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-sky-300">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/303617/kotlin-1-logo.svg" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">Kotlin</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-black">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/330035/battle-dot-net.svg" alt="javascript" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">.NET</p> 
              </div> 
              <div className="card w-28 bg-base-100 shadow hover:shadow-xl border-2 border-indigo-200">
               <figure className="py-4">
                <img src="https://www.svgrepo.com/show/452088/php.svg" alt="php" className="rounded-xl w-14"/>
               </figure>
               <p className="text-center font-semibold font-mono mb-3">PHP</p> 
              </div> 
            </div>  
        </div>
    );
};

export default Languages;