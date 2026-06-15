/* Stripe not used in SNUGGSTITCH — orders go via Instagram DM. */
import { createServerFn } from '@tanstack/react-start'

export const getStripeEnabled = createServerFn({ method: 'GET' }).handler(() => false)

export const createCheckoutSession = createServerFn({ method: 'POST' })
  .inputValidator((_id: unknown) => _id as number)
  .handler(async (_ctx) => {
    throw new Error('Stripe checkout is not used in this project.')
  })
