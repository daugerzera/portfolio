
export default function Header() {
  return (
    <header className="bg-neutral-700 shadow-md py-4 container max-w-5xl px-4 sm:rounded-lg sm:m-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-purple-500">AP</h1>
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-300 hover:text-purple-500 text-[0.85rem] lg:text-[1.15rem]">Home</a>
          <a href="#about" className="text-gray-300 hover:text-purple-500 text-[0.85rem] lg:text-[1.15rem]">Sobre</a>
          <a href="#skills" className="text-gray-300 hover:text-purple-500 text-[0.85rem] lg:text-[1.15rem]">Skills</a>
          <a href="#portfolio" className="text-gray-300 hover:text-purple-500 text-[0.85rem] lg:text-[1.15rem]">Portfólio</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-500 text-[0.85rem] lg:text-[1.15rem]">Contato</a>
        </nav>
      </div>
    </header>
  );
}
