export type TPricingPlanType = "monthly" | "yearly";

export type TPricing = {
  id: number | string;
  name: string;
  price: number;
  description: string;
  buttonText: string;
  features: string[];
  isPopular: boolean;
  type: TPricingPlanType;
};
