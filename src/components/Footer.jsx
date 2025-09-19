import {
    FaFacebook, FaTwitter, FaInstagram
} from "react-icons/fa"
const website = [
    {
        name: "Facebook",
        icon: <FaFacebook />,
        href: "#"
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        href: "#"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        href: "#"
    }
]
function Footer() {
    return (
        <footer className="bg-blue-950 text-white text-center py-4">
            <p>@2025 My Website. All rights Reserved</p>
            <div className="flex space-x-2 justify-center">
                {website.map((links) =>
                    <a href={links.href} className="flex gap-1 items-center hover:text-blue-400">{links.icon}{links.name}</a>
                )}

            </div>
        </footer>
    )
}
export default Footer