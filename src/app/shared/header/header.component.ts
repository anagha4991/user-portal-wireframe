import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
interface Language {
  name: string;
  code: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  availableLanguages: Language[] = [];
  selectLanguage: Language = this.availableLanguages[0];
  count: number = 0;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.availableLanguages = [
      { name: 'En', code: 'En' },
      { name: 'Ar', code: 'Ar' },
    ];
  }
  navbarToggler() {
    debugger
    this.count++;
    if (this.count % 2 != 0) {
      this.renderer.addClass(this.document.body, 'sidebar-icon-only');
    }
    this.renderer.removeClass(this.document.body, 'sidebar-icon-only');
  }
}
