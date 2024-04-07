import Image from "next/image"

const Artifacts = ({ src }: { src: string }) => {
    return (
        <div className="min-w-[200px] min-h-[200px] relative">
            <Image 
                fill
                src={src}
                alt="Artifacts"
                className="rounded-lg"
            />
        </div>
    )
}

export default Artifacts
