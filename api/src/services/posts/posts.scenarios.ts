import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String', description: 'String' } },
    two: { data: { title: 'String', description: 'String' } },
  },
})

export type StandardScenario = typeof standard
