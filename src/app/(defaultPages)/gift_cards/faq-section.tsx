import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    ques: "What is the Galleria Foundation Gift Card?",
    ans: "The Gift Card is a meaningful way to contribute to our causes. It allows recipients to select where the donation is directed, supporting initiatives like education, healthcare, women empowerment, environmental conservation, or disaster relief.",
  },
  {
    ques: "How does the Gift Card work?",
    ans: "You purchase the Gift Card, and the recipient redeems it by choosing the cause they want to support. The donation is then directed to that specific initiative.",
  },
  {
    ques: "What denominations are available for the Gift Card?",
    ans: "The Gift Card is available in various denominations to suit your preferences, starting from a minimum value.",
  },
  {
    ques: "Can the recipient split the donation across multiple causes?",
    ans: "Yes, recipients can allocate the donation amount to one or more causes of their choice.",
  },
  {
    ques: "Is the Gift Card valid for a specific period?",
    ans: "Yes, the Gift Card has a validity period of 12 months from the date of purchase, giving recipients ample time to decide how to use it.",
  },
  {
    ques: "How can the recipient redeem the Gift Card?",
    ans: "The recipient can redeem the Gift Card by visiting our website, entering the unique code provided, and selecting their preferred cause(s).",
  },
  {
    ques: "Is the Gift Card refundable or transferable?",
    ans: "The Gift Card is not refundable but can be transferred to another person if it has not been redeemed.",
  },
  {
    ques: "Can I track how the Gift Card donation is used?",
    ans: "Yes, once the recipient redeems the Gift Card, we provide updates on how the funds are utilized and the impact they’ve created.",
  },
  {
    ques: "How do I purchase the Gift Card?",
    ans: "You can purchase the Gift Card online through our secure platform. Choose the denomination, personalize it with a message, and send it digitally or as a printed card.",
  },
  {
    ques: "Why should I choose a Galleria Foundation Gift Card?",
    ans: "The Gift Card is a unique way to give back while empowering the recipient to support a cause they care about. It’s a thoughtful gift that creates a lasting impact for those in need.",
  },
];

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={i.toString()}>
          <AccordionTrigger className="text-lg font-semibold">
            {faq.ques}
          </AccordionTrigger>
          <AccordionContent>{faq.ans}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
