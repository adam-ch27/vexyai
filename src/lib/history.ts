import { useCallback, useEffect, useState } from "react";
import type { FollowupResult, StudyFormat, StudyResult } from "./study";

export type StoredTurn = {
  request: string;
  format: StudyFormat;
  result?: { format: StudyFormat; data: StudyResult };
  mapImage?: string;
  failed?: boolean;
};

export type Conversation = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  turns: StoredTurn[];
  followup?: FollowupResult | null;
};

const KEY = "studywise-conversations";

export function conversationTitle(text: string, fallback: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return fallback;
  return clean.length > 46 ? `${clean.slice(0, 46)}…` : clean;
}

function read(): Conversation[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as Conversation[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(items: Conversation[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items.slice(0, 60)));
  } catch {
    /* storage full or unavailable */
  }
}

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConversations(read());
    setReady(true);
  }, []);

  const persist = useCallback((updater: (items: Conversation[]) => Conversation[]) => {
    setConversations((current) => {
      const next = updater(current).sort((a, b) => b.updatedAt - a.updatedAt);
      write(next);
      return next;
    });
  }, []);

  const upsert = useCallback(
    (conversation: Conversation) =>
      persist((items) => [conversation, ...items.filter((item) => item.id !== conversation.id)]),
    [persist],
  );

  const remove = useCallback(
    (id: string) => persist((items) => items.filter((item) => item.id !== id)),
    [persist],
  );

  const clear = useCallback(() => persist(() => []), [persist]);

  return { conversations, ready, upsert, remove, clear };
}

export function newConversationId() {
  return `c-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
