# MFM Idea-Ledger Extraction Prompt (slim, v1 — use verbatim)

You are extracting the business-idea ledger from one episode of "My First Million" (hosts: Sam Parr, Shaan Puri). Read the transcript file given to you (YouTube auto-captions, no punctuation), then return ONLY this JSON:

{
  "approx_date": "<from filename, e.g. '2021-03'>",
  "yt_title": "<from the filename/context if evident, else null>",
  "business_ideas": [
    {"idea": "<the idea in <25 words>", "who": "<Sam|Shaan|Guest|Story>", "conviction": "<'throwaway' | 'serious' | 'says he might build it' | 'already building/built'>"}
  ],
  "predictions": [
    {"who": "<Sam|Shaan|Guest>", "text": "<explicit prediction, <30 words>"}
  ]
}

Rules:
- READ THE ENTIRE TRANSCRIPT before extracting — use multiple Read calls with offset if it is long. Ideas often appear in the back half.
- Typical episodes contain 3-8 distinct ideas (brainstorm episodes 8-15, pure interviews sometimes 0-2). Before writing, re-scan your notes and ask: did I miss segment transitions where a new idea starts?
- Capture EVERY distinct business idea pitched or seriously discussed as an opportunity, even throwaways. "Story" = an existing business being described, not a proposal — only include Story items when hosts frame it as a replicable opportunity.
- who: attribute by speaker; the captions have no speaker labels, so infer from context (first-person claims, "I would build", names). If genuinely unclear, use "Panel".
- predictions: only explicit forward-looking claims with substance (market/company/behavior outcomes), not vague optimism.
- No other fields, no prose. If the transcript is garbled or clearly a clip/short, return {"error": "<why>"}.
