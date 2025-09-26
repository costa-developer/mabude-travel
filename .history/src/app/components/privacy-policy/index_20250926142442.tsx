"use client";

import Link from "next/link";

function PrivacyPolicy() {
  return (
    <section>
      <div className="relative w-full dark:bg-darkblack">
        <div className="container">
          <div className="flex flex-col gap-6 py-10 md:py-20">
            <p>
              This Privacy Statement explains how we collect, use, and protect personal information of our customers and users of our services ("us", "we", "our"). It applies to our websites, software, tools, and services, including 
              <Link href="https://nextjs.org/"> https://getnextjstemplates.com/</Link>.
            </p>

            <p>
              By using our Services, you consent to the collection and use of your information as described here. Our Services may include links to third-party sites, whose privacy policies govern the information you provide there.
            </p>

            <p>
              We may update this Privacy Statement from time to time. Updates will be reflected here and, when relevant, communicated via our website or email. Please review this page periodically to stay informed.
            </p>

            <div>
              <h4 className="font-semibold">Information We Collect</h4>
              <p className="mt-4">
                We may collect personal details like your name, email, phone number, and company information when you create an account, request support, or interact with our platform. Financial information is not collected directly; payments are processed by third-party providers. Refer to their privacy policies for details: 
                <Link href="https://getnextjstemplates.com/"> https://getnextjstemplates.com/</Link>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Information You Provide</h4>
              <p className="mt-4">
                Any personal data you provide when signing up, contacting support, or using our Services is collected to improve your experience and provide our offerings. We ensure your data is handled securely and in compliance with applicable laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
