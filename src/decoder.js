
var decoder = {
  getPassword: function() {
    this.password = prompt('Enter a password');
  },
  getCypherText: function() {
    this.cypherText = document.URL.split('?')[1]
  },
  decrypt: function() {
    this.getPassword();
    this.getCyphertext();
    return CryptoJS.AES.decrypt(this.cypherText, this.password).toString(CryptoJS.enc.Utf8));
  },
}
document.getElementById('decrypt').onclick = function() { alert(decoder.decrypt()); };
