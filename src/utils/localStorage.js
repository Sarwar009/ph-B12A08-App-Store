const KEY = 'installed_apps_v1'
export function getInstalled() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
export function saveInstalled(arr) {
  localStorage.setItem(KEY, JSON.stringify(arr))
}
export function isInstalled(id) {
  return getInstalled().some(a => a.id === id)
}
export function installApp(app) {
  const list = getInstalled()
  if (!list.find(i => i.id === app.id)) {
    list.push(app)
    saveInstalled(list)
  }
}
export function uninstallApp(id) {
  const list = getInstalled().filter(a => a.id !== id)
  saveInstalled(list)
  return list
}
