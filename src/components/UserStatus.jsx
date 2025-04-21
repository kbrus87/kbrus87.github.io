export default function UserStatus({ user, handleLogin }) {
  return (
    <div className="userStatus">
      <span className="userName">
        {user ? `${user.name}` : "Guest"}
      </span>
      <button
        onClick={handleLogin}
        className="userButton bg-gray-200 rounded-full hover:bg-gray-300"
        aria-label="Login"
      >
        {/* Simple user icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a5 5 0 100-10 5 5 0 000 10zm-7 7a7 7 0 0114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
