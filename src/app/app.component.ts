import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  data: any[]= [
    {
      title:"Titulo1",
      descripcion:"Descripcion1",
      urlImage:"https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg"
    },

    {
      title:"Titulo2",
      descripcion:"Descripcion2",
      urlImage:"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg"
    },

    {
      title:"Titulo3",
      descripcion:"Descripcion3",
      urlImage:"https://sumedico.blob.core.windows.net/images/2020/03/17/cuidadosgatobebe_2-focus-min0.07-0.45-640-384.jpg"
    },

    {
      title:"Titulo4",
      descripcion:"Descripcion4",
      urlImage:"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59a669fc5bafe88febb3d6cc/gatito-cesped_0.jpg"
    },

    {
      title:"Titulo5",
      descripcion:"Descripcion5",
      urlImage:"https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg"
    },

    {
      title:"Titulo6",
      descripcion:"Descripcion6",
      urlImage:"https://images.ecestaticos.com/N_vWPjAR7b-erAJJOcXtt1x5CaU=/0x183:2539x1614/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F782%2Fa64%2F421%2F782a64421b6a68a54f77c217e8837890.jpg"
    },

  ];
}
