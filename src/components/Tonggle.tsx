import {useTheme} from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const Tonggle = () => {
	const {systemTheme, theme, setTheme} = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme
	const changeTheme = () => {
		if (theme === 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	const isCheck = currentTheme === 'dark'

	return (
		<label className="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" checked={isCheck} className="sr-only peer" onChange={changeTheme} />
			<div className="block h-8 w-14 rounded-full bg-red-400 dark:bg-red-700"></div>
			<div className="absolute top-0 left-0 h-8 w-8 rounded-full transition-transform transform peer-checked:translate-x-6 bg-red-700 dark:bg-red-400 flex items-center justify-center">
				{ isCheck ? <MdOutlineLightMode className="text-neutral-300 text-2xl mx-auto my-auto" /> : <MdOutlineDarkMode className="text-white text-2xl mx-auto my-auto" /> }
			</div>
			<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" suppressHydrationWarning>{isCheck ? "Modo Oscuro" : "Modo Claro"}</span>
		</label>
	)
}