"use client";

import { useAppContext } from "@/context/appContext";
import headerBlueLogo from "@/public/images/logo.png";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/utils/LanguageSwitcher"

type TNavItem = {
    id: number;
    name: string;
    link: string;
    dropdownMenu?: TNavItem[];
    twoCols?: boolean;
};

const navbarLinks: TNavItem[] = [
    {
        id: 1,
        name: "Главная",
        link: "/",
        // dropdownMenu: [
        // 	{
        // 		id: 101,
        // 		name: "Home one",
        // 		link: "/",
        // 	},
        // 	{
        // 		id: 102,
        // 		name: "Home two",
        // 		link: "/home-two",
        // 	},
        // ],
    },
    // {
    // 	id: 2,
    // 	name: "Pages",
    // 	link: "",
    // 	dropdownMenu: [
    // 		{
    // 			id: 201,
    // 			name: "About",
    // 			link: "/about",
    // 		},
    // 		{
    // 			id: 202,
    // 			name: "Contact",
    // 			link: "/contact",
    // 		},
    // 		{
    // 			id: 203,
    // 			name: "Blog",
    // 			link: "/blogs",
    // 		},
    // 		{
    // 			id: 204,
    // 			name: "Article",
    // 			link: "/blogs/using-ai-to-write-articles-how-i-churn-out-2000-words",
    // 		},
    // 		{
    // 			id: 205,
    // 			name: "Use cases",
    // 			link: "/use-cases",
    // 		},
    // 		{
    // 			id: 206,
    // 			name: "Case details",
    // 			link: "/use-cases/digital-ad-copy",
    // 		},
    // 		{
    // 			id: 207,
    // 			name: "Pricing",
    // 			link: "/pricing-plans",
    // 		},
    // 		{
    // 			id: 208,
    // 			name: "Login",
    // 			link: "/login",
    // 		},
    // 		{
    // 			id: 209,
    // 			name: "Register",
    // 			link: "/register",
    // 		},
    // 		{
    // 			id: 210,
    // 			name: "Forgot password",
    // 			link: "/forgot-password",
    // 		},
    // 		{
    // 			id: 211,
    // 			name: "404",
    // 			link: "/404",
    // 		},
    // 	],
    // 	twoCols: true,
    // },
    {
        id: 2,
        name: "О нас",
        link: "/about",
    },
    {
        id: 3,
        name: "Кейсы",
        link: "/use-cases",
    },
    {
        id: 4,
        name: "Стоимость",
        link: "/pricing-plans",
    },
    {
        id: 5,
        name: "Контакты",
        link: "/contact",
    },
];

const navbarLinksEn: TNavItem[] = [
    {
        id: 1,
        name: "Home",
        link: "/",
        // dropdownMenu: [
        // 	{
        // 		id: 101,
        // 		name: "Home one",
        // 		link: "/",
        // 	},
        // 	{
        // 		id: 102,
        // 		name: "Home two",
        // 		link: "/home-two",
        // 	},
        // ],
    },
    // {
    // 	id: 2,
    // 	name: "Pages",
    // 	link: "",
    // 	dropdownMenu: [
    // 		{
    // 			id: 201,
    // 			name: "About",
    // 			link: "/about",
    // 		},
    // 		{
    // 			id: 202,
    // 			name: "Contact",
    // 			link: "/contact",
    // 		},
    // 		{
    // 			id: 203,
    // 			name: "Blog",
    // 			link: "/blogs",
    // 		},
    // 		{
    // 			id: 204,
    // 			name: "Article",
    // 			link: "/blogs/using-ai-to-write-articles-how-i-churn-out-2000-words",
    // 		},
    // 		{
    // 			id: 205,
    // 			name: "Use cases",
    // 			link: "/use-cases",
    // 		},
    // 		{
    // 			id: 206,
    // 			name: "Case details",
    // 			link: "/use-cases/digital-ad-copy",
    // 		},
    // 		{
    // 			id: 207,
    // 			name: "Pricing",
    // 			link: "/pricing-plans",
    // 		},
    // 		{
    // 			id: 208,
    // 			name: "Login",
    // 			link: "/login",
    // 		},
    // 		{
    // 			id: 209,
    // 			name: "Register",
    // 			link: "/register",
    // 		},
    // 		{
    // 			id: 210,
    // 			name
    // 			: "Forgot password",
    // 			link: "/forgot-password",
    // 		},
    // 		{
    // 			id: 211,
    // 			name: "404",
    // 			link: "/404",
    // 		},
    // 	],
    // 	twoCols: true,
    // },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "Use cases",
        link: "/use-cases",
    },
    {
        id: 4,
        name: "Pricing",
        link: "/pricing-plans",
    },
    {
        id: 5,
        name: "Contact",
        link: "/contact",
    },
];

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
	const lang = usePathname().split("/")[1].toString();
	const data = lang === "en" ? navbarLinksEn : navbarLinks;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeDropdownId, setActiveDropdownId] = useState(0);

    const { headerHeightInit } = useAppContext();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const headerHeight = headerRef.current?.clientHeight;
            if (headerHeight) {
                document.body.style.paddingTop = headerHeight + "px";
                headerHeightInit(headerHeight);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleSticky);
        }

        return () => {
            window.removeEventListener("scroll", handleSticky);
        };
    }, []);

    return (
        <nav
            className={classNames("navbar navbar-expand-lg fixed-top", {
                "bg-dark": isMenuOpen,
                "headroom--pinned bg-dark": isSticky,
            })}
            ref={headerRef}
            data-bs-theme="dark"
        >
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <Image src={headerBlueLogo} alt="GenAi" height={60} priority />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <div className="navbar-toggler-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div
                    className={classNames("collapse navbar-collapse", {
                        show: isMenuOpen,
                    })}
                >
                    <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
                        <ul className="navbar-nav gap-lg-2 gap-xl-5">
                            {data.map((navLink) => (
                                <NavbarLinkItem
                                    key={navLink.id}
                                    data={navLink}
                                    activeDropdownId={activeDropdownId}
                                    setActiveDropdownId={setActiveDropdownId}
                                    collapseMenu={() => setIsMenuOpen(false)}
                                />
                            ))}
                        </ul>
                        <div className="w-100">
                            <LanguageSwitcher />
                        </div>
                        <div className="">
                            <Link href="/contact" className="btn btn-outline-primary-dark">
                                {lang === "en" ? "Contact us" : "Связаться с нами"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

type TNavbarLinkItemProps = {
    data: TNavItem;
    activeDropdownId: number;
    setActiveDropdownId: React.Dispatch<React.SetStateAction<number>>;
    collapseMenu: () => void;
};

function NavbarLinkItem({
    data,
    activeDropdownId,
    setActiveDropdownId,
    collapseMenu,
}: TNavbarLinkItemProps) {
    const { id, name, link, dropdownMenu, twoCols } = data;

    const handleDropdownToggle = (e: SyntheticEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            if (window.innerWidth < 992) {
                if (activeDropdownId === id) {
                    setActiveDropdownId(0);
                } else {
                    setActiveDropdownId(id);
                }
            }
        }
    };

    return (
        <li
            className={classNames("nav-item", {
                dropdown: !!dropdownMenu,
            })}
        >
            {dropdownMenu && dropdownMenu?.length ? (
                <React.Fragment>
                    <a
                        className={classNames("nav-link dropdown-toggle", {
                            active: activeDropdownId === id,
                        })}
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-current="page"
                        onClick={(e) => handleDropdownToggle(e)}
                    >
                        {name}
                    </a>
                    <ul
                        className={classNames("dropdown-menu", {
                            "megamenu megamenu-cols-2": !!twoCols,
                            show: activeDropdownId === id,
                        })}
                    >
                        {dropdownMenu.map((dropItem) => (
                            <li key={dropItem.id}>
                                <Link
                                    className="dropdown-item "
                                    href={dropItem.link}
                                    onClick={collapseMenu}
                                >
                                    {dropItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <Link className="nav-link" href={link} onClick={collapseMenu}>
                    {name}
                </Link>
            )}
        </li>
    );
}
