import { Link } from "react-router";

function Home() {
    return (
        <div className="lexend-deca-medium flex flex-col gap-3 items-center justify-center h-screen overflow-hidden">
            <div className="text-2xl">Home</div>

            <div className="flex gap-2">Go to 
                <Link className="underline cursor-pointer" to="/rose-jelly-mask">Rose Jelly Mask</Link>
            </div>
            <div className="flex gap-2">Go to 
                <Link className="underline cursor-pointer" to="/polynia-pomegranate">Polynia Pomegranate</Link>
            </div>
        </div>
    )
}

export default Home;