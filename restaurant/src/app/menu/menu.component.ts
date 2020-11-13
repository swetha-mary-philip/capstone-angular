import { Component, OnInit } from '@angular/core';
import { Menu} from '../menu';
import { MenuService} from "../menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  menuitems: Menu[];
  

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu()
    .then((menuitems: Menu[])=>{this.menuitems = menuitems.map(menuitems =>{
      return menuitems;
    });
  });
}

counter(i: number) {
  return new Array(i);
}

}
