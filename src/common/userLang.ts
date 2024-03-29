function getUserLang(): string {
  const storageLocale = JSON.parse(localStorage.getItem('locale')!)?.locale
  const defaultAppLocale = 'pl'

  const possibleLocaleSources = [
    storageLocale,
    navigator.language.split('-', 1)[0],
    defaultAppLocale,
  ]

  return possibleLocaleSources.find(Boolean)
}

export default getUserLang
export const locale = getUserLang()
