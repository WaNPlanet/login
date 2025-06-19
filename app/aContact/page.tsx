'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F4] text-[#1C1917] font-sans flex items-center justify-center px-4">
      <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        {/* Left: Text & Info */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-light">Let’s collaborate</h1>
          <p className="text-sm">we@district2.studio</p>

          <div className="text-sm space-y-2 mt-10">
            <p className="font-medium">Find us</p>
            <p className="tracking-wider">FB &nbsp;&nbsp; IG &nbsp;&nbsp; BE &nbsp;&nbsp; IN</p>
          </div>

          <div className="text-sm space-y-2 mt-6">
            <p className="font-medium">Saigon, Vietnam</p>
            <p>+84 (0) 28 3636 1354</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold uppercase text-gray-600">Say hello</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-xs uppercase">Name</label>
                <input type="text" placeholder="Your name" className="border-b border-gray-400 bg-transparent outline-none text-sm py-1" />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-xs uppercase">Subject</label>
                <select className="border-b border-gray-400 bg-transparent outline-none text-sm py-1">
                  <option>Choose subject</option>
                  <option>Project</option>
                  <option>Collab</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-xs uppercase">Company</label>
                <input type="text" placeholder="Your company" className="border-b border-gray-400 bg-transparent outline-none text-sm py-1" />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-xs uppercase">Email</label>
                <input type="email" placeholder="Email address" className="border-b border-gray-400 bg-transparent outline-none text-sm py-1" />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xs uppercase">Message</label>
              <textarea placeholder="Start typing here" className="border-b border-gray-400 bg-transparent outline-none text-sm py-1 resize-none h-24" />
            </div>

            <button type="submit" className="text-sm underline flex items-center gap-2 hover:text-gray-800 transition">
              Submit <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
