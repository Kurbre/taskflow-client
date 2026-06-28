import {
	FolderKanban,
	BriefcaseBusiness,
	Rocket,
	Code2,
	Megaphone,
	ShoppingCart,
	Shield,
	Cloud,
	ChartPie,
	GraduationCap
} from 'lucide-react'

export const projectIconMap = {
	FolderKanban,
	BriefcaseBusiness,
	Rocket,
	Code2,
	Megaphone,
	ShoppingCart,
	Shield,
	Cloud,
	ChartPie,
	GraduationCap
} as const

export const projectIconLabels: Record<keyof typeof projectIconMap, string> = {
	FolderKanban: 'Канбан',
	BriefcaseBusiness: 'Бизнес',
	Rocket: 'Запуск',
	Code2: 'Разработка',
	Megaphone: 'Маркетинг',
	ShoppingCart: 'Магазин',
	Shield: 'Безопасность',
	Cloud: 'Облако',
	ChartPie: 'Аналитика',
	GraduationCap: 'Обучение'
}
