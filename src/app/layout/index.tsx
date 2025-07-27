import type { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <div>HELLO LAYOUT</div>
    </>
  )
}
export default Layout
