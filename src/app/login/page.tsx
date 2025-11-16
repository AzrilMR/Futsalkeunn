import Link from "next/link";

export default function Login() {
    return (
    <div className="flex items-center justify-center mt-20">
        <form className="bg-[#FAFAFA] p-10 rounded-lg shadow-lg items-center w-80">
            <h1 className="text-center text-3xl font-semibold">WELCOME</h1>
            <input
                placeholder="Username"
                type="text"
                className="border border-gray-300 rounded-md p-2 w-60 mt-6"
            />
            <input
                placeholder="Password"
                type="password"
                className="border border-gray-300 rounded-md p-2 w-60 mt-4"
            />
            <input
                type="submit"
                className="bg-[#204B57] text-white p-2 rounded-md mt-4 hover:bg-black-200 cursor-pointer w-60"
            />
        </form>
    </div>
    );
}