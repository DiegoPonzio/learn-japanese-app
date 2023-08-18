import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-notifications/dist/react-notifications.css'
import {ThemeProvider} from "next-themes";
import {NotificationContainer} from "react-notifications";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <NotificationContainer />
      </ThemeProvider>
  )
}
