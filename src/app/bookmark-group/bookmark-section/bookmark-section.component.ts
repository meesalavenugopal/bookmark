import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'bookmark-section',
  templateUrl: './bookmark-section.component.html',
  styleUrls: ['./bookmark-section.component.scss']
})
export class BookmarkSectionComponent implements OnInit {

  @Input() isLight: boolean;
  @Input() section_header: string;
  @Input() bookmarks: any[]; // TODO: Add Typing

  constructor() { }

  ngOnInit() { }

}
