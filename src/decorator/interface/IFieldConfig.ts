import { AirAny, ClassConstructor } from "../../type";
import { AirDictionaryArray, AirEnum } from "../../dictionary";
import { IField } from "./IField.ts";

/**
 * # 字段配置
 * @author Hamm.cn
 */
export interface IFieldConfig<E extends AirEnum<AirAny> = AirEnum<AirAny>>
  extends IField {
  /**
   * ### 配置字典
   */
  dictionary?: ClassConstructor<E> | AirDictionaryArray;

  /**
   * ### 是否忽略类上的前缀
   */
  ignorePrefix?: boolean;

  /**
   * ### 转换别名
   */
  alias?: string;

  /**
   * ### 是否是数组
   */
  array?: boolean;

  /**
   * ### 强制类型转换的目标类
   */
  type?: ClassConstructor;
}
