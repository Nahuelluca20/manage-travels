import type {User} from "@clerk/nextjs/api";

import {SignOutButton, currentUser} from "@clerk/nextjs";

import {Button} from "@/components/ui/button";

import {serverClient} from "./_trpc/server-client";

export default async function Home() {
  // const user: User | null = await currentUser();
  const todos = await serverClient.getTodos();
  const addTodos = await serverClient.addTodo("todos");
  // const travels = user?.id && (await serverClient.getTravels(user?.id));

  // console.log(travels)
  return (
    <main>
      <h1 className="text-white">hola</h1>
      {todos?.map((todo, i) => <h1 key={i}>{todo}</h1>)}
      {addTodos}
      <Button>Button</Button>
      <SignOutButton />
    </main>
  );
}
