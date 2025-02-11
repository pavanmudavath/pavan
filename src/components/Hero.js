import ProfilePic from '../../public/ProfilePic.png';
import Image from 'next/image';

export const Hero = () => {
  return (
        <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <Image width={120}  height={100}  src={ProfilePic} alt="ProfileImage"/>
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl text-gray-300">
          I build amazing web experiences
        </p>
      </section>
    </div>
  )
}
