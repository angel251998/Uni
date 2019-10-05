import { Component, OnInit, ViewChild } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  userImage = 'assets/guest.png';
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.segment.value = 'Compras';
  }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }

  segmentChanged( event ) {
    const valorSegmento = event.detail.value;
  }
}
