import type {NextAuthConfig} from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login'
  },
  providers: [],
  callbacks: {
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        if (['/invoices', '/customers'].indexOf(nextUrl.pathname) > -1) {
          return Response.redirect(new URL('/dashboard', nextUrl))
        }
        return true
      }
      return true
    }
  }
} satisfies NextAuthConfig