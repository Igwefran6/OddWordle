import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";

function Settings({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="absolute top-6 right-6 bg-slate-800 active:bg-slate-900 cursor-pointer p-4  text-white active:scale-95 "
      onClick={onClick}
    >
      <Icon path={mdiCog} size={1} />
    </div>
  );
}

export default Settings;
