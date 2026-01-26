import Headers from "@/components/headers"
import CheckCards from "@/components/checkCards"

export default function Check() {

  return (
    <main className="min-h-screen bg-[#F2EFF9] px-6 pt-20">

      <div className="mx-auto max-w-3xl space-y-10">

        <Headers
          title="Check Symptoms"
          subtitle="Describe how you're feeling"
          icon="heart"
        />

        {/* Symptom Input */}
        <section className="">
          <h1 className="text-2xl font-semibold text-[#3F2870] mb-3">
            How are you?
          </h1>
                    <textarea
                    rows={4}
                    placeholder="I'm feeling..."
                    className="w-full resize-none rounded-xl border border-[#3F2870] bg-[#F2EFF9] p-3 text-sm text-[#1B1530] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#3F2870]"
                    />
    

            <div className="flex items-center justify-between text-xs opacity-70 text-black py-4">
              <p>Describe your symptoms in detail</p>
        

            </div>
              <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#3F2870] text-white font-bold hover:opacity-90 transition cursor-pointer  "
        >
          Analyze
        </button>

      
        </section>

        {/* AI Assessment */}
        <section>
          <h1 className="text-2xl font-semibold text-[#3F2870] mb-4">
            AI Assessment
          </h1>

          <CheckCards />
        </section>

      </div>
    </main>
  )
}
