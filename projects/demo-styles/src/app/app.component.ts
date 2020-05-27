import { Component, RendererFactory2, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.update('color-scheme-light');
  }

  update(scheme: string) {
    const removeClass =
      scheme === 'color-scheme-dark'
        ? 'color-scheme-light'
        : 'color-scheme-dark';
    this.renderer.removeClass(document.body, removeClass);
    this.renderer.addClass(document.body, scheme);
  }
}
