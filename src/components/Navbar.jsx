export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">
          Suryapura Portal
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Farmers</a>
          <a href="#">Education</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}