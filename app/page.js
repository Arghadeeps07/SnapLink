import Image from "next/image";
import Link from "next/link";

export default function YourComponent() {
  return (
    <div className="grid grid-cols-2 items-center gap-4 bg-violet-200 ">
      {/* Left Side: Text Area */}
      <div className="h-auto w-full p-4 text-black flex items-center flex-wrap">
        <h1 className="font-bold text-2xl text-center">
          The best URL shortner in the market
        </h1>
        <p>
          Our URL shortener is a fast, reliable, and secure tool designed to
          simplify your links. Whether you're sharing content on social media,
          in emails, or on websites, our service ensures your links are concise,
          easy to remember, and visually appealing
        </p>
        <div className="flex flex-wrap">
          <div className="px-3 bg-violet-500 rounded-lg hover:scale-110 text-white">
            <Link href="/shorten">
              <button>Try Now</button>
            </Link>
          </div>
          <div className="px-3 bg-violet-500 rounded-lg hover:scale-110 mx-4  text-white">
            <Link href="https://github.com/Arghadeeps07">
              <button>Github</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="h-auto w-full flex items-center justify-center ">
        <Image
          src="/whoooa.jpg" // Replace with your image path
          alt="Description of image"
          width={2000} // Adjust width
          height={2240} // Adjust height to match the div height
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
