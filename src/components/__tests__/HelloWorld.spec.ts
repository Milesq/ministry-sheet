import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'

import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const { container } = render(HelloWorld, { props: { msg: 'Hello Vitest' } })

    expect(container).toBeVisible()
  })
})
