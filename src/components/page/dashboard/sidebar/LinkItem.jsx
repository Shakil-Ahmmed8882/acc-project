const { default: Link } = require("next/link");

const LinkItem = ({ href, icon, name, action }) => {
  return (
    <li>
      <Link
        href={href}
        onClick={action && action}
        className="flex items-center gap-x-2 text-[#ebebeb] p-2 rounded-lg hover:bg-[#29292c] transition-all duration-300"
      >
        <div className="text-white">{icon}</div>
        {name}
      </Link>
    </li>
  );
};
export default LinkItem