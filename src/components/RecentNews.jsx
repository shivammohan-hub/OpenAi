const RecentNews = () => {
  return (
    <div className="p-20">
        <div className="flex justify-between items-center">
            <h1 className="text-[20px] font-medium pb-10">Recent news</h1>
            <a className="text-[14px]" href="">View more</a>
        </div>
        <div className="grid grid-cols-2 gap-8">
            <a className="flex items-center gap-10">
                <img className="h-48 w-auto rounded-md" src="news1.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h3 className="text-[18px]">An updated Model Spac for more capable and Beneficial AI</h3>
                    <p className="text-[14px] text-medium">Safety &nbsp;<span className="text-slate-700">Oct 29, 2026</span></p>
                </div>
            </a>
            <a className="flex items-center gap-10">
                <img className="h-48 w-auto rounded-md" src="news2.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h3 className="text-[18px]">How we detect frontier model misalignment</h3>
                    <p className="text-[14px] text-medium">Security &nbsp;<span className="text-slate-700">Oct 29, 2026</span></p>
                </div>
            </a>
                <a className="flex items-center gap-10">
                <img className="h-48 w-auto rounded-md" src="news3.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h3 className="text-[18px]">Patch the Planet : global response coordination as agents uncover critical vulnerabilities</h3>
                    <p className="text-[14px] text-medium">Security &nbsp;<span className="text-slate-700">Oct 21, 2026</span></p>
                </div>
            </a>
            <a className="flex items-center gap-10">
                <img className="h-48 w-auto rounded-md" src="news4.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h3 className="text-[18px]">Using Thousands of AI agents to uncover new leads to biological data</h3>
                    <p className="text-[14px] text-medium">Publication &nbsp;<span className="text-slate-700">Oct 21, 2026</span></p>
                </div>
            </a>
                <a className="flex items-center gap-10">
                <img className="h-48 w-auto rounded-md" src="news5.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h3 className="text-[18px]">OpenAI acquires Orchestra Bio</h3>
                    <p className="text-[14px] text-medium">Company &nbsp;<span className="text-slate-700">Oct 20, 2026</span></p>
                </div>
            </a>
            <a className="flex items-center gap-10">
                <img className="h-48 w-auto rounded-md" src="news6.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h3 className="text-[18px]">Introducing MentalHealthBench</h3>
                    <p className="text-[14px] text-medium">Publication &nbsp;<span className="text-slate-700">Sep 23, 2026</span></p>
                </div>
            </a>
        </div>

    </div>
  )
}

export default RecentNews