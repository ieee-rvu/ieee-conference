export function Footer() {
  return (
    <footer
      className={`w-full h-16 md:h-20 lg:h-26 flex flex-col bg-[#1f2d36] text-[#d5b173] text-[0.6rem] md:text-md lg:text-lg`}
    >
      <div className={`h-full flex flex-row items-center justify-evenly`}>
        <div className={`w-full flex flex-col items-center justify-center`}>
          <span className={`font-black text-[0.7rem] md:text-lg lg:text-xl `}>
            © International Conference on Sustainable Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
