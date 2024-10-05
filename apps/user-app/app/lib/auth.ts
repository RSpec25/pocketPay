import prisma from "@repo/prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
// import z from "zod";

// const cred =z.object({
//     phone: z.string(),
//     password: z.string()
// })

console.log("inside auth component");
//Partial<Record<"phone" | "password", unknown>> 
export const authOption = {
    providers: [
        CredentialsProvider({
            name: "credential",
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "Enter after +91", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            
            async authorize(credentials:Record<"phone" | "password", string> | undefined) {
                //zod otp val - remove type error
                // const success = cred.safeParse(credentials);
                // if(!success){
                //     console.log("invalid types");
                //     return null;
                // }
                if(!credentials){
                    console.log("no creds found")
                    return null;
                }
                console.log(credentials);
                const hash = await bcrypt.hash(credentials.password, 10);
                const exist = await prisma.user.findFirst({
                    where: {
                        number: parseInt(credentials.phone)
                    }
                });
                try {
                    if (exist != null) {
                        const check = await bcrypt.compare(credentials.password, exist.password);
                        if (check) {
                            return {
                                id: exist.id.toString(),
                                name: exist.name,
                                Number: exist.number
                            }
                        }
                        return null;
                    }
                } catch (error) {
                    alert("error while fetching existing data!");
                    console.log("Error", error);
                }

                try {
                    const newUser = await prisma.user.create({
                        data: {
                            number: parseInt(credentials.phone),
                            password: hash
                        }
                    })
                    // send otp to user ph num
                    await prisma.balance.create({
                        data:{
                            amount: 0,
                            locked: 0,
                            userId: newUser.id,
                        }
                    })
                    console.log("new user", newUser);
                    return {
                        id: newUser.id.toString(),
                        name: newUser.name,
                        number: newUser.number
                    }
                } catch (error) {
                    console.log("Error while creating new user", error);
                    alert("Error while signing up")
                }
                return null;
            },

        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // async jwt({ token, user }: any) {
        //     console.log("user in jwt", token, user);
        //     if (user) { // User is available during sign-in
        //         token.id = user.id
        //     }
        //     return token
        // },
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            // console.log("inside session callback", session, token)
            session.user.id = token.sub
            // session.user.number = token.number
            // session.

            return session
        }
    }
}