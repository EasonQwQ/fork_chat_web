import { getServerSideConfig } from "@/app/config/server";
const config = getServerSideConfig();

type CosApiControllerGetUploadSignParams = {
  fileName: string;
  [key: string]: string;
};
export async function cosApiControllerGetUploadSign(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: CosApiControllerGetUploadSignParams,
  options?: { [key: string]: any },
) {
  console.log("🚀 ~ params:", params);
  // {fileName: 'jlM8wcQ8w8'}
  const url = "/aitht" + "/cos-api/getPresignedUrl";
  const paramsString = new URLSearchParams(params).toString();
  const urlWithParams = url + "?" + paramsString;
  const res = await fetch(urlWithParams, {
    method: "GET",
    ...(options || {}),
  });
  const data = await res.json();
  console.log("🚀 ~ data:", data);
  return data.data;
}
