export const loadScript = (src: string): void => {
  const tag = document.createElement("script");
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName("body")[0].appendChild(tag);
};
