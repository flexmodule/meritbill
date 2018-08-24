/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * regOpen: 是否开放注册
 * 
 */
let baseUrl;
let routerMode;
let authUrl;
let baseUrl2;
const imgBaseUrl = 'https://fuss10.elemecdn.com';
let regOpen;
baseUrl = 'http://www.hx-trip.cn/tour';
routerMode = 'hash'
authUrl = 'http://uat.sssyin.cn/tour/static/tour.html';
regOpen = true;
baseUrl2 = 'http://192.168.2.124:8080'


export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  authUrl,
  baseUrl2,
  regOpen
}
