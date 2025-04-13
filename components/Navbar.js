import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <span className="font-bold text-xl">SkillRoots</span>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/add-skills">Add Skills</Link>
      </div>
    </nav>
  );
}
