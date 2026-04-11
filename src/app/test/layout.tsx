export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="dashboard-container h-screen overflow-scroll">
      <main>{children}</main>
    </section>
  )
}