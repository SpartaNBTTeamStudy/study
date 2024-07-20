"use client";

import { supabase } from "./utils/supabase/supabaseClient";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("@@");
    const { data, error } = await supabase.from("todos").insert({
      content: ref.current?.value,
    });
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };

  useEffect(() => {
    // Create a function to handle inserts
    const handleInserts = (payload) => {
      //   {
      //     "schema": "public",
      //     "table": "todos",
      //     "commit_timestamp": "2024-07-20T15:16:18.230Z",
      //     "eventType": "INSERT",
      //     "new": {
      //         "content": "하이하이",
      //         "created_at": "2024-07-20T15:16:18.228083+00:00",
      //         "id": 3
      //     },
      //     "old": {},
      //     "errors": null
      // }
      console.log("전달 받았어요!", payload);
    };

    supabase
      .channel("todos")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "todos" },
        handleInserts
      )
      .subscribe();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-2xl font-bold">Todos</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 w-full items-center"
      >
        <input
          ref={ref}
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 w-1/2"
        />
        <button className="bg-blue-500 p-2 text-white rounded-md w-1/2">
          Send
        </button>
      </form>
    </main>
  );
}
