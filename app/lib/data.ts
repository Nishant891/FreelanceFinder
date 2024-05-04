import { v4 as uuidv4 } from "uuid";
interface FaqData {
  id: string;
  question: string;
  answer: string;
}
export const FaqDatas: FaqData[] = [
  {
    id: uuidv4(),
    question: "Do you offer freelancers?",
    answer: "Yes, we offer opportunities for freelancers.",
  },
  {
    id: uuidv4(),
    question:
      "What’s the guarantee that I will be satisfied with the hired talent?",
    answer:
      "We strive to match your needs with skilled professionals and provide support to ensure satisfaction.",
  },
  {
    id: uuidv4(),
    question: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    id: uuidv4(),
    question: "Why should I not go to an agency directly?",
    answer:
      "Working with us offers flexibility, a wide talent pool, and personalized support, often at competitive rates compared to agency fees.",
  },
  {
    id: uuidv4(),
    question: "Who can help me pick a right skillset and duration for me?",
    answer:
      "Our team can guide you in selecting the appropriate skillset and duration based on your project requirements and goals.",
  },
];
