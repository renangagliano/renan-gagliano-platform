export default function VotingButtons({ counts, labels, onVote, vote, voteMessage }) {
  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onVote("like")}
          disabled={Boolean(vote)}
          className="focus-ring rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/80 transition hover:border-civic hover:text-civic disabled:pointer-events-none disabled:opacity-55"
        >
          👍 {labels.like} <span className="ml-2 text-civic">{counts.likes}</span>
        </button>
        <button
          type="button"
          onClick={() => onVote("dislike")}
          disabled={Boolean(vote)}
          className="focus-ring rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/80 transition hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-55"
        >
          👎 {labels.dislike} <span className="ml-2 text-signal">{counts.dislikes}</span>
        </button>
        {vote && <span className="self-center text-sm font-semibold muted">{labels.liked}</span>}
      </div>
      {voteMessage && <p className="text-sm font-semibold text-signal">{voteMessage}</p>}
    </div>
  );
}
