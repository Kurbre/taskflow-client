const publicRoutes = [
	'/auth/login',
	'/auth/register',
	'/auth/refresh',
	'/auth/verify-email',
	'/auth/resend-verification',
	'/auth/logout'
]

export function isPublicRoute(url?: string) {
	if (!url) return false

	return publicRoutes.some(route => url.includes(route))
}
