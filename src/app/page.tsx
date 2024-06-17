import Board from "@/components/pages/home/board";
import SampleProducts from "@/components/pages/home/sample-products";

export default function HomePage() {
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
    ];

    const content = {
        name: "Miss Matthew Kutch",
        src: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        id: "1",
    };

    return (
        <div className="">
            <Board content={content} />
            <SampleProducts
                subTitle={"มีอะไรใหม่ในสัปดาห์นี้"}
                products={products}
            />
            <SampleProducts subTitle={"เลือกซื้อบ้าน"} products={products} />
            <SampleProducts subTitle={"เลือกซื้อคอนโด"} products={products} />
            <SampleProducts subTitle={"เลือกซื้อที่ดิน"} products={products} />
            <SampleProducts subTitle={"มองหาทั้งหมด"} products={products} />
        </div>
    );
}
