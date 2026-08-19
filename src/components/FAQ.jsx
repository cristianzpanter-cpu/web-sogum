import { FAQ_ITEMS } from '../data/faq.js'

export default function FAQ() {
  return (
    <section className="bg-paper py-16 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div data-reveal className="reveal text-center">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-terracotta">
            Gut zu wissen
          </span>
          <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
            Häufige Fragen
          </h2>
        </div>

        <div data-reveal className="reveal mt-12 divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-ink transition-transform duration-150 active:scale-[0.99] marker:content-none">
                {item.question}
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-charcoal/60 transition-transform duration-300 group-open:rotate-45 group-open:border-terracotta group-open:text-terracotta"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-charcoal/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
