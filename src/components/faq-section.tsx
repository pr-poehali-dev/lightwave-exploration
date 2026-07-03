import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Подойдёт ли курс новичку без опыта?",
      answer:
        "Да, программа начинается с самых основ. Мы объясняем всё простым языком и ведём вас пошагово — от установки терминала до первых сделок. Опыт и специальное образование не нужны.",
    },
    {
      question: "Сколько длится обучение?",
      answer:
        "Базовый курс рассчитан на 2-3 месяца в комфортном темпе. Все уроки остаются у вас в личном кабинете, поэтому вы можете учиться в удобное время без спешки.",
    },
    {
      question: "Нужен ли большой стартовый капитал?",
      answer:
        "Нет. Обучение начинается с демо-счёта, где вы торгуете виртуальными деньгами. На реальный счёт можно выходить с небольшой суммы — мы научим грамотно управлять любым депозитом.",
    },
    {
      question: "Гарантируете ли вы доход?",
      answer:
        "Мы честны с вами: трейдинг связан с рисками, и никто не может гарантировать прибыль. Мы даём знания, стратегии и дисциплину, которые повышают ваши шансы торговать стабильно.",
    },
    {
      question: "Как проходят занятия?",
      answer:
        "Обучение онлайн: видеоуроки, живые вебинары и разборы сделок с наставником. Вы получаете обратную связь и поддержку на каждом этапе.",
    },
    {
      question: "Что делать, если что-то непонятно?",
      answer:
        "За вами закрепляется персональный куратор. Вы можете задавать вопросы, присылать свои сделки на разбор и получать помощь до тех пор, пока всё не станет понятно.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об обучении, формате занятий и старте в трейдинге.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}