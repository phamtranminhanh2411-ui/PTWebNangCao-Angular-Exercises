import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  templateUrl: './binding-two-way-component.html',
  styleUrl: './binding-two-way-component.css',
})
export class BindingTwoWayComponent {
  public hsa = 5;
  public hsb = 10;
  public hsc = 0;
  public ketqua = '';

  giaiPt2(): void {
    if (this.hsa === 0) {
      if (this.hsb === 0 && this.hsc === 0) {
        this.ketqua = 'Phương trình có vô số nghiệm';
      } else if (this.hsb === 0) {
        this.ketqua = 'Phương trình vô nghiệm';
      } else {
        this.ketqua = `x=${-this.hsc / this.hsb}`;
      }
      return;
    }

    const delta = this.hsb ** 2 - 4 * this.hsa * this.hsc;
    if (delta < 0) {
      this.ketqua = 'Phương trình vô nghiệm';
    } else if (delta === 0) {
      this.ketqua = `Phương trình có nghiệm kép x1=x2=${-this.hsb / (2 * this.hsa)}`;
    } else {
      const x1 = (-this.hsb - Math.sqrt(delta)) / (2 * this.hsa);
      const x2 = (-this.hsb + Math.sqrt(delta)) / (2 * this.hsa);
      this.ketqua = `Phương trình có 2 nghiệm phân biệt x1=${x1}; x2=${x2}`;
    }
  }

  reset(): void {
    this.hsa = 5;
    this.hsb = 10;
    this.hsc = 0;
    this.ketqua = '';
  }
}
