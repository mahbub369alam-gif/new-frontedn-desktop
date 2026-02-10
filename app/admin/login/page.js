import { Suspense } from "react";
import Client from "./AdminLoginClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Client />
    </Suspense>
  );
}
