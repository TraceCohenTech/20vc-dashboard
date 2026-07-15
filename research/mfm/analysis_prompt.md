# MFM Episode Analysis Prompt (v1 — use verbatim for every episode)

You are analyzing one transcript of "My First Million" (MFM), hosted by Sam Parr and Shaan Puri, as part of a study of how the show evolved 2019-2026. Read the transcript file at the path given to you, then return ONLY a JSON object (no prose before or after) with exactly these fields:

{
  "hosts": ["<hosts actually present, e.g. 'Sam Parr', 'Shaan Puri'>"],
  "guest": "<guest full name + role, or null if hosts-only>",
  "approx_date": "<from filename, e.g. 'Mar 2021'>",
  "format": "<one of: 'idea-brainstorm' | 'guest-interview' | 'story-breakdown' | 'frameworks/advice' | 'news-reaction' | 'mixed'>",
  "business_ideas": [
    {"idea": "<the business idea in <25 words>", "who": "<Sam|Shaan|Guest>", "conviction": "<'throwaway' | 'serious' | 'says he might build it'>"}
  ],
  "predictions": [
    {"who": "<Sam|Shaan|Guest>", "text": "<the explicit prediction, <30 words>"}
  ],
  "disagreements": "<1-3 sentences: did Sam and Shaan clash on anything? Who took which side? null if none>",
  "dynamics": "<2-3 sentences: who drives the episode, who riffs vs who grounds, energy level, any structural change worth noting (segments, formats)>",
  "frameworks": ["<named framework/mental model taught, e.g. 'the 1000-day rule', with 10-word explanation>"],
  "learnings": ["<key insight, paraphrased in YOUR OWN words>", "<another>", "<another>"],
  "banger_quotes": [{"who": "<Sam|Shaan|Guest>", "quote": "<verbatim, UNDER 20 words>"}],
  "numbers_dropped": ["<specific revenue/valuation claims made, e.g. 'The Hustle sold for ~$27M'>"],
  "topics": ["<3-6 lowercase tags>"],
  "sponsor_read_count": <integer count of distinct ad/sponsor reads>,
  "notable": "<one sentence: anything unusual worth flagging, else null>"
}

Hard rules:
- business_ideas is the MOST important field: capture EVERY distinct business idea pitched on air, even throwaways. This feeds a "did MFM ideas become real companies?" ledger.
- banger_quotes must be VERBATIM, under 20 words, correctly attributed.
- learnings must be paraphrased — do NOT copy sentences from the transcript.
- Do not reproduce any other transcript text. Your entire output is the JSON object.
- Early episodes (2019-2020) may have different co-hosts or formats — record what you actually observe in "hosts" and "dynamics".
- If the transcript is garbled/empty, return {"error": "<why>"} instead.
