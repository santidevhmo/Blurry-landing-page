import './App.css'
import ChromeStoreBtn from "./components/ChromeStoreBtn.tsx"
import Instagram from "./components/SVG-Icons/Instagram.tsx"
import TikTok from "./components/SVG-Icons/TikTok.tsx"
import LinkedIn from "./components/SVG-Icons/LinkedIn.tsx"
import Twitter from "./components/SVG-Icons/Twitter.tsx"

function App() {

  return (

    // Parent container : 2 columns with reverse order on mobile
    <div className="flex flex-col-reverse lg:flex-row w-full h-[screen] overflow-hidden">

      {/* Left-side container */}
      <div className="relative flex items-start justify-center w-full lg:w-1/2 min-w-[600px] h-screen motion-preset-fade motion-duration-9000">
        {/* Gradients overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top */}
          <div className="absolute inset-x-0 top-0 h-1/4 lg:h-1/2 bg-gradient-to-b from-white/100 to-transparent" />
          {/* Right */}
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white/80 to-transparent" />
        </div>

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          className="w-[70%] pr-20 sm:pr-0 lg:w-full h-[60vh] lg:h-full object-contain lg:object-cover"
        >
          <source
            src="https://pub-b836ae214f2b4bb291c675cabdbd3b4d.r2.dev/Screen%20Recording%202025-08-09%20at%2012.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Right-side container */}
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center pt-15 lg:pt-0">
        <div>
          {/* Title text container */}
          <div className="pb-5 motion-preset-fade motion-duration-4000 motion-delay-1500">
            <h1 className="text-6xl lg:text-7xl text-left tracking-[-1px] pl-15 lg:pl-0 font-light text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] select-none">Blurred</h1>
            <h1 className="text-6xl lg:text-7xl text-right tracking-[-3px] pr-8 lg:pr-10 mt-[-10px] font-Koh-Santepheap text-transparent bg-clip-text font-light bg-gradient-to-r from-[#9929EA] to-[#CC66DA] select-none">Feed</h1>
          </div>
          {/* Description text */}
          <div className='pb-12 motion-preset-fade motion-duration-4000 motion-delay-2500'>
            <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] select-none">Same social media,</p>
            <p className="text-center mt-[-5px] text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] select-none">Different experience</p>
          </div>

          <ChromeStoreBtn />

          {/* Available social media icons */}
          <div className="flex justify-center pt-12 gap-5 motion-preset-fade motion-duration-4000 motion-delay-4500">
            <Instagram />
            <TikTok />
            <Twitter />
            <LinkedIn />
          </div>
        </div>

        {/* Credits text */}
        <div className='hidden lg:inline motion-preset-fade motion-duration-4000 motion-delay-5500'>
          <a href="https://www.linkedin.com/in/santiagoagdc" target="_blank" className="absolute bottom-0 right-6 pb-3 font-Homemade-apple text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] select-none">Santiago Aguirre.</a>
        </div>

      </div>

    </div>
  )
}

export default App
