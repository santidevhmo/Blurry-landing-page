'use client';

const ChromeStoreBtn = () => {

  return (
    <button
      className="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-200 group cursor-pointer transform active:scale-90 motion-preset-fade motion-duration-4000 motion-delay-3500"
    >
      <div
        className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]"
      >
        <div className="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
      </div>
      <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
      <div
        className="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"
      ></div>
      <div
        className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"
      ></div>
      <div
        className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"
      ></div>
      <div
        className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"
      ></div>
      <div className="relative flex items-center justify-center gap-2">
        <span
          className="inline-flex gap-4 text-lg font-normal bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadgow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter select-none"
        >
          Download on the Chrome Web Store 
          {/* <img className="w-6 fill-[#B873F8]" src="/chromeStore.svg" alt="Chrome Store Icon" /> */}
        </span>
      </div>
      <div
        className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#8155A0]/40 via-[#E8C5FF]/30 to-[#8155A0]/40 group-hover:opacity-100 rounded-lg"
      ></div>
    </button>

  );
};

export default ChromeStoreBtn;