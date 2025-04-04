/* eslint-disable no-unused-vars */

/**
 * # 常见的一些正则枚举
 * @author Hamm.cn
 */
export enum AirRegExp {
  /**
   * ### 字母
   * `a-z A-Z`
   */
  LETTER = "a-zA-Z",

  /**
   * ### 数字
   * `0123456789`
   */
  NUMBER = "0-9",

  /**
   * ### 汉字
   */
  CHINESE = "\u4e00-\u9fa5",

  /**
   * ### 常见全角符号
   * `！，。、？《》！￥…；：‘’“”`
   */
  NORMAL_FULL_CODE = "！，。、？《》！￥…；：‘’“”",

  /**
   * ### 常见半角符号
   * `#@#$%^&*()_+!-=;',./<>?:"`
   */
  NORMAL_HALF_CODE = "@#$%^&*()_+!-=;\\',./<>?:\"",
}
