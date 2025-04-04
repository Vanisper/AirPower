/**
 * # 自定义类和属性名注解
 * @author Hamm.cn
 */

import { IModelConfig } from "./interface";
import { AirDecoratorTarget } from "../type";
import { AirDecorator } from "./AirDecorator.ts";

/**
 * ### 类名称 `Key`
 */
const MODEL_CONFIG_KEY = "Model";

/**
 * ### 为模型类标记配置项
 * @param config 配置项
 */
export function Model<M extends IModelConfig = IModelConfig>(
  config: M = {} as M,
) {
  return (target: AirDecoratorTarget) =>
    AirDecorator.setClassConfig(target, MODEL_CONFIG_KEY, config);
}

/**
 * ### 获取模型类配置项
 * @param target 目标类
 */
export function getModelConfig<M extends IModelConfig = IModelConfig>(
  target: AirDecoratorTarget,
): M {
  return AirDecorator.getClassConfig(target, MODEL_CONFIG_KEY, {}, true) as M;
}
