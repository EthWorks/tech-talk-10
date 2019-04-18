export const storage = {
  getItem (key: string): any {
    const value = localStorage.getItem(key)
    if (value != null) {
      return JSON.parse(value)
    } else {
      return null
    }
  },
  setItem (key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
