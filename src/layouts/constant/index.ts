const DFCDNKWTS = require("@/assets/music/侯泽润 - 大风吹倒梧桐树.mp3");
const GNBKQ = require("@/assets/music/柯柯柯啊 - 姑娘别哭泣.mp3");
const XXHSNML = require("@/assets/music/沐泽 - 星星还是那么亮 (DJ版).mp3");
const YXJH = require("@/assets/music/闻人听書_ - 一笑江湖 (DJ弹鼓版).mp3");
const DJJG = require("@/assets/music/幸存者联盟、幼稚园杀手 - 大举进攻.mp3");
const PA = require("@/assets/music/小梁 - 偏爱 (片段).mp3");
const XJ = require("@/assets/music/王子健 - 循迹.mp3");
const HMX = require("@/assets/music/柯柯柯啊 - 黄梅戏 (柯柯吉他版).mp3");
const YDGH = require("@/assets/music/柯柯柯啊 - 一点归鸿 (柯柯吉他版).mp3");
interface MusicListProps {
  name?: string;
  userName?: string;
  url?: string;
  imgUrl?: string;
}
export const musicList: MusicListProps[] = [
  {
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe28756ad-1f99-4033-a077-93821c882b53%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707759599&t=963f505ffd42c5910f4c7174c9a35d1e",
    name: "大风吹倒那颗梧桐树",
    url: DFCDNKWTS,
    userName: "候泽润",
  },
  {
    imgUrl:
      "https://img0.baidu.com/it/u=4158808542,1239097059&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    name: "姑娘别哭泣",
    url: GNBKQ,
    userName: "柯柯柯啊",
  },
  {
    imgUrl: "https://inews.gtimg.com/newsapp_bt/0/15213638712/1000",
    name: "星星还是那么亮",
    url: XXHSNML,
    userName: "沐泽",
  },
  {
    imgUrl:
      "https://img2.baidu.com/it/u=1619208178,2256139386&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    name: "一笑江湖DJ",
    url: YXJH,
    userName: "闻人听書",
  },
  {
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F1d662445-ec77-4cd2-9933-9e81315e65d8%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707759549&t=b5bbdc527d6a9f78174e7c23f2a5579c",
    name: "大举进攻",
    url: DJJG,
    userName: "幸存者联盟、幼稚园杀手",
  },
  {
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fec63b733-657b-4d7b-9a07-bd3af82bca8a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707759549&t=4e2716b7f0ae636787ce7dc6a29b62b8",
    name: "偏爱 (片段)",
    url: PA,
    userName: "小梁",
  },
  {
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F025f2fb5-b1be-4089-85f6-65606a23b275%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707759549&t=0a1a7a01242f79b43a9c08b66a69dd93",
    name: "循迹",
    url: XJ,
    userName: "王子健",
  },
  {
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe21108a8-8500-41f1-9a36-450a85a295bb%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707759482&t=67f922b8ff8e5646e1c80d6ffef8858a",
    name: "黄梅戏",
    url: HMX,
    userName: "柯柯柯啊",
  },
  {
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F29546620-df0d-4f58-9a72-f97635d86450%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707759482&t=c80430d61254f9e660866e5d80accdba",
    name: "一点归鸿 (柯柯吉他版)",
    url: YDGH,
    userName: "柯柯柯啊",
  },
];
