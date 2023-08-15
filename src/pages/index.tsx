import {Quiz} from "@/components/Quiz";
import {NotificationContainer} from "react-notifications";

export default function Home() {
  return (
      <div className={"h-screen w-screen grid place-content-center"}>
          <Quiz />
          <NotificationContainer />
      </div>
  )
}
