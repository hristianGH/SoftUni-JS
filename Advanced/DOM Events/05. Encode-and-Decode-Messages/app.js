function encodeAndDecodeMessages() {
  const divs = {
    encode: main.querySelectorAll("div")[0],
    decode: main.querySelectorAll("div")[1],
  };
  const encode = {
    Text: divs.encode.getElementsByTagName("textarea")[0],
    encodeBtn: divs.encode.getElementsByTagName("button")[0],
    func:(char) => String.fromCharCode(char.charCodeAt(0) + 1),
  };
  const decode = {
    Text: divs.decode.getElementsByTagName("textarea")[0],
    decodeBtn: divs.decode.getElementsByTagName("button")[0],
    func:(char) => String.fromCharCode(char.charCodeAt(0) - 1),
  };

  encode.encodeBtn.addEventListener("click", (e) => {
    let msg = encode.Text.value.split('').map(encode.func).join('');
    decode.Text.value=msg;
    encode.Text.value='';
  });

  decode.decodeBtn.addEventListener("click", (e) => {
    let msg = decode.Text.value.split('').map(decode.func).join('');
    encode.Text.value=msg;
    decode.Text.value='';
  });
}
