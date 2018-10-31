import useLocalStorage from '@rehooks/local-storage'

export default function LocalStorage () {
  let bundleUrls = useLocalStorage('bundle-urls')
  return <h1>{bundleUrls}</h1>
}
