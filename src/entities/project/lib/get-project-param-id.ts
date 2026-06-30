export const getProjectParamId = (pathName: string) => {
	return pathName.includes('/board/') ? pathName.split('/board/')[1] : undefined
}
