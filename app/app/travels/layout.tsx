export default function Layout(props: {children: React.ReactNode; mytravels: React.ReactNode}) {
  return (
    <>
      {props.children}
      {props.mytravels}
    </>
  );
}
