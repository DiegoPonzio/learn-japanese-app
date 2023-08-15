import {useState} from "react";
import {getRandomWord, romanjiToHiragana} from "../lib/listOfWords";
import {AiFillHeart, AiFillTrophy} from "react-icons/ai";
import {SubmitHandler, useForm} from "react-hook-form";
import {NotificationManager} from "react-notifications";
import {FaPlay} from "react-icons/fa";

type FormData = {
	nombre: string;
}

export const Quiz = () => {
	const [text, setText] = useState(getRandomWord());
	const [lives, setLives] = useState(3);
	const [score, setScore] = useState(0);

	const { handleSubmit, formState: { errors }, register } = useForm();

	const checkAnswer: SubmitHandler<FormData>  = (data) => {
		const {nombre} = data;
		if (romanjiToHiragana(nombre.toLowerCase(), text)) {
			NotificationManager.success("Wiii!!", "Respuesta correcta");
			setScore(score + 1);
			setText(getRandomWord());
		} else {
			NotificationManager.error("Oh no!!", "Respuesta incorrecta");
			setLives(lives - 1);
		}
	}

	const resetGame = () => {
		setLives(3);
		setScore(0);
		setText(getRandomWord());
	}

	return (
		<div className="w-full max-w-xs md:max-w-4xl">
			{ lives === 0 && (NotificationManager.error("Oh no!!", "Haz perdido")) }
			{ lives === 0 ? (
				<div className="bg-neutral-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div className={"flex items-center justify-end"}>
						<div className={"flex items-center"}>
							<AiFillTrophy color={"#FFD54F"} size={30} />
							<h1 className={"text-lg font-bold mr-2"} suppressHydrationWarning>{score}</h1>
						</div>
					</div>
					<div className="container ml-auto mr-auto flex flex-wrap items-start mt-8">
						<div className="w-full pl-2 pr-2 mb-4 mt-4">
							<h1 className="text-xl font-extrabold text-center">¡¡Suerte para la próxima!!</h1>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={resetGame} >
							<FaPlay className={"mr-2 self-center"} />
							Jugar
						</button>
					</div>
				</div>
			) : (
				<form className="bg-neutral-600 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(checkAnswer)}>
					<div className={"flex items-center justify-between"}>
						<div className={"flex items-center"}>
							{new Array(lives).fill(0).map((_, i) => (
								<AiFillHeart key={`live_${i}`} color={"#E57373"} size={30} />
							))}
						</div>
						<div className={"flex items-center"}>
							<AiFillTrophy color={"#FFD54F"} size={30} />
							<h1 className={"text-lg font-bold mr-2"}>{score}</h1>
						</div>
					</div>
					<div className="container ml-auto mr-auto flex flex-wrap items-start mt-8">
						<div className="w-full pl-2 pr-2 mb-4 mt-4">
							<h1 className="text-xl font-extrabold text-center">Dado el siguiente texto en Hiragana, conviértelo a Romanji</h1>
						</div>
					</div>
					<div className="mb-4">
						<h1 className={"text-6xl text-center"} suppressHydrationWarning>
							{text}
						</h1>
					</div>
					<div className="mb-6">
						<div className="relative z-0 w-full mb-6 group">
							<input type="text" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...register("nombre", { required: true, maxLength: 50, pattern: /^[a-zA-Z\u00C0-\u017f\s]+$/ })} />
							<label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Romanji
							</label>
							{errors.nombre && <p className="text-red-500 text-xs italic">Palabra no válida</p>}
						</div>
					</div>
					<div className="flex items-center justify-between">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Checar
						</button>
					</div>
				</form>
			)}
		</div>
	)
}