export {}

declare global {
  interface Window {
    IS_DEV_SERVER: boolean
  }

  namespace NodeJS {
    interface Global {
      document: Document
      window: Window
      navigator: Navigator
      history: History
      location: Location
    }
    interface Window {
      IS_DEV_SERVER: boolean
    }
  }
}
