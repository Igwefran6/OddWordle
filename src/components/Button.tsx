function Button({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      className="bg-slate-900 active:bg-slate-950 text-white font-bold py-2 px-8  transition-all active:scale-95 text-nowrap"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
