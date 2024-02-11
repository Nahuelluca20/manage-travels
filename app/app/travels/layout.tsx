export default function Layout({
  children,
  recentlyadded,
  mytravels,
}: {
  children: React.ReactNode;
  recentlyadded: React.ReactNode;
  mytravels: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {children}
      {recentlyadded}
      {mytravels}
    </section>
  );
}
