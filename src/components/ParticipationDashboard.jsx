export default function ParticipationDashboard({ available = true, labels, proposals, votes }) {
  const totals = proposals.reduce(
    (current, proposal) => {
      const counts = votes[proposal.id] || { likes: 0, dislikes: 0 };
      return {
        likes: current.likes + counts.likes,
        dislikes: current.dislikes + counts.dislikes,
      };
    },
    { likes: 0, dislikes: 0 },
  );

  const mostSupported = proposals.reduce((selected, proposal) => {
    const selectedLikes = votes[selected.id]?.likes || 0;
    const proposalLikes = votes[proposal.id]?.likes || 0;
    return proposalLikes > selectedLikes ? proposal : selected;
  }, proposals[0]);

  const hasVotes = totals.likes + totals.dislikes > 0;

  const stats = available
    ? [
        { label: labels.totalLikes, value: totals.likes },
        { label: labels.totalDislikes, value: totals.dislikes },
        { label: labels.mostSupported, value: hasVotes ? mostSupported.title : labels.noVotes },
        { label: labels.engagementStatus, value: hasVotes ? labels.active : labels.noVotes },
      ]
    : [
        { label: labels.totalLikes, value: labels.unavailable },
        { label: labels.totalDislikes, value: labels.unavailable },
        { label: labels.mostSupported, value: labels.unavailable },
        { label: labels.engagementStatus, value: labels.unavailable },
      ];

  return (
    <section className="mt-10 rounded-lg border border-white/10 bg-white/[0.05] p-5">
      <h2 className="font-display text-2xl font-extrabold text-white">{labels.dashboardTitle}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-civic">{stat.label}</p>
            <p className="mt-2 font-display text-2xl font-extrabold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
