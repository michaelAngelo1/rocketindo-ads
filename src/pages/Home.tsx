import { Link } from "react-router";

function Home() {
    return (
        <div className="lexend-deca-medium flex flex-col gap-3 items-center">
            <div className="text-2xl">Home</div>

            <div className="flex gap-2">Go to 
                <Link className="underline cursor-pointer" to="/rose-jelly-mask">Rose Jelly Mask</Link>
            </div>
        </div>
    )
}

export default Home;