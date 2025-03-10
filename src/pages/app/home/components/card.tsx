import { Tag } from "./tag";

interface CardProps {
    title: string;
    description: string;
    tag?: string[];
}

export function Card({ title, description, tag }: CardProps) {
    return (
        <div className="bg-[#F5F5DC] flex flex-col w-[470px] h-[555px] rounded-4xl p-7">
            <h2 className="font-bold text-[#501E0D] text-[24px] text-center">{title}</h2>
            <div className="flex felx-row justify-center gap-5 my-5">
                {tag?.map((tag) => {
                    return (
                        <Tag text={tag} />
                    )
                })}
            </div>
            <div className="font-[400] text-[#501E0D] text-[20px] text-justify overflow-y-auto max-h-[460px] pr-2">
                {description}
            </div>
        </div>
    );
}