import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-row gap-4 p-24 m-10">
            <Link href={"/dashboard"}>
                <button className={"bg-green-600 rounded py-2 px-5"}>
                    {"Dashboard"}
                </button>
            </Link>

            <Link href={"/my-wallet"}>
                <button className={"bg-blue-600 rounded py-2 px-5"}>
                    {"My Wallet"}
                </button>
            </Link>
        </main>
    );
}
