import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// import "@egjs/react-flicking/dist/flicking-inline.css";
import { FaStar } from "react-icons/fa";

const TestiMonial = () => {
    return (
        <div className="py-10">
            <h1 className="text-2xl font-bold text-center mt-3 mb-10">Testimonials</h1>
            <Flicking
                className="flex justify-between"
                align="prev"
                circular={true}
                onMoveEnd={e => {
                    console.log(e);
                }}>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>
                <div className="panel w-96 h-96">
                    <div className="flex items-center gap-3 my-3">
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740223728~exp=1740227328~hmac=dea634f84a59908a25ada70ab92ee09476053a9e17804296f78cc3d88c21ef54&w=1060" alt="" />
                        <div>
                            <h1 className="font-bold">Nash Patrik</h1>
                            <p className="font-semibold">CEO,Manpol</p>
                        </div>
                    </div>
                    <p className="opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum libero provident quibusdam, perspiciatis autem ea sapiente fuga. Eum, consequuntur.</p>

                    <div className="flex items-center mt-3">
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                        <FaStar style={{ color: '#FFAC0C' }} />
                    </div>

                </div>

            </Flicking>
        </div>
    );
};

export default TestiMonial;