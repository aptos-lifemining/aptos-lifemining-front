export const base64StringToFile = (base64String: string, filename: string) => {
  const arr = base64String.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const isVideo = (file: File) => {
  const videoExtensions = ['.mp4', '.mkv', '.mov', '.avi', '.wmv', '.flv'];
  // const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  const fileExtension = file.name.split('.').pop();
  console.log(fileExtension);
  console.log(videoExtensions.includes(`.${fileExtension}`));
  return videoExtensions.includes(`.${fileExtension}`);
};
