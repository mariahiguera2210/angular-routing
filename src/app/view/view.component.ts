import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id = '';

  constructor(
    private router: Router, private route: ActivatedRoute
  ) {}
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id') || '';
  }
}


