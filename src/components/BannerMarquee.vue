<template>
  <div id="vl-marquee">
    <Vue3Marquee :clone="true" :duration="5">
      <span> Gamma Vantage •</span>
    </Vue3Marquee>
  </div>
  <div id="vr-marquee">
    <Vue3Marquee :clone="true" :duration="5">
      <span> Gamma Vantage • </span>
    </Vue3Marquee>
  </div>
</template>

<style scoped >
span {
  margin-right: 5px;
}
#vl-marquee {
  user-select: none;
  font-family: 'Advent Pro', sans-serif;
  position: fixed;
  transform: rotate(90deg);
  z-index: -1;
  right: -99%;
  bottom: 45%;
  color: #828a9c;
  margin-right: 10px;
}
#vr-marquee {
  user-select: none;
  font-family: 'Advent Pro', sans-serif;
  position: fixed;
  transform: rotate(-90deg);
  z-index: -1;
  left: -99%;
  bottom: 45%;
  color: #828a9c;
  margin-left: 10px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  span {
    font-size: 10px;
  }
}
</style>