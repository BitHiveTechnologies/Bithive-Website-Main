import NavHeader from "@/components/blocks/nav-header"

function Navbar() {
  return (
    <nav className="w-full bg-background text-foreground pt-12 px-2 flex items-center shadow-md">
      <NavHeader />
    </nav>
  );
}

export { Navbar }