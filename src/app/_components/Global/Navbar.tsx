import { CircleUser, Leaf } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link
            href="/home"
            className="flex items-center text-gray-900 font-semibold text-lg tracking-tight"
          >
            <p className="mr-1">EcoSystem</p>
            <Leaf color="#00a63e" />
          </Link>

          <div>
            <CircleUser />
          </div>
        </div>
      </header>

      <div className="h-14"></div>
    </>
  );
}
