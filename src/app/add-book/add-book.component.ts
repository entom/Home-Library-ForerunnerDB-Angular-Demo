import {Component, OnInit} from '@angular/core';
import {Book} from "../classes/book";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  model = new Book('', '')

  constructor() {
  }

  ngOnInit() {
  }

}
