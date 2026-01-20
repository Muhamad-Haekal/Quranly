export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold text-emerald-600">
        @nextherin
      </span>
      . All rights reserved.
    </footer>
  );
}
