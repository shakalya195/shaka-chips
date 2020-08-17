import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() hashTags: any[]=[];
  newTag:any={value:''};
  selectedTag:any;

  constructor() { }

  ngOnInit() {

  }

  keyEvent(event){
    if(event.code=='Enter'){
      let findIndex = this.hashTags.findIndex(item=>item.value == this.newTag.value);
      if(findIndex == -1){
        this.hashTags.push(this.newTag);
      }
      this.newTag = {value:''};
      this.hashTags.map(item=>delete item.selected);
    }
    if(event.code=='Backspace'){
      let selected = this.hashTags.filter(item=>item.selected);
      if(this.newTag.value.length > 0){
        // do nothing
      }else{
        if(selected.length){
          this.hashTags.pop();
        }else if(this.hashTags.length > 0){
          this.hashTags[this.hashTags.length-1].selected = true;
        }
      }
    }

  }

  remove(index){
    this.hashTags.splice(index,1);
  }
  
}
