import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() copyright: string = '';
  @Input() url: string = '';
  @Input() linkText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
