import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  contents:Content[]=[]
  dataLoaded:boolean=false
  constructor(private contentService:ContentService) { }

  navMenus =  this.getContents();


  ngOnInit(): void {
  
  }


  getContents(){
    this.contentService.getContents().subscribe(response => {
       this.contents = response.data,
       this.dataLoaded = response.success
      })
  }
}
