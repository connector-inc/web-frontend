import { ThemeProvider } from 'next-themes'

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" storageKey="system-theme">
      {children}
    </ThemeProvider>
  )
}
