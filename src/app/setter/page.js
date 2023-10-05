
import useUserStore from "@/libs/store"
import Link from "next/link"

const MyAccount =() => {

    //useUserStore.setState({ 'email' : 'azril.nazli@gmail.com' })
    useUserStore.setState({ 'id' : 'azril.nazli@gmail.com' })
  
    return (
        <><Link href="/account">to Account</Link> </>
    )

}
export default MyAccount