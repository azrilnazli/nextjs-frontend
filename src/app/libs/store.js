import { create } from 'zustand'

const user = {
    email: null,
    loggedIn: false,
    token: null
}
const useUserStore = create( () => (user)) // create store
export default useUserStore