export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      config.headers.commoN['Authorization'] = process.env.QIITA_TOKEN
    }
    return config
  })
}
