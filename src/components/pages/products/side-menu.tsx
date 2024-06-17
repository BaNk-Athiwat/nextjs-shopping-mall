export default function SideMenu() {
    const menus: any[] = [
        { id: "1", name: "บ้านเดี่ยว", url: "/products/home" },
        { id: "2", name: "บ้านแฝด", url: "/products/condo" },
        { id: "2", name: "ทาวน์โฮม", url: "/products/condo" },
        { id: "2", name: "คอนโดมิเนียม", url: "/products/condo" },
        { id: "3", name: "ที่ดิน", url: "/products/land" },
    ];
    return (
        <div className="flex flex-col items-center gap-4 border-r border-r-neutral-200 min-w-60 min-h-screen p-4">
            {menus && menus?.map((menu: any) =>
                <div key={menu.id}>
                    {menu.name}
                </div>
            )}
        </div>
    );
}
