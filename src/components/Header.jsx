const Header = () => {
  return (
    <div className="flex items-center justify-between px-[7%] py-6 pb-16">
        <nav className="flex gap-10 font-medium text-slate-900 text-[13px]">
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" fill="none" viewBox="0 0 292 78" class="h-[17px] w-auto"><path fill="currentColor" d="M30.6.398C13.77.398 0 14.168 0 30.998s13.77 30.6 30.6 30.6 30.6-13.685 30.6-30.6S47.515.398 30.6.398m0 50.235c-10.455 0-18.87-8.585-18.87-19.635s8.415-19.635 18.87-19.635 18.87 8.585 18.87 19.635-8.415 19.635-18.87 19.635m61.54-33.235c-5.526 0-10.88 2.21-13.686 5.95v-5.1h-11.05v59.5h11.05V56.243c2.805 3.485 7.99 5.355 13.685 5.355 11.9 0 21.25-9.35 21.25-22.1s-9.35-22.1-21.25-22.1m-1.87 34.595c-6.29 0-11.9-4.93-11.9-12.495s5.61-12.495 11.9-12.495 11.899 4.93 11.899 12.495-5.61 12.495-11.9 12.495m49.133-34.595c-12.07 0-21.59 9.435-21.59 22.1s8.33 22.1 21.93 22.1c11.135 0 18.275-6.715 20.485-14.28h-10.795c-1.36 3.145-5.185 5.355-9.775 5.355-5.695 0-10.03-3.995-11.05-9.69h32.13v-4.335c0-11.56-8.075-21.25-21.335-21.25m-10.71 17.765c1.19-5.355 5.61-8.84 10.965-8.84 5.695 0 10.03 3.74 10.54 8.84zm61.454-17.765c-4.93 0-10.115 2.21-12.495 5.865v-5.015H166.6v42.5h11.05V37.883c0-6.63 3.57-10.965 9.35-10.965 5.355 0 8.245 4.08 8.245 9.775v24.055h11.05v-25.84c0-10.54-6.46-17.51-16.15-17.51M234.596 1.25l-24.055 59.5h11.815l5.1-13.005h27.37l5.1 13.005h11.985l-23.885-59.5zm-3.315 36.635 9.86-24.905 9.775 24.905zM287.636 1.25h-11.22v59.5h11.22z"></path></svg>
            </a>
            <a href="">Research</a>
            <a href="">Product</a>
            <a href="">Business</a>
            <a href="">Developers</a>
            <a href="">Company</a>
            <a href="">Foundation</a>
            <svg  className="h-4 w-auto font-bold text-slate-800" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
                </svg>
        </nav>
        <div className="flex gap-4 text-[14px]">
            <button className="flex gap-2 items-center px-4 py-2 rounded-full bg-slate-100">Login
                <svg className="h-4 w-auto font-bold " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button className="flex gap-2 items-center px-4 py-2 border rounded-full bg-black text-white font-semibold">Try ChatGPT
                <svg className="h-4 w-auto font-bold " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Header