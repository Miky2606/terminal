import { INavBarButton, button_nav } from "./services/interface";

export const NavButton = () => {
  return (
    <div className="flex gap-3 items-center ">
      {button_nav.map((e, i) => {
        if (e.url !== undefined)
          return (
            <a
              href=" /settings"
              key={i}
              className="nav_item text-green-700 text-sm"
            >
              <e.Icon />
            </a>
          );
        return <NavButtonItem button={e} key={i} />;
      })}
    </div>
  );
};

const NavButtonItem = ({ button }: { button: INavBarButton }) => {
  return (
    <button
      onClick={button.onClick}
      className="nav_item hover:bg-zinc-500 p-1 rounded"
      title={button.title}
    >
      <button.Icon />
    </button>
  );
};
