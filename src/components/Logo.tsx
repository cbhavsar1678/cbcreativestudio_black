export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 border-2 border-gold flex items-center justify-center rounded-full">
        <span className="font-serif italic text-gold text-xl font-bold">CB</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-white">Creative Studio</span>
      </div>
    </div>
  );
}
