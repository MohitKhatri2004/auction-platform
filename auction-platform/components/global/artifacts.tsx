import Image from "next/image"

const Artifacts = ({ src }: { src: string }) => {
    return (
        <div className="w-[200px] h-[200px]">
            <Image 
                width={200}
                height={200}
                src={src}
                alt="Artifacts"
                className="rounded-lg"
            />
        </div>
    )
}

export default Artifacts
