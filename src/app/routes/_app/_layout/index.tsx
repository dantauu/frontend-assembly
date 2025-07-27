import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/_layout/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <p>MAIN INDEX PAGE</p>
}
