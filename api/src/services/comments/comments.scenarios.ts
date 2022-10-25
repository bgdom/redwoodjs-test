import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: { data: { content: 'String' } },
    two: { data: { content: 'String' } },
  },
})

export type StandardScenario = typeof standard
