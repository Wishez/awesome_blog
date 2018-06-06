import ax from './axios'

// 获取用户信息
export function getAuth () {
  return ax.get('/auth')
          .then(res => res.json())
}

// 获取网站配置项
export function getOpt () {
  return ax.get('/option')
          .then(res => res.json())
}

// 英雄版列表
export function getHero (params) {
  return ax.get('/hero', { params })
          .then(res => res.json())
}

// 增加英雄榜
export function postHero (data) {
  return ax.post('/hero', {...data})
          .then(res => res.json())
}

// 标签列表
export function getTag (params) {
  return ax.get('/tag', { params })
          .then(res => res.json())
}

// 获取文章列表
export function getArts (params) {
  return ax.get('/article', { params })
          .then(res => res.json())
}

// 文章归档
export function getallArts (params) {
  return ax.get('/allArticle')
          .then(res => res.json())
}

// 获取单个文章
export function getArt (data) {
  return ax.get(`/article/${data.id}`)
          .then(res => res.json())
}

// 文章点赞
export function likeArt (data) {
  return ax.post(`/like`, data)
          .then(res => res.json())
}

// 获取评价
export function getComment (params) {
  return ax.get('/comment', { params })
          .then(res => res.dajson())
}

// 提交评价
export function postComment (data) {
  return ax.post('/comment', data)
          .then(res => res.json())
}

// 评论点赞
export function likeComment (data) {
  return ax.post(`/like`, data)
          .then(res => res.json())
}

// 音乐列表
export function getMusicLst (data) {
  return ax.get('/music/list/962562705')
          .then(res => res.json())
}

// 音乐详情
export function getMusicDetail (para) {
  return ax.get(`/music/song/${para.song_id}`)
          .then(res => res.json())
}

// 音乐地址
export function getMusicUrl (para) {
  return ax.get(`/music/url/${para.id}`)
          .then(res => res.json())
}

// 获取书本
export function getBook (params) {
  return ax.get(`/book`, { params })
          .then(res => res.json())
}

// 获取友链
export function getLink (params) {
  return ax.get(`/link`, { params })
          .then(res => res.json())
}
