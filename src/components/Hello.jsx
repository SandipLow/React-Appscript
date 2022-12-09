import { useEffect, useState } from "react"
import { server } from "../server"

export default function Hello() {

    const [hello, setHello] = useState("Loading...")

    useEffect(()=>{
        server.hello()
            .then(res=> setHello(res))
            .catch(e=> alert(e))
    }, [])

    return (
        <>
        <div style={{backgroundImage: "url(https://i.pinimg.com/originals/e8/d9/4e/e8d94e1e8b6b530ad315e9385290141b.jpg)"}} className="relative h-screen w-screen text-white">
            <h1 className="text-center pt-40 text-5xl">Hello React and Appscript...!</h1>
            <span className="block mt-40 text-center text-3xl">Hello from appscript server : "{hello}"</span>
            <div className="absolute bottom-0 text-xl py-6 text-center bg-black bg-opacity-60 w-full">
                <span>Creator and Maintainer : </span><a className="text-green-400" href="https://sandiplow.github.io">Sandip Low</a>
            </div>
        </div>
        </>
    )
}
