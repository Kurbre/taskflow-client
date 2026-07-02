export const getProjectParamId = (pathName: string) => {
	return pathName.includes('/board/') ? pathName.split('/')[2] : undefined
}
