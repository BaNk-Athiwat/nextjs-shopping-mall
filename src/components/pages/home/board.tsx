"use client";

import {
    Image,
} from "@nextui-org/react";

export default function Board({ content }: { content: any }) {
    return (
        <div className="flex justify-center items-center overflow-hidden mx-auto my-16 w-[1100px] h-[450px]">
            <Image
                width={1100}
                height={450}
                src={content?.src}
                className="object-cover"
                fallbackSrc="https://via.placeholder.com/1100x450"
                alt="NextUI Image with fallback"
            />
        </div>
    );
}
