"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function SampleProducts({
    subTitle,
    products,
}: {
    subTitle: string;
    products: any[];
}) {
    return (
        <div className="mx-4 mb-20">
            <div className="flex justify-between items-center mb-4 mx-8">
                <h2 className="text-2xl">{subTitle}</h2>
                <div className="">
                    <p className="font-light">ดูทั้งหมด</p>
                    {/* <button>&lt;</button>
                    <button>&gt;</button> */}
                </div>
            </div>
            <div className="flex items-center gap-4 overflow-auto pb-4">
                {products &&
                    products?.map((product: any) => (
                        <Card
                            key={subTitle + product?.id}
                            shadow="none"
                            isPressable
                            className="max-w-[450px] min-w-[450px] bg-neutral-200"
                            onPress={() => console.log("item pressed")}
                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    isZoomed
                                    width={450}
                                    height={300}
                                    src={product?.src}
                                    fallbackSrc="https://via.placeholder.com/450x300"
                                    alt="NextUI Image with fallback"
                                />
                            </CardBody>
                            <CardFooter className="flex-col items-start">
                                <p>{product?.name}</p>
                                <p className="text-default-500">
                                    {product?.price || "-- ฿"}
                                </p>
                                <p className="text-default-500">
                                    {product?.city || "Bangkok"}
                                    {", "}
                                    {product?.country || "Thailand"}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
            </div>
        </div>
    );
}
