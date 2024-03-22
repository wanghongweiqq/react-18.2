import request from '@/service/axios'

interface Province {
  /** 省份名称 */
  provinceName: string;
}

interface City {
  /** 城市id */
  cityCode: string;
  /** 城市名称 */
  cityName: string;
  shopCityID: string;
  positionData: string;
}

interface Country {
  /** 国家名称 */
  countryName: string;
  /** 国家id */
  countryId: string;
}

interface OpenAccountDataJson {
  /** 所在国家 */
  country: Country;
  /** 不填 */
  informationCollectionTable?: string;
  /** 总部所在城市 */
  city: City;
  /** 1:单店 2:连锁 */
  businessModel: string | '1' | '2';
  /** 客户名称 */
  customerName1: string;
  /** 合同名称 */
  customerName?: string;
  /** 软件版本ID */
  versionID: string;
  /** 是否为畅捷版开户集团 */
  isCJB: boolean,
  /** 备注 */
  remark: string;
  /** 授权门店数 */
  authShopNum: number | string;
  /** 不填 */
  shopCenterGroupID?: string;
  /** 集团联系人姓名 */
  groupContactName: string;
  /** 是否测试 */
  isTestGroup: number | 0;
  /** 签约人员 */
  saleName: string;
  /** 省份 */
  province: Province;
  /** 不填 */
  brandID?: string;
  /** 不填 */
  tel?: string;
  /** 简称或主品牌 */
  brandName: string;
  /** 不填 */
  groupDesc?: string;
  /** 负责人手机 */
  mobile: string;
  /** 不填 */
  afterPay?: string;
  /** 集团联系人手机号 */
  groupContactMobile: string;
  /** 不填 */
  productItemsList?: any[];
  /** 负责人姓名 */
  linkman: string;
  /** 集团名称 */
  groupName: string;
  /** 关联合同id */
  customerID?: string;
  /** 关联客户id */
  customerID1: number;
  /** 不填 */
  productItemsListInitial?: string;
}

interface AddQuickParams {
  /** 当前登录人orgID */
  orgID: number;
  /** 当前登录人empID */
  empID: number;
  /** 当前登录人Name */
  empName: string;
  /** 开户类型 */
  openAccountType: 'XJTLS';
  openAccountDataJson: OpenAccountDataJson;
  /** 当前登录人Name */
  createBy: string;
}

/**
 * 畅捷版创建集团保存
 */
export const saveQuickGroup = (data: AddQuickParams) =>
  request({
    url: '/basic/group/shopOpenAccount/addGroupBasicInfo',
    data,
  })

/**
 * 畅捷版创建集团提交
 */
export const submitQuickGroup = (data: { itemID: string, empName: string, empID: string}) =>
  request({
    url: `/basic/group/shopOpenAccount/commitCheck/${ data?.itemID }/${ data?.empName }/${ data?.empID }`,
  })

/**
 * 畅捷版集团详情
 */
export const getQuickGroupDetail = (id: string) => request(({
  url: '/basic/group/shopOpenAccount/openAccountDetail/' + id,
  method: 'get',
}))