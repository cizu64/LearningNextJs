import { Suspense } from "react";
import Loading from "./loading";
export default function Page()
{
    async function ShowMax()
    {
        await new Promise((resolve)=>{setTimeout(resolve, 1000)}); //to simulate slow loading in order to display the loading component
       
       return ( <p>delay</p> )
    }

    function ShowOther()
    {
        return <p>hello</p>
    }
    return (
        <div>
        <Suspense fallback={<Loading/>}>
            <ShowMax/>
        </Suspense>     
        <ShowOther/>
        </div>
    )
}