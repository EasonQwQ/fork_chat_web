export const transformOssUrlToCDN = (url: string) => {
  console.log(
    "🚀 ~ transformOssUrlToCDN ~ process.env.CDN_ORIGIN:",
    process.env.CDN_ORIGIN,
  );

  return url.replace(
    "comment-pic-1255632723.cos.ap-shanghai.myqcloud.com",
    "comment-pic-1255632723.file.myqcloud.com",
  );
};
