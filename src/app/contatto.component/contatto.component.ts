import { Component } from '@angular/core';
import { Contatto } from './contatto.model.ts';

@Component ({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})

export class ContattoComponent {
  contatto: Contatto = new Contatto('Francesco', 'Merighi', 'francesco.merighi@marconirovereto.it',
    '3426476626', 5);
    

}