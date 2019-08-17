import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bookmark-group',
  templateUrl: './bookmark-group.component.html',
  styleUrls: ['./bookmark-group.component.scss']
})
export class BookmarkGroupComponent implements OnInit {

  @Input() sections: any[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() { }

}
