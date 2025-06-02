export default function Topbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">Event System</h1>
      <div className="flex items-center gap-4">
        <img src="/avatar.png" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
