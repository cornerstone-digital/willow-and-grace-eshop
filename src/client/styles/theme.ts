import { createGlobalStyle } from 'styled-components'

const theme = {}

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Nunito Sans";
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n4.2b61d9dcf54d8ac8282cfd1ebb6964c79a7efcd1.woff2?&hmac=8cc42143eae778b5a4489df2cc2cac3253120cc1e3acdd0342ed736216541bf9")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n4.420cbf408f643f8ff8fd948b99c10dade8b6af79.woff?&hmac=0a96c8ac3d522763f19edefabd69663b968f08a29ebaeb7407601cc91a24defc")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 400;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i4.e88a2041a6cfbeacffb96db0e8efdfaaa38ddc5c.woff2?&hmac=552da398f9cf9351b323856ad2adeebabcff36bb13e25739abd3442d7eba95d4")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i4.2c3733ccdf579e6e89e929a950e6a93484fdf6b4.woff?&hmac=eb5067d9ace3ed9bafc42d21f2a7fdea7b071445b49065533702d8af29bcbfc6")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.5bd4fb9346d13afb61b3d78f8a1e9f31b128b3d9.woff2?&hmac=a80925e46dab83118087258f70361e59a7ead90cc8d247079c9f1894f9139704")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.2bcf0f11aa6af91c784a857ef004bcca8c2d324d.woff?&hmac=19e78cd6194bda2d82da36db1c30d78a4999f9945a4f1e70ce478106915512bb")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.975ea93f521412ef99ca1e2e434d8ca6a5cf77e7.woff2?&hmac=b3b0b3630d1452928c31a0873830418462a86ab2113a4fe49dfb2299fcfd7d86")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.83b70272d04b71e88f25fc6834dc9b88e4ba4e95.woff?&hmac=fc183d54dd6522b1546f8886edb89b59dca99697ab3a52106fd21557832de67a")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 800;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_n8.d0ee6fdb3a3fec57b7ba86e76adad5b86d8b298f.woff2?&hmac=837c7600fe786bf79db8a7ce5fdc863f17f0f1b86f75f0fd5bc3053a1dc8ef8e")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_n8.57046b0201ba1025a279f9546bf469833729dc63.woff?&hmac=4b8d684090d0971d8b6649520528adde5aec1568150ea5cd67646a756ef3e121")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 800;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_i8.7037775bbf82d7865493b9c8c4f9f95f29614933.woff2?&hmac=62d927c6cae33fb868052c8d3a7a19a8bc16198be57df7088d5870f3bfa95b9a")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_i8.897fa00a948805a58d0a352aacd6f14efa944f56.woff?&hmac=09aef859dc57f208f835220b6da60731cf336b739e9dae6f64f2b6ab850b5626")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 900;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_n9.ddaed62de62f3d3d87e64f4d0463dca05fc9c8e4.woff2?&hmac=b67d8128c9fe24e8ae2d92ed67e2a363d0b4e977e559b1f1ff89bd9af63b96fa")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_n9.85cc5f32e331fc9b3a109639b08869c64782e161.woff?&hmac=0dad9ff79b5ae51db870d72b5df326b1aa49c5d45832fbf06c7bb8a1bdae96ee")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 900;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_i9.7523f2a03fdaaa8b60d141507f9ba8d5c839661a.woff2?&hmac=0ff5e17e6528dbd4376194b0dc782dcc64af3dcbda912017bdd4f159928255aa")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_i9.fb9fe3dd44a3fefe44594bbed91d1246d54a459f.woff?&hmac=7c4218c6af0566c26f8f58af99cc8ac669131c8d9fd33a3a1ad9af2e73db9852")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_n7.c496e9cf2031deec4c4bca338faa81971c8631d4.woff2?&hmac=b9a918bf2f468523f460d46c1177ce19f91e4e2d2e985e9790e19f7a38d94a90")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_n7.78b0223375c94b39ce1af7e09a0225f2bb3d05f7.woff?&hmac=8239ed8fbc7d038e4f5187456563d0dfae3f53b3737d96c3d6b510d70dafb13d")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 700;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_i7.83866c3eec90071fa974c17980ffb42977f9e667.woff2?&hmac=49e2f753aa1bbed2499a3208c3f2e6969080a740e643ad544e4e9d95dbdd13a9")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_i7.25524241b12d864609c85325613d60efcf1a87e3.woff?&hmac=52d5d1f52cacaac04dec2f10df0bcaeec767bd41569a43d36480d4a16030455d")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.5bd4fb9346d13afb61b3d78f8a1e9f31b128b3d9.woff2?&hmac=a80925e46dab83118087258f70361e59a7ead90cc8d247079c9f1894f9139704")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.2bcf0f11aa6af91c784a857ef004bcca8c2d324d.woff?&hmac=19e78cd6194bda2d82da36db1c30d78a4999f9945a4f1e70ce478106915512bb")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.975ea93f521412ef99ca1e2e434d8ca6a5cf77e7.woff2?&hmac=b3b0b3630d1452928c31a0873830418462a86ab2113a4fe49dfb2299fcfd7d86")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.83b70272d04b71e88f25fc6834dc9b88e4ba4e95.woff?&hmac=fc183d54dd6522b1546f8886edb89b59dca99697ab3a52106fd21557832de67a")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.5bd4fb9346d13afb61b3d78f8a1e9f31b128b3d9.woff2?&hmac=a80925e46dab83118087258f70361e59a7ead90cc8d247079c9f1894f9139704")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.2bcf0f11aa6af91c784a857ef004bcca8c2d324d.woff?&hmac=19e78cd6194bda2d82da36db1c30d78a4999f9945a4f1e70ce478106915512bb")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.975ea93f521412ef99ca1e2e434d8ca6a5cf77e7.woff2?&hmac=b3b0b3630d1452928c31a0873830418462a86ab2113a4fe49dfb2299fcfd7d86")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.83b70272d04b71e88f25fc6834dc9b88e4ba4e95.woff?&hmac=fc183d54dd6522b1546f8886edb89b59dca99697ab3a52106fd21557832de67a")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.5bd4fb9346d13afb61b3d78f8a1e9f31b128b3d9.woff2?&hmac=a80925e46dab83118087258f70361e59a7ead90cc8d247079c9f1894f9139704")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_n7.2bcf0f11aa6af91c784a857ef004bcca8c2d324d.woff?&hmac=19e78cd6194bda2d82da36db1c30d78a4999f9945a4f1e70ce478106915512bb")
      format("woff");
}
@font-face {
  font-family: "Nunito Sans";
  font-weight: 700;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.975ea93f521412ef99ca1e2e434d8ca6a5cf77e7.woff2?&hmac=b3b0b3630d1452928c31a0873830418462a86ab2113a4fe49dfb2299fcfd7d86")
      format("woff2"),
    url("https://fonts.shopifycdn.com/nunito_sans/nunitosans_i7.83b70272d04b71e88f25fc6834dc9b88e4ba4e95.woff?&hmac=fc183d54dd6522b1546f8886edb89b59dca99697ab3a52106fd21557832de67a")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 800;
  font-style: normal;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_n8.d0ee6fdb3a3fec57b7ba86e76adad5b86d8b298f.woff2?&hmac=837c7600fe786bf79db8a7ce5fdc863f17f0f1b86f75f0fd5bc3053a1dc8ef8e")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_n8.57046b0201ba1025a279f9546bf469833729dc63.woff?&hmac=4b8d684090d0971d8b6649520528adde5aec1568150ea5cd67646a756ef3e121")
      format("woff");
}
@font-face {
  font-family: Montserrat;
  font-weight: 800;
  font-style: italic;
  font-display: swap;
  src: url("https://fonts.shopifycdn.com/montserrat/montserrat_i8.7037775bbf82d7865493b9c8c4f9f95f29614933.woff2?&hmac=62d927c6cae33fb868052c8d3a7a19a8bc16198be57df7088d5870f3bfa95b9a")
      format("woff2"),
    url("https://fonts.shopifycdn.com/montserrat/montserrat_i8.897fa00a948805a58d0a352aacd6f14efa944f56.woff?&hmac=09aef859dc57f208f835220b6da60731cf336b739e9dae6f64f2b6ab850b5626")
      format("woff");
}
  
  body {
    margin: 0;
    padding: 0;
  }
`

export default theme
