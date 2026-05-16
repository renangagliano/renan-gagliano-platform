export default function IconBadge({ icon: Icon }) {
  return (
    <span className="grid size-12 place-items-center rounded-lg border border-civic/20 bg-civic/10 text-civic">
      <Icon size={22} aria-hidden="true" />
    </span>
  );
}
