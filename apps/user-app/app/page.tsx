// "use client"
// import { AppBar } from "@repo/ui/AppBar";
// import { signIn, signOut, useSession } from "next-auth/react";




// export default function Page(): JSX.Element {
//   const session = useSession();
//   return (
//     <div >
//       <AppBar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
//       {/* {JSON.stringify(session)}; */}
//     </div >
//   );
// }
import { getServerSession } from "next-auth";
import { authOption } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOption);
  if (session) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}

