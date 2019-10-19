export default {
  visible: true,
  selectedBall: null,
  shoot() {
    if (this.visible) {
      const angle = this.rotation.z - (-90 * Math.PI) / 180;
      const speedX = Math.cos(angle) * 1;
      const speedY = Math.sin(angle) * 1;
      this.selectedBall.setSpeed({
        x: speedX,
        y: speedY
      });
    }
    this.visible = false;
  },
  update(control, cueRef) {
    const dx = this.selectedBall.position.x - control.object.position.x;
    const dy = this.selectedBall.position.y - control.object.position.y;

    const cameraAngle = Math.atan2(dy, dx);
    this.rotation.z = cameraAngle + (-90 * Math.PI) / 180;

    // Set camera to rotate and look at selected ball
    this.position.set(
      this.selectedBall.position.x,
      this.selectedBall.position.y,
      this.selectedBall.position.z
    );

    // show cue again when speed of ball is < ...
    if (
      Math.abs(this.selectedBall.speed.y) <= 0.002 &&
      Math.abs(this.selectedBall.speed.x) <= 0.002
    ) {
      if (!this.visible) {
        // control.target = this.selectedBall.position;
        // control.update();
      }
      this.visible = true;
    }
  }
};
