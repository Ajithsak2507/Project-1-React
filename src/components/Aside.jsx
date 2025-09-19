import { FaBook, FaRocket, FaReact } from "react-icons/fa"
const relateddoc = [
    {
        icon: <FaBook/>,
        name: "Vite Documentations",
        href: "#"
    },
    {
        icon: <FaReact/>,
        name: "React Guide",
        href: "#"
    },
    {
        icon: <FaRocket/>,
        name: "Frontend Trends",
        href: "#"
    }

]
function Aside() {
    return (
        <aside className="container bg-gray-200 p-6 rounded-lg shadow-lg sm:w-fit">
            <h2 className="font-bold text-2xl">Related Links</h2>
            <ul className="space-y-3 mt-4">
                {
                    relateddoc.map((links, index) => {
                        return <li><a href={links.href} className="flex items-center gap-1 text-blue-500 hover:underline">{links.icon}{links.name}</a></li>
                    })
                }

            </ul>
        </aside>
    )
}
export default Aside