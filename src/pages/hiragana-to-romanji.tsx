import {Quiz} from "@/components/Quiz";
import {Layout} from "@/components/Layout";

export  default  function  HiraganaToRomanji() {

    return (
        <Layout title={"Hiragana a Romanji"}>
            <div className={"h-[90vh] w-screen grid place-content-center"}>
                <Quiz />
            </div>
        </Layout>
    )
}