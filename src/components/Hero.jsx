import {

} from "react-icons/fa"
function Hero() {
    return (
        <>
            <section className="bg-gray-200 text-center py-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCNlr114udk91XPvvOGBfmKH-vKDZjdnyqg&s" className="mx-auto mb-4 rounded-lg shadow-lg" alt="" />
                <h1 className="text-3xl font-bold">Build Amazing UIs with React & White</h1>
                <p className="text-gray-700 mt-2">Fast, Lightweight, and modern frontend development.</p>
                <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-800 transition text-white mt-4">Get Started</button>
            </section>
        </>
    )
}
export default Hero