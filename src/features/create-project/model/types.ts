import { createProjectSchema } from './create-project.schema'
import { z } from 'zod'

export type CreateProjectForm = z.infer<typeof createProjectSchema>
