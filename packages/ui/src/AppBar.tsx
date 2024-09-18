import { Button } from "./button";

// figure out signin-out types
interface AppbarProps {
    user?: {
        name?: String | null;
    }
    onSignin: any;
    onSignout: any;
}

export const AppBar = ({ onSignin, onSignout, user }: AppbarProps) => {
    return <div className="flex justify-between border-b border-slate-300 px-4">
        <div className="text-lg flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onclick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}