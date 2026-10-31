import type { MetadataRoute } from "next";

/**
 * Everything is public, and the AI crawlers are named explicitly rather than
 * left to the wildcard. The point of this site is to be found and quoted, by
 * search engines and by assistants alike:
 *
 * - search/answer crawlers decide whether the site can be cited in ChatGPT
 *   search (OAI-SearchBot), Claude (Claude-SearchBot), Perplexity
 *   (PerplexityBot), Copilot (bingbot) and Apple Intelligence;
 * - user-triggered fetchers (ChatGPT-User, Claude-User, Perplexity-User) are
 *   what reads a page when someone pastes the link into a chat;
 * - training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot…) are what
 *   puts "Hector Waldman, Flutter engineer" into the models' own knowledge.
 */
const AI_AGENTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "bingbot",
  "DuckAssistBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "MistralAI-User",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_AGENTS, allow: "/" },
    ],
    sitemap: "https://hectorwaldmann.site/sitemap.xml",
  };
}
