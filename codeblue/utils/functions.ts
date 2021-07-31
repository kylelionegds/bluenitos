export const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$_&-+()/*'":;!?~`|•√π÷×¶∆£¢€¥^°={}%©®™✓])(?=.{8,})/
);

export const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        resolve("");
      }
    };
    reader.onerror = (error) => reject(error);
  });

export function checkIfFileAreTooBig(file?: File): boolean {
  let valid = true;
  if (file) {
    const size = file.size / 1024 / 1024;
    if (size > 100) {
      valid = false;
    }
  }
  return valid;
}

export function checkIfFileAreCorrectType(file?: File): boolean {
  let valid = true;
  if (file && !["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
    valid = false;
  }
  return valid;
}
