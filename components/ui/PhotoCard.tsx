import Image from "next/image"

export const PhotoCard = () => {
    return (
        <div className="lg:col-span-6 flex justify-center lg:justify-end animate-fade-up-delay-3">
            <div className="relative">
                {/* Available badge */}
                <div className="animate-fade-up-delay-4 absolute -top-4 -right-4 z-10 bg-[#C8FF00] text-charcoal text-[10px] tracking-widest uppercase font-bold px-4 py-2 rounded-full rotate-12 shadow-lg">
                    Open to work
                </div>

                {/* Portrait frame */}
                <div className="w-[300px] h-[380px] md:w-[400px] md:h-[480px] rounded-2xl overflow-hidden bg-charcoal/5 relative border border-charcoal/10 shadow-xl">
                    {/* Profile image */}
                    <Image
                        src="/Profile/clean_image.png"
                        alt="Abhishek Raut"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient overlay at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <p className="text-cream/95 font-display text-lg font-bold">Abhishek Raut</p>
                        <p className="text-cream/60 text-xs tracking-wider uppercase mt-1">Full-Stack Engineer</p>
                    </div>
                </div>

                {/* Decorative circle */}
                <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full border-2 border-charcoal/10" />
                {/* Small decorative dot */}
                <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#C8FF00]/30" />
            </div>
        </div>
    )
}