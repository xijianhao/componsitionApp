import Base64 from "base-64";

const encryptPassword = (passwd) => {
  const firstPwds = Base64.encode(`46n9xMYn_gjGMjaj${passwd}`);
  const secondPwds = Base64.encode(`89nnMZPetKwiuayj${firstPwds}`);
  return secondPwds;
};

const debounce = (fn, ms = 300) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, ms);
  };
};

export { encryptPassword, debounce };
