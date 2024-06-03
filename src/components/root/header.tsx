"use client";

import Link from "next/link";

export default function Header() {

  return (
    <div className="">
        <div className="flex justify-between items-center bg-gray-100 min-h-9 px-12 text-xs font-bold">
            <div>
                logo
            </div>
            <ul className="flex pr-2">
                <li className="flex items-center tracking-wider">
                    <Link href={''} className="hover:text-gray-500">
                        ค้นหาร้าน
                    </Link>
                    <div className="border-r border-black align-baseline h-3 m-3"></div>
                </li>
                <li className="flex items-center tracking-wider">
                    <Link href={''} className="hover:text-gray-500">
                        ความช่วยเหลือ
                    </Link>
                    <div className="border-r border-black align-baseline h-3 m-3"></div>
                </li>
                <li className="flex items-center tracking-wider">
                    <Link href={''} className="hover:text-gray-500">
                        เข้าร่วมกับเรา
                    </Link>
                    <div className="border-r border-black align-baseline h-3 m-3"></div>
                </li>
                <li className="flex items-center tracking-wider">
                    <Link href={''} className="hover:text-gray-500">
                        ลงชื่อเข้าใช้
                    </Link>
                </li>
            </ul>
        </div>
        <header className="flex justify-between items-center relative min-h-[60px] px-12 text-xs font-bold">
            <div>logo</div>
            <nav className="flex justify-center items-center absolute left-0 w-full text-base font-bold">
                <ul className="flex">
                    <li className="flex items-center tracking-wider">
                        <Link href={''} className="hover:text-gray-500 px-3">
                            ใหม่และโดดเด่น
                        </Link>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={''} className="hover:text-gray-500 px-3">
                            ผู้ชาย
                        </Link>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={''} className="hover:text-gray-500 px-3">
                            ผู้หญิง
                        </Link>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={''} className="hover:text-gray-500 px-3">
                            เด็ก
                        </Link>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={''} className="hover:text-gray-500 px-3">
                            ลดราคา
                        </Link>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={''} className="hover:text-gray-500 px-3">
                            ออกแบบเองกับ
                        </Link>
                    </li>
                    <li className="flex items-center tracking-wider">
                        <Link href={''} className="hover:text-gray-500 px-3">
                            SNKRS
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <input type="search" className="bg-gray-100 rounded-full h-9" />
            </div>
        </header>
    </div>
  );
}
