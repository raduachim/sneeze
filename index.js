var coreAudio = require('node-core-audio')
var engine = coreAudio.createNewAudioEngine()
var fftInPlace = require('fft-js').fftInPlace

function processAudio ( signal ) {
  console.log(signal[0][0])
  fftInPlace(signal)
  console.log(signal)
}
engine.addAudioCallback(processAudio)
