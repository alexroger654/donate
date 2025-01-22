import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    ques: "What is a monthly donation?",
    ans: "A monthly donation is a recurring contribution that supports Galleria Foundation’s ongoing initiatives. It ensures consistent support for our programs, helping us create lasting impact.",
  },
  {
    ques: "How do I set up a monthly donation?",
    ans: "Setting up a monthly donation is easy. Choose your preferred cause, select the donation amount, and complete the secure sign-up process. Your contribution will be automatically processed each month.",
  },
  {
    ques: "Can I choose where my donation goes?",
    ans: "Yes, you can select a specific cause or let us allocate your donation to the area of greatest need.",
  },
  {
    ques: "Is there a minimum amount for monthly donations?",
    ans: "There is no minimum amount. Every contribution, regardless of size, makes a difference in the lives of those we serve.",
  },
  {
    ques: "How can I change or cancel my monthly donation?",
    ans: "You can modify or cancel your monthly donation anytime by contacting us or logging into your donor account. We ensure a hassle-free process.",
  },
  {
    ques: "Will I receive a receipt for my monthly donations?",
    ans: "Yes, we provide a receipt after each donation. Additionally, you’ll receive an annual summary for tax purposes.",
  },
  {
    ques: "How is my donation used?",
    ans: "Your donation directly supports the programs you choose, whether it’s education, healthcare, women empowerment, environmental conservation, or disaster relief. We ensure full transparency and accountability.",
  },
  {
    ques: "Is my donation secure?",
    ans: "Absolutely. We use a secure payment system to process all donations and protect your personal information.",
  },
  {
    ques: "Will I be updated on the impact of my donation?",
    ans: "Yes, you’ll receive regular updates, impact stories, and reports that highlight how your contribution is making a difference.",
  },
  {
    ques: "Why should I choose a monthly donation over a one-time gift?",
    ans: "Monthly donations provide steady support for our programs, allowing us to plan better and sustain long-term initiatives. It’s a convenient way to make a bigger impact over time.",
  },
];

export function FaqSection() {
  return (
    <Accordion id="faqs" type="single" collapsible className="w-full">
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
