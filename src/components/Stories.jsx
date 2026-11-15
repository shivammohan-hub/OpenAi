import Cards from "./Cards"

const Stories = () => {
  return (
    <div className="px-20 py-16">
        <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-medium pb-10">Stories</h1>
                <a className="text-[14px]" href="">View more</a>
            </div>
        <div className="grid grid-cols-3 gap-5">
            <Cards image="airtour.png" heading="Using ChatGPT to grow ATV Big Air Tour" date="Sep 9, 2026" />
            <Cards image="blind.png" heading="Supporting the blind community with ChatGPT" date="Sep 9, 2026" />
            <Cards image="antibiotic.png" heading="Accelerating antibiotic discovery with ChatGPT" date="Sep 9, 2026" />
        </div>
    </div>
  )
}

export default Stories