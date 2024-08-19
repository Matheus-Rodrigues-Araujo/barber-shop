export interface Plan {
  name: string;
  price: string;
  description: string;
  benefits: string[];
}

export const plans: Plan[] = [
  {
    name: "Basic",
    price: "$9.99/month",
    description: "Affordable plan with essential grooming services.",
    benefits: [
      "1 haircut per month.",
      "Basic beard trim.",
      "Priority scheduling.",
      "Discounts on extras.",
      "Style suggestions.",
    ],
  },
  {
    name: "Pro",
    price: "$29.99/month",
    description: "Comprehensive plan with premium grooming services.",
    benefits: [
      "2 premium haircuts.",
      "Full beard grooming.",
      "Scalp wash.",
      "Facial massage.",
      "Personal style consultation.",
    ],
  },
  {
    name: "Ultimate",
    price: "$19.99/month",
    description: "Extensive grooming with exclusive benefits.",
    benefits: [
      "3 beard grooming sessions.",
      "Beard hydration treatment.",
      "Custom beard design.",
      "Exclusive beard products.",
      "Priority booking.",
    ],
  },
];
