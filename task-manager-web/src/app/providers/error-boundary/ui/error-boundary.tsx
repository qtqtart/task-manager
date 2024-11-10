import { ErrorInfo, PropsWithChildren, PureComponent } from 'react'

interface State {
  hasError: boolean
}

export class ErrorBoundary extends PureComponent<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('@error', error)
    console.log('@error-info', errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    return hasError ? <div>{`error`}</div> : children
  }
}
