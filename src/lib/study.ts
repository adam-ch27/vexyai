export const studyFormats = ["summary", "flashcards", "mindmap"] as const;
export type StudyFormat = (typeof studyFormats)[number];

export type SummaryResult = {
  title: string;
  overview: string;
  keyPoints: { heading: string; detail: string }[];
  quickReview: string[];
};

export type FlashcardsResult = {
  title: string;
  cards: { question: string; answer: string }[];
};

export type MindMapResult = {
  title: string;
  centralTopic: string;
  nodes: { id: string; label: string; description?: string; parentId?: string }[];
};

export type StudyResult = SummaryResult | FlashcardsResult | MindMapResult;

export const followupActions = ["quiz", "assessment", "childExplain", "terms"] as const;
export type FollowupAction = (typeof followupActions)[number];

export type FollowupResult = {
  title: string;
  intro: string;
  items: { prompt: string; answer: string; options?: string[] }[];
};

export function previewMessage(content: string, limit = 180) {
  return content.length > limit ? `${content.slice(0, limit)}…` : content;
}
