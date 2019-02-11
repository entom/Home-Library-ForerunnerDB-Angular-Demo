import {Component, OnInit} from '@angular/core';
import {Book} from "../classes/book";
import {NgForm} from "@angular/forms";

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

  onSubmit(bookForm: NgForm) {
    bookForm.resetForm()
  }
}
