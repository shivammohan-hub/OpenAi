const Ask = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center py-20">
        <h2 className="text-[28px] font-[530]">What can I help with?</h2>
        <div className="flex w-1/2 shadow-[0_0_50px_rgba(0,0,0,0.05)] border-2 rounded-3xl py-4 px-5">
            <textarea placeholder="Summarize my meeting notes" className="text-[16px] w-full border-none outline-none resize-none bg-white" rows={3} name="" id=""></textarea>
            <svg className="h-9 w-auto text-slate-400 place-self-end bg-gray-50 p-2 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20V4M12 4L6 10M12 4L18 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            

        </div>
        <div className="text-[14px] text-gray-500 font-medium flex gap-3">
            <a className="w-fit px-4 py-2 border shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-full" href="">Talk with ChatGPT</a>
            <a className="w-fit px-4 py-2 border shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-full" href="">Research</a>
            <a className="w-fit px-4 py-2 border shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-full" href="">API Platform</a>
            <a className="w-fit px-4 py-2 border shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-full" href="">Stories</a>
            <a className="w-fit px-4 py-2 border shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-full" href="">More</a>
        </div>
    </div>
  )
}

export default Ask