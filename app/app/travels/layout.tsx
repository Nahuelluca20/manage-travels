export default function Layout(props: {children: React.ReactNode; mytravels: React.ReactNode}) {
  return (
    <section>
      {props.children}
      {props.mytravels}
    </section>
  );
}
