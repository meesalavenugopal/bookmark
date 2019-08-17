import { Component, OnInit } from '@angular/core';
import { BookMarkService } from './service/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookmark';
  sections: any[]; //TODO: Add Typing

  constructor(private bookMarkService: BookMarkService) {}

  ngOnInit() {
    this.sections = this.bookMarkService.getSections();
  }

}
