import { whoAmIAction } from '@/server/actions/auth.actions'
import React from 'react'

export function useAuth() {
    return React.use(React.cache(whoAmIAction)())
}
