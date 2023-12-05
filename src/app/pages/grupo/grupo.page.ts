import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.page.html',
  styleUrls: ['./grupo.page.scss'],
})
export class GrupoPage implements OnInit {

  constructor(private router: Router) { }

  chatGroup() {
    this.router.navigate(['/chat']);
  }

  ngOnInit() {
  }

}
