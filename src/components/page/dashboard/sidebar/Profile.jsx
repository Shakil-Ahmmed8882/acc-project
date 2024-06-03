// Profile
import Logo from "@/components/shared/navbar/Logo";

function Profile() {
  return (
    <div className="py-4 px-4 border-t">
      <div className="flex items-center gap-x-4">
        <Logo />
        <div>
          <span className="block text-gray-400 text-sm font-semibold">
            Tanmoy
          </span>
          <a
            href="javascript:void(0)"
            className="block mt-px text-gray-400 hover:text-indigo-600 text-xs"
          >
            View profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
