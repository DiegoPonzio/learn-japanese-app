import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {FC, useState} from "react";
import {Tonggle} from "@/components/Tonggle";
import Head from "next/head";

interface MyProps {
	children: JSX.Element | JSX.Element[];
	title?: string;
}

export const Layout: FC<MyProps> = ({ children, title }) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="componente recetas - Diego Ruiz Ponzio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={"flex items-center justify-between px-4"}>
				<div className={"max-lg:overflow-hidden max-md:max-w-[90vw] h-full flex justify-between items-center"}>
					<Link href={"/"} className={"text-5xl text-red-500"}>
						Ninja Quest
					</Link>
				</div>
				<div className={"md:hidden w-7 h-3 relative z-[2] transition-transform duration-[0.4s] ease-in-out"} onClick={() => setOpen(!open)}>
					{open ? <AiOutlineClose /> : <GiHamburgerMenu />}
				</div>
				<nav className={"max-md:hidden"}>
					<div className={"m-0 p-0"}>
						<ul className={"flex flex-col md:flex-row justify-between items-center mx-2 px-2 gap-5"}>
							{/*
							<li>
								<Link href={"/"}>
									Conocenos
								</Link>
							</li>
							<li>
								<Link href={"/"}>
									Contacto
								</Link>
							</li>
							<li>
								<Link href={"/"}>
									Login
								</Link>
							</li>
							*/}
							<li className={"mt-3"}>
								<Tonggle/>
							</li>
						</ul>
					</div>
				</nav>
				{/* Mobile */}
				<nav className={`md:hidden w-full h-screen bg-white dark:bg-[#1A1A1A] fixed top-0 left-0 z-[1] transition-transform duration-[0.4s] ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'} mt-16`}>
					<div className={"m-0 p-0"}>
						{/*
						<ul className={"flex flex-col md:flex-row justify-between items-center mx-2 px-2 gap-5"}>
							<li>
								<Link href={"/"}>
									Conocenos
								</Link>
							</li>
							<li>
								<Link href={"/"}>
									Contacto
								</Link>
							</li>
						</ul>
						*/}
						<div className={"flex justify-end items-end mx-5 py-20"}>
							<Tonggle/>
						</div>
					</div>
				</nav>
			</header>
			<main>
				{children}
			</main>
		</>
	)
}