import { CgCodeSlash } from "react-icons/cg";
import { Link } from "react-router-dom";

const SharpenSkill = () => {
    return (
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 bg-[#5B3A3A] rounded-xl p-4 md:p-8 lg:p-16'>
            <div className="text-white p-4">
                <CgCodeSlash className="bg-red-500 p-4 text-6xl rounded-xl mb-4" />
                <h3 className="text-3xl font-bold mb-4">Sharpen Your Coding Skills</h3>
                <p className="text-xl mb-4">
                    Looking to sharpen your coding skills? Skill Judge has got you covered! Our platform offers a range of immersive challenges and tutorials designed to help programmers of all levels learn new concepts, refine their skills, and challenge themselves in a fun and engaging way.
                </p>
                <button className="btn btn-outline btn-wide text-white">Join our Community</button>
            </div>
            <div className="p-4 my-auto">
                <div className="rounded-md bg-gradient-to-r from-[#636E81] via-[#8D7E6B] to-[#B48F5D] p-1">
                    <div className="text-white grid grid-cols-2">
                        <div className="bg-gradient-to-r from-[#404550] to-[#4F483F]">
                            <div className="p-4">
                                <p>Try Your First Challenge</p>
                                <p className="border p-1 my-4">You can choose your favorite language out of 45 languages in our site</p>
                                <Link to={'/problems/63ee482eacf0f771a6451178'} className="btn btn-outline btn-sm w-full text-white">Accept the challenge</Link>
                            </div>
                        </div>
                        <div className="bg-[#312C27]">
                            <div className="p-4">
                                <p className="mb-4">Hello World!</p>
                                <p className="mb-4">
                                    Example in  Python: <br />
                                    print("Hello, World!")
                                </p>
                                <p className="bg-[#131414] rounded-lg p-2">
                                    Output: <br />
                                    Hello, World!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharpenSkill;