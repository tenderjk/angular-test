export default function log (value) {
    return function (target, name, descirptor) {
      console.log(value)
    }
  }