import { Component, OnInit } from '@angular/core';
import { FooterService } from '../fs/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(ft:FooterService) { }

  ngOnInit() {
    
  }

}
