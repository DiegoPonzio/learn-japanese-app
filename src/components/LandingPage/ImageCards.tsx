import Link from "next/link";
import Image from "next/image";
import {FC} from "react";
import {HiOutlineArrowLongRight} from "react-icons/hi2";

interface  MyProps {
	title: string;
	description: string;
	image: string;
	link: string;
}
export const ImageCards: FC<MyProps> = ({ title, image, description, link }) => {
	return (
		<div className={"flex flex-col"}>
			<Image src={image} alt={"abeja"} width={"200"} height={"200"} className={"w-10/12 object-cover object-center rounded-lg shadow-md dark:bg-amber-50 self-center"} priority />
			<div className={"relative px-4 -mt-6"}>
				<div className={"bg-white p-6 rounded-lg shadow-lg dark:bg-neutral-700"}>
					<h4 className={"mt-1 text-xl font-semibold uppercase leading-tight truncate text-yellow"}>{title}</h4>
					<div className={"mt-1"}>
						<p>
							{description}
						</p>
					</div>
					<div className={"mt-4"}>
						<Link
							href={link}
							className="inline-block rounded bg-red-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#F6F6C1] transition duration-150 ease-in-out hover:bg-red-500 hover:text-gray-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
							data-te-ripple-init
							data-te-ripple-color="light">
							Saber más
							<HiOutlineArrowLongRight className="inline-block ml-2 text-center text-lg" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}