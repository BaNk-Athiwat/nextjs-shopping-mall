"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

export default function Header() {

    const router = useRouter();

    const handleLogout = async () => {
        deleteCookie('token');
        router.push('/login');
    }
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";
    
    return (
        <div className="">
            {isLoginPage ? null : (
                <>
                    <div className="flex justify-between items-center min-h-9 px-12 text-xs font-medium">
                        <div>logo</div>
                        <ul className="flex pr-2">
                            <li className="flex items-center tracking-wider">
                                <Link href={""} className="hover:text-gray-500">
                                    ค้นหาร้าน
                                </Link>
                                <div className="border-r border-black align-baseline h-3 m-3"></div>
                            </li>
                            <li className="flex items-center tracking-wider">
                                <Link href={""} className="hover:text-gray-500">
                                    ความช่วยเหลือ
                                </Link>
                                <div className="border-r border-black align-baseline h-3 m-3"></div>
                            </li>
                            <li className="flex items-center tracking-wider">
                                <Link href={"/manage"} className="hover:text-gray-500">
                                    {/* เข้าร่วมกับเรา */}
                                    จัดการสินค้า
                                </Link>
                                <div className="border-r border-black align-baseline h-3 m-3"></div>
                            </li>
                            <li className="flex items-center tracking-wider">
                                <button
                                    onClick={() => handleLogout()}
                                    type="button"
                                    className="hover:text-gray-500"
                                >
                                    {/* ลงชื่อเข้าใช้ */}
                                    ลงชื่อออก
                                </button>
                            </li>
                        </ul>
                    </div>
                    <header className="bg-neutral-200 flex justify-between items-center relative min-h-[60px] px-12 text-xs font-medium">
                        <div>logo</div>
                        <nav className="flex justify-center items-center absolute left-0 w-full text-base">
                            <ul className="flex">
                                <li className="flex items-center tracking-wider">
                                    <Link
                                        href={""}
                                        className="hover:text-gray-500 px-3"
                                    >
                                        ทำเลน่าสนใจ
                                    </Link>
                                </li>
                                <li className="flex items-center tracking-wider">
                                    <Link
                                        href={""}
                                        className="hover:text-gray-500 px-3"
                                    >
                                        ใหม่และโดดเด่น
                                    </Link>
                                </li>
                                <li className="flex items-center tracking-wider">
                                    <Link
                                        href={""}
                                        className="hover:text-gray-500 px-3"
                                    >
                                        บ้านเดี่ยว
                                    </Link>
                                </li>
                                <li className="flex items-center tracking-wider">
                                    <Link
                                        href={""}
                                        className="hover:text-gray-500 px-3"
                                    >
                                        ทาวน์โฮม
                                    </Link>
                                </li>
                                <li className="flex items-center tracking-wider">
                                    <Link
                                        href={""}
                                        className="hover:text-gray-500 px-3"
                                    >
                                        คอนโดมิเนียม
                                    </Link>
                                </li>
                                <li className="flex items-center tracking-wider">
                                    <Link
                                        href={""}
                                        className="hover:text-gray-500 px-3"
                                    >
                                        ที่ดิน
                                    </Link>
                                </li>
                                {/* <li className="flex items-center tracking-wider">
                                    <Link
                                        href={""}
                                        className="hover:text-gray-500 px-3"
                                    >
                                        SNKRS
                                    </Link>
                                </li> */}
                            </ul>
                        </nav>
                        <div>
                            <input
                                type="search"
                                className="bg-gray-100 rounded-full h-9"
                            />
                        </div>
                    </header>
                </>
            )}
        </div>
    );
}
