import { RouteObject } from "react-router-dom";

/**
 * 用户账号信息
 */
export interface AccountInfoType {
  username: string;
  password: string;
  token: string;
}

/**
 * 路由类型
 */
export enum RoutesTypes {
  hash = "hash",
  history = "history",
}

/**
 * 路由配置
 */
export type RoutesProps = Omit<RouteObject, "children"> & {
  /**
   * 路由路径
   */
  path: string;
  /**
   * 页面名称,同面包屑导航名称
   */
  name: string;
  /**
   * 在菜单中隐藏显示选项
   */
  hideMenu?: boolean;
  /**
   * 纯净模式 - 无任何容器包含
   */
  pure?: boolean;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 背景颜色
   * 默认为: #ffffff
   */
  backgroundColor?: string;
  /**
   * 父路由路径
   */
  parentPath?: string;
  /**
   * 子节点们
   */
  children?: RoutesProps[];
  /**
   * 页面是否需要登录
   */
  needLogin?: boolean;
};
