import Cards from "./Cards"

const Business = () => {
  return (
    <div className="py-16">
        <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-medium pb-10">OpenAI for Business</h1>
                <a className="text-[14px]" href="">View more</a>
            </div>
        <div className="grid grid-cols-3 gap-7">
            <Cards image="ml.png" heading="Model ML completes finance work more efficiently with GPT-5.6 Sol" genre="Startup" date="Aug 10, 2026" />
            <Cards image="virgin.png" heading="Virgin Atlantic sharpens customer journeys with ChatGPT Work" date="Aug 10, 2026" />
            <Cards image="zapier.png" heading="How Zapier transformed core marketing processes with ChatGPT work." date="Aug 10, 2026" />
        </div>
    </div>
  )
}

export default Business