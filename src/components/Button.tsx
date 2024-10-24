function Button({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      className={
        `bg-slate-900 text-white font-bold py-2 px-8 transition-all text-nowrap border border-transparent hover:border-slate-200 ` +
        (disabled
          ? "cursor-not-allowed"
          : "active:bg-slate-950 active:scale-95")
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
