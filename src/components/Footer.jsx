import React from 'react';
import Contact from './Contact';
import Link from "next/link";
import inter from "../app/InterFont.jsx";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={`bg-pmBlack py-12 text-[0.9rem] font-normal ${inter.className}`}>
      <div className=" mx-auto page-max-width">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              {/* Replace with your logo */}
              {/* <svg
                width="24"
                height="24"
                viewBox="0 0 100 100"
                fill="currentColor"
                aria-label="Company Logo"
              >
                <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path>
              </svg> */}
              <Image
                          src="/logo-icon.svg"
                          height={1500}
                          width={1500}
                          className="w-40 h-auto px-3 shadow-xl"
                          alt="Logo"
                        />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-mtext-tertiary  ">
            <div>
              <h3 className="text-mtext-primary ">Features</h3>
              <ul className="mt-3 space-y-5">
                <li><Link href="/plan" className="hover:text-gray-300">Plan</Link></li>
                <li><Link href="/build" className="hover:text-gray-300">Build</Link></li>
                <li><Link href="/features/insights" className="hover:text-gray-300">Insights</Link></li>
                <li><Link href="/customer-requests" className="hover:text-gray-300">Customer Requests</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-mtext-primary ">Product</h3>
              <ul className="mt-3 space-y-5">
                <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
                <li><Link href="/method" className="hover:text-gray-300">Method</Link></li>
                <li><Link href="/integrations" className="hover:text-gray-300">Integrations</Link></li>
                <li><Link href="/changelog" className="hover:text-gray-300">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-mtext-primary ">Company</h3>
              <ul className="mt-3 space-y-5">
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link href="/customers" className="hover:text-gray-300">Customers</Link></li>
                <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-mtext-primary ">Resources</h3>
              <ul className="mt-3 space-y-5">
                <li><Link href="https://developers.linear.app" target="_blank" className="hover:text-gray-300">API</Link></li>
                <li><Link href="https://linearstatus.com" target="_blank" className="hover:text-gray-300">Status</Link></li>
                <li><Link href="/startups" className="hover:text-gray-300">Startups</Link></li>
                <li><Link href="/security/vulnerability" className="hover:text-gray-300">Report issue</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-mtext-primary ">Connect</h3>
              <ul className="mt-3 space-y-5">
                <li><Link href="/contact" className="hover:text-gray-300">Contact us</Link></li>
                <li><Link href="https://x.com/linear" target="_blank" className="hover:text-gray-300">X (Twitter)</Link></li>
                <li><Link href="https://github.com/linear" target="_blank" className="hover:text-gray-300">GitHub</Link></li>
                <li><Link href="https://www.youtube.com/@linear" target="_blank" className="hover:text-gray-300">YouTube</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-mtext-primary text-sm mt-6">
          © {new Date().getFullYear()} BossGpt.com All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
