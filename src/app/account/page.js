
import useUserStore from "@/libs/store"
import Link from "next/link"

const MyAccount =() => {

    return (
        <><Link href="/setter">to Setter</Link> id is {useUserStore.getState().id}</>
    )

}
export default MyAccount