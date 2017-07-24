import { Component, OnInit } from '@angular/core';
import { FfService } from '../../providers/ff.service';
import { TabsService } from '../../providers/tabs.service';

@Component({
  selector: 'app-ff-list',
  templateUrl: './ff-list.component.html',
  styleUrls: ['./ff-list.component.sass']
})
export class FfListComponent implements OnInit {

  constructor(public ffService : FfService, public tabService : TabsService) { }

  ngOnInit() {
  }

}
