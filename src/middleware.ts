import { checkMiddlewareAuth } from '@/entities/user/api/check-middleware-auth'
import { userMeRequest } from '@/entities/user/api/user-me.api'
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/board', '/profile']
const authRoutes = ['/auth/login', '/auth/register']

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname.startsWith(route)
	)

	const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

	const refreshToken = request.cookies.get('refreshToken')?.value

	if (!isProtectedRoute && !isAuthRoute) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		if (isProtectedRoute) {
			const loginUrl = new URL('/auth/login', request.url)

			return NextResponse.redirect(loginUrl)
		}

		return NextResponse.next()
	}

	const cookieHeader = request.headers.get('cookie') ?? ''

	const isAuth = await checkMiddlewareAuth(cookieHeader)

	if (isProtectedRoute && !isAuth) {
		const response = NextResponse.redirect(new URL('/auth/login', request.url))

		response.cookies.delete('refreshToken')

		return response
	}

	if (isAuthRoute && isAuth) {
		return NextResponse.redirect(new URL('/board', request.url))
	}

	return NextResponse.next()
}
