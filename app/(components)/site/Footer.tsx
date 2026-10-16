import Link from "next/link";
import Image from "next/image";
import {FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube} from "react-icons/fa6";

export default function Footer() {
    const companyLinks = [
        { title: "About Us", url: "/about" },
        { title: "Lab Setup Services", url: "/lab-setup" },
        { title: "Shop STEM Kits", url: "https://shop.navoyantra.com" },
        { title: "Parent Company (YuvaYantra)", url: "https://www.yuvayantra.com" },
        { title: "Contact Us", url: "/contact" },
    ];

    const resources = [
        { title: "Tech Community", url: "/community" },
        { title: "Gallery", url: "/#gallery" },
        { title: "Privacy Policy", url: "#" },
    ];

    const social = [
        {title: "Facebook", url: "https://www.facebook.com/share/196QB9vSGs/", icn: <FaFacebook />},
        {title: "Instagram", url: "https://www.instagram.com/navoyantra?igsh=MWMwYWZocmU4bG40cQ==", icn: <FaInstagram />},
        {title: "LinkedIn", url: "https://www.linkedin.com/company/125584049/admin/dashboard/", icn: <FaLinkedin />},
        {title: "YouTube", url: "https://www.youtube.com/@NavoYantraTechnology", icn: <FaYoutube />},
        {title: "Pinterest", url: "https://pin.it/3bzKwscKZ", icn: <FaPinterest />},
    ];

    return (
        <footer className="w-full border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20">
                {/* Top */}
                <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Image
                            src="/navoyantra-logo.png"
                            width={260}
                            height={68}
                            alt="NavoYantra - STEM Kits & Lab Solutions"
                            priority
                            className="logo-img w-48 lg:w-56 h-auto"
                        />
                        <p className="max-w-sm text-neutral-600 leading-relaxed text-sm">
                            Empowering schools, institutions & learners with turnkey STEM, Robotics, AI & IoT lab infrastructure.
                        </p>
                        <p className="max-w-sm text-neutral-500 text-xs">
                            A brand of{" "}
                            <a 
                                href="https://www.yuvayantra.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-semibold text-primary hover:text-accent underline transition-colors"
                            >
                                YuvaYantra Technology Pvt. Ltd.
                            </a>
                        </p>
                        <div>
                            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500">Office</p>
                            <p className="mt-4 text-gray-500 leading-7">
                                1/10726-A KH No. 1622/62,
                                <br />
                                Gali No. 2, Subhash Park,
                                <br />
                                Naveen Shahdara,
                                <br />
                                Delhi - 110032
                            </p>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">Company</h3>
                        <div className="space-y-4">

                            {companyLinks.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    target={item.url.startsWith("http") ? "_blank" : "_self"}
                                    className="block transition hover:translate-x-2 hover:text-blue-600 font-medium text-neutral-700"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">Resources</h3>
                        <div className="space-y-4">
                            {resources.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="block transition hover:translate-x-2 hover:text-blue-600 text-neutral-700"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">Connect</h3>
                        <div className="space-y-4">
                            {social.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="flex transition hover:translate-x-2 hover:text-black text-neutral-700 items-center gap-2"
                                >
                                    <span>{item.icn}</span>
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-14 border-t border-neutral-200"/>
                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-5 text-sm text-neutral-500 md:flex-row">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/navoyantra-logo.png"
                            width={200}
                            height={52}
                            alt="NavoYantra - STEM Kits & Lab Solutions"
                            priority
                            className="logo-img w-36 lg:w-44 h-auto"
                        />
                    </div>
                    <p className="text-center md:text-left text-xs md:text-sm text-neutral-600">
                        © {new Date().getFullYear()} NavoYantra. All rights reserved by{" "}
                        <a 
                            href="https://www.yuvayantra.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-semibold text-neutral-800 hover:text-primary transition-colors underline"
                        >
                            YuvaYantra Technology Pvt. Ltd.
                        </a>
                    </p>
                    <Link
                        href="/contact"
                        className="tracking-[0.3em] uppercase transition hover:translate-x-2 hover:text-blue-500 hover:font-semibold"
                    >
                        Let's Innovate →
                    </Link>
                </div>
            </div>
        </footer>
    );
}