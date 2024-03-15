"use client"
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";

export default function Auth() {
    const searchParams = useSearchParams()
    const {push} = useRouter()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{"Auth"}</h1>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    window.document.cookie = "login-state=myCookieValue;"
                    push(searchParams?.get("redirect-url") ?? "/")
                }}
                className={"flex flex-col gap-2"}
            >
                <input type={"email"} className={"text-black"}/>
                <input type={"password"} className={"text-black"}/>
                <button type={"submit"}>
                    {"login"}
                </button>
            </form>
        </main>
    );
}
