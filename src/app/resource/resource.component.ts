import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { uploadImage } from '../store/actions/resource.action';
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {
  imageUrl: string | ArrayBuffer |null | undefined = "../../assets/Avatar/Image-100.png"
  constructor(private store:Store) {}
  onImageUpload(event:Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.store.dispatch(uploadImage({file}))
      this.displayImage(file)
    }
}

  displayImage(file:File) {
    const reader = new FileReader();
    reader.onload = (e)=> {
      this.imageUrl = e.target?.result
    }
    reader.readAsDataURL(file)
  }
}
