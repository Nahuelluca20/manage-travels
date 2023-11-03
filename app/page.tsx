import {serverClient} from "./_trpc/server-client";
import SignOut from "./components/signout-button";

export default async function Home() {
  const todos = await serverClient.getTodos();

  console.log(todos);

  return (
    <main>
      <h1 className="text-white">hola</h1>
      {todos?.map((todo, i) => <h1 key={i}>{todo}</h1>)}
      <SignOut />
    </main>
  );
}
