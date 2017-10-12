import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const octicons = require('octicons');

@Component({
  selector: 'icon',
  template: `<span [innerHTML]="getIconSVG()"></span>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent  {
  @Input() name: string;
  @Input() class: string;
  @Input("aria-label") ariaLabel: string;
  @Input() width: string;
  @Input() height: string;


  constructor(private sanitizer: DomSanitizer) {}

  getIconSVG(): SafeHtml {
    if (!octicons[this.name]) {
      console.error(`Octicon "${this.name}" does not exist`);
      return '[error]';
    }

    let opts: any = {};
    if (this.class) opts.class = this.class;
    if (this.ariaLabel) opts['aria-label'] = this.ariaLabel;
    if (this.width) opts.width = this.width;
    if (this.height) opts.height = this.height;


    let svg: string = octicons[this.name].toSVG(opts);

    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
