import Physics from './Physics';

export default function(event, ref) {
  if (event.which === 32) {
    Physics.shoot(1, ref);
  }
}
