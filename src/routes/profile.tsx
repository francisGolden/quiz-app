import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <p>First name:</p>
    <p>Last name:</p>
    <p>Username: </p>
    <p>Billing information</p>
  </div>
}
