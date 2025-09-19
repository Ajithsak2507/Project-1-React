import {
    FaHome, FaInfoCircle, FaEnvelope, FaServicestack
} from "react-icons/fa"
const navlink = [
    {
        name: "Home",
        icon: <FaHome />,
        href: "#"
    }, {
        name: "About",
        icon: <FaInfoCircle />,
        href: "#"
    }, {
        name: "Service",
        icon: <FaServicestack />,
        href: "#"
    }, {
        name: "Contact",
        icon: <FaEnvelope />,
        href: "#"
    }
]
function Navbar() {
    return (
        <>
            <nav className="bg-blue-950 p-4 text-white sticky top-0">
                <div className="flex items-center justify-between mx-16">
                    <div className="flex items-center gap-1">
                        <img src="./images/startup.png" alt="" width={25} />
                        <h1 className="font-bold text-2xl">My Website</h1>
                    </div>
                    <ul className="flex space-x-6">
                        {navlink.map((link) => {
                            return <li>
                                <a href={link.href} className="flex items-center gap-1 hover:text-blue-500">{link.icon}{link.name}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar