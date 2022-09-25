class UserInfo {
  constructor(
    first = null,
    last = null,
    email = null,
    phone = null,
    upload = null
  ) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.phone = phone;
    this.upload = upload;
  }
  getValues() {
    const obj = {
      first: this.first,
      last: this.last,
      email: this.email,
      phone: this.phone,
      upload: this.upload,
    };
    return { ...obj };
  }
  setAll(first, last, email, phone, upload = null) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.phone = phone;
    this.upload = upload;
  }
  setFirst(newVal) {
    this.first = newVal;
  }
  setLast(newVal) {
    this.last = newVal;
  }
  setEmail(newVal) {
    this.email = newVal;
  }
  setPhone(newVal) {
    this.phone = newVal;
  }
  setUpload(newVal) {
    this.upload = newVal;
  }
}

const userinfo = new UserInfo();

module.exports = userinfo;
