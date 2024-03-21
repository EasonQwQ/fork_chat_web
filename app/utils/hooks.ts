import { useMemo } from "react";
import { useAccessStore, useAppConfig } from "../store";
import { collectModels } from "./model";
import { isVisionModel, isZeroOneModel } from "../utils";
export function useAllModels() {
  const accessStore = useAccessStore();
  const configStore = useAppConfig();
  const customModels = [
    configStore.customModels,
    accessStore.customModels,
  ].join(",");
  const models = useMemo(() => {
    const temp = collectModels(configStore.models, customModels);
    return accessStore.lingyiOnly
      ? temp.filter((v) => isZeroOneModel(v.name))
      : temp;
  }, [
    accessStore.customModels,
    accessStore.lingyiOnly,
    configStore.customModels,
    configStore.models,
  ]);
  return models;
}
