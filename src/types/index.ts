export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: 'ai' | 'dev' | 'marketing' | 'growth';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  iconName: string;
  highlight?: boolean;
}

export interface WorkflowStep {
  step: number;
  id: string;
  title: string;
  description: string;
  iconName: string;
  detail: {
    system: string;
    action: string;
    dataPayload: string;
    output: string;
  };
}

export interface EcosystemTool {
  id: string;
  name: string;
  category: string;
  iconName: string;
  angle: number; // for circular layout
  distance: number;
  color: string;
  description: string;
  integrations: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'customer' | 'assistant';
  text: string;
  timestamp: string;
}
