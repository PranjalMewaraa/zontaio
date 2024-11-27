import React from "react";

const Footer2 = () => {
  return (
    <div className="w-full h-[30vh]  p-8 text-white  gap-6 flex flex-col md:flex-row items-center md:items-center  md:justify-between">
      <div className="flex flex-col h-full w-fit items-start justify-between">
        <h1 className="font-black text-9xl font-[clash] ">Zonta.io</h1>
        <p className="text-sm">© 2024 Zonta.io. All Right Reserved</p>
      </div>
      <div className="flex flex-col h-full w-fit items-start gap-8 justify-between">
        <ul className="w-full flex gap-8 flex-col md:flex-row justify-between items-center">
          <li>Platform Feature</li>
          <li>Token Benefits</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
          <li>WhitePaper</li>
          <li>blogs</li>
        </ul>
        <ul className="w-full h-fit flex items-end flex-col gap-8 md:flex-row justify-between">
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <div class=" flex justify-center gap-4 items-end bg-[#020403]">
            <div class="rounded-full w-16 h-16 bg-slate-800 flex justify-center items-center bg-gradient-to-b from-slate-800 to-slate-950 hover:scale-110 transition-all">
              <img
                src="data:image/png;base64,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"
                alt=""
                class="w-12 p-2"
              />
            </div>
            <div class="rounded-full w-16 h-16 flex justify-center items-center bg-gradient-to-b from-slate-800 to-slate-950 hover:scale-110 transition-all">
              <img
                src="https://imgs.search.brave.com/viO4PPhmvigVHEZnZGMgqQgdiONCWtB-zuQyYJV8lRk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvcHJldmll/dy93aGl0ZS90ZWxl/Z3JhbS14eGwucG5n"
                alt=""
                class="w-12 p-2"
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
