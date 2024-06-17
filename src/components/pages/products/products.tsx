"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Products({ products }: { products: any[] }) {
    return (
        <div className="flex-grow flex flex-wrap gap-4 h-fit px-6">
            {products &&
                products?.map((product: any) => (
                    <Card
                        key={product?.id}
                        shadow="none"
                        isPressable
                        className="max-w-[270px] min-w-[270px] h-fit bg-neutral-200"
                        onPress={() => console.log("item pressed")}
                    >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                isZoomed
                                width={270}
                                height={180}
                                src={product?.src}
                                fallbackSrc="https://via.placeholder.com/270x180"
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
    );
}
