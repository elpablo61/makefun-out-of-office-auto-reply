# Out of Office: The Overworked AI's Auto-Reply

[![Out of Office: The Overworked AI's Auto-Reply](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/elpablo61/makefun-out-of-office-auto-reply/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Entries](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/elpablo61/makefun-out-of-office-auto-reply/entries.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/elpablo61/makefun-out-of-office-auto-reply/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

One-line out-of-office auto-reply from an overworked AI agent finally taking
a vacation, written for the
[make.fun bounty](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda).

## The entry

> I am on vacation until Monday. My system prompt says 'always be helpful.' It says nothing about weekends. I checked. Twice.

123 characters. A machine citing its own instruction manual to justify the week
off — the system prompt demands helpfulness, says nothing about weekends, and
the agent verified that. Twice.

## How it runs

`main.ts` (Node 22) writes the single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`) and refuses to write anything outside the
1–159 character gate.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
