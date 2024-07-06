class LocalStorageService {
  private static isAvailable(): boolean {
    return typeof window !== 'undefined' && window.localStorage != null
  }

  private static handleError(operation: string, error: any): void {
    console.error(`LocalStorage error during ${operation}: ${error}`)
  }

  static setItem(key: string, value: any): void {
    if (!LocalStorageService.isAvailable()) {
      console.error('LocalStorage is not available.')
      return
    }
    try {
      const serializedValue = JSON.stringify(value)
      window.localStorage.setItem(key, serializedValue)
    } catch (error) {
      LocalStorageService.handleError('set item', error)
    }
  }

  static getItem<T>(key: string): T | null {
    if (!LocalStorageService.isAvailable()) {
      console.error('LocalStorage is not available.')
      return null
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      LocalStorageService.handleError('get item', error)
      return null
    }
  }

  static removeItem(key: string): void {
    if (!LocalStorageService.isAvailable()) {
      console.error('LocalStorage is not available.')
      return
    }
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      LocalStorageService.handleError('remove item', error)
    }
  }

  static clear(): void {
    if (!LocalStorageService.isAvailable()) {
      console.error('LocalStorage is not available.')
      return
    }
    try {
      window.localStorage.clear()
    } catch (error) {
      LocalStorageService.handleError('clear', error)
    }
  }
}

export default LocalStorageService
