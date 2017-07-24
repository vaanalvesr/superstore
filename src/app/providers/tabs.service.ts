import { Injectable } from '@angular/core';

@Injectable()
export class TabsService {

  tabs:string[] = ['Pictures','Music','Videos','Documents'];
  constructor() { }

}
