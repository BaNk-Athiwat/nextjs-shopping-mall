import Products from "@/components/pages/products/products";
import SideMenu from "@/components/pages/products/side-menu";

export default function ProductPage({
    searchParams,
}: {
    searchParams?: {
        category?: string;
        location?: string;
    };
}) {
    const products = [
        {
            name: "Mrs. May Graham MD",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "1",
        },
        {
            name: "Ms. Suzanne Mayert",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "2",
        },
        {
            name: "Nora Emmerich III",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "3",
        },
        {
            name: "Caroline Langosh",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "4",
        },
        {
            name: "Olivia Schumm",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "5",
        },
        {
            name: "Miss Matthew Kutch",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "6",
        },
        {
            name: "Miss Matthew Kutch",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "66",
        },
        {
            name: "Miss Matthew Kutch",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "666",
        },
        {
            name: "Miss Matthew Kutch",
            src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
            id: "6666",
        },
        // {
        //     name: "Miss Matthew Kutch",
        //     src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        //     id: "66666",
        // },
        // {
        //     name: "Miss Matthew Kutch",
        //     src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        //     id: "666666",
        // },
        // {
        //     name: "Miss Matthew Kutch",
        //     src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        //     id: "6666666",
        // },
        // {
        //     name: "Miss Matthew Kutch",
        //     src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        //     id: "66666666",
        // },
        // {
        //     name: "Miss Matthew Kutch",
        //     src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        //     id: "666666666",
        // },
        // {
        //     name: "Miss Matthew Kutch",
        //     src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        //     id: "6666666666",
        // },
    ];

    const category = searchParams?.category || '';
    const location = searchParams?.location || '';
    let title = category ? category + '_' + location : "ทั้งหมด";

    return (
        <div className="pt-16">
            <div className="flex items-center px-12 mb-4 min-h-14">
                <p className="w-fit text-2xl">{title}</p>
                <p className="ml-auto mr-2 w-fit">เรียงตาม</p>x
            </div>
            <div className="flex px-10">
                <SideMenu />
                <Products products={products} />
            </div>
        </div>
    );
}
