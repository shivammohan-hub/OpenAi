const Announcements = () => {
  return (
    <section className="flex gap-10 px-20 py-20">
        <div className="flex-1 ">
            <a href="">
                <img className="h-[580px] rounded-lg" src="frontier.png" alt="" />
                <h1 className="text-[46px] font-medium py-2">Our latest Daybreak announcements</h1>
                <h5 className="text-[14px] py-2 font-[500]">Event &nbsp;<span className="text-slate-600">Nov 12, 2026</span></h5>
                <p className="text-[14px] flex items-center gap-2 py-1">Watch the recording
                    <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
            </a>
        </div>
        <div className="flex-2 w-fix flex flex-col gap-16 h-[730px] overflow-y-scroll pb-10">
            <a className="">
                <img className="h-[320px] rounded-md" src="terra.png" alt="" />
                <p className="text-[18px] py-4">Introducing GPT-6.1 Terra</p>
                <h5 className="text-[14px]">Product &nbsp;&nbsp;<span className="text-slate-600">Oct 26, 2026 &nbsp;&nbsp;6 min read</span></h5>
            </a>

            <a className="">
                <img className="h-[320px] rounded-md" src="gpt2.6.png" alt="" />
                <p className="text-[18px] py-4">Introducing Image 2.6</p>
                <h5 className="text-[14px]">Product &nbsp;&nbsp;<span className="text-slate-600">Nov 4, 2026</span></h5>
            </a>

            <a className="">
                <img className="h-[320px] rounded-md" src="lifeval.png" alt="" />
                <p className="text-[18px] text-wrap py-4">Measuring AI progress on the Task <br /> that matter in everyday life</p>
                <h5 className="text-[14px]">Research &nbsp;&nbsp;<span className="text-slate-600">Nov 2, 2026</span></h5>
            </a>
        </div>
    </section>
  )
}

export default Announcements