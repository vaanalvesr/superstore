import { Injectable } from '@angular/core';

@Injectable()
export class FfService {

  list:any[] = [
    {
      nome: 'Final Fantasy',
      ano: 1987,
      plataform: ['NES', 'PSP', 'GBA']
    },
    {
      nome: 'Final Fantasy II',
      ano: 1988,
      plataform: ['GBA', 'NES', 'PSP']
    },
    {
      nome: 'Final Fantasy III',
      ano: 1990,
      plataform: ['NES','DS', 'PSP']
    },
    {
      nome: 'Final Fantasy IV',
      ano: 1991,
      plataform: ['SNES','PS','GBA', 'DS', 'PSP']
    },
    {
      nome: 'Final Fantasy V',
      ano: 1992,
      plataform: ['SNES','PS', 'GBA']
    },
    {
      nome: 'Final Fantasy VI',
      ano: 1994,
      plataform: ['SNES','PS', 'GBA']
    },
    {
      nome: 'Final Fantasy VII',
      ano: 1997,
      plataform: ['PS', 'PC', 'PS3']
    },
    {
      nome: 'Final Fantasy VIII',
      ano: 1999,
      plataform: ['PS', 'PC']
    },
    {
      nome: 'Final Fantasy IX',
      ano: 2000,
      plataform: ['PS']
    },
    {
      nome: 'Final Fantasy X',
      ano: 2001,
      plataform: ['PS2', 'PS3', 'PSVITA']
    },
    {
      nome: 'Final Fantasy XI',
      ano: 2002,
      plataform: ['PC', 'XBOX360']
    },
    {
      nome: 'Final Fantasy XII',
      ano: 2006,
      plataform: ['PC2']
    },
    {
      nome: 'Final Fantasy XIII',
      ano: 2009,
      plataform: ['PS3', 'XBOX360']
    },
    {
      nome: 'Final Fantasy XIV',
      ano: 2010,
      plataform: ['PC', 'PS3']
    },
    {
      nome: 'Final Fantasy XV',
      ano: 2016,
      plataform: ['PS4', 'XBOXOne']
    },
  ]
  constructor() { }

}
