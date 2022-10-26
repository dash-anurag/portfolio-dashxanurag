import Link from "next/link";
const ExternalLink = ({ href, children }) => (
  <Link
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            className="text-gray-500 hover:text-gray-600 transition"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-600 transition"
            href="/blog"
          >
            Blog
          </Link>

          <Link
            className="text-gray-500 hover:text-gray-600 transition"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-600 transition"
            href="/links"
          >
            Links
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/dash-anurag">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/dash-anurag/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/dashxanurag">
            Twitter
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            className="text-gray-500 hover:text-gray-600 transition"
            href="/tweets"
          >
            Tweets
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-600 transition"
            href="/resources"
          >
            Resources
          </Link>
        </div>
      </div>
      <p className="flex flex-row text-gray-400">
        Made with ❤️ by @dashxanurag
      </p>
    </footer>
  );
}
