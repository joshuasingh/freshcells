import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { CookieProvidersWithSession, CookieProvidersWithOutSession } from './CookiesProvider'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: CookieProvidersWithOutSession, ...options  })

const customRenderWithSession = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: CookieProvidersWithSession, ...options })

export * from '@testing-library/react'
export { customRender as render }
export { customRenderWithSession as renderSession }