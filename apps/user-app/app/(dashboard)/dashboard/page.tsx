
import { NavBar } from "@repo/ui/NavBar";
import { SideBar } from "@repo/ui/SideBar";
import { redirect } from 'next/navigation'

export default function Page(): JSX.Element {
    return <div>
        {/* <NavBar /> */}
        {/* <SideBar routing={(path: string) => {
            redirect(path)
        }} /> */}
        Dashboard
    </div>
}