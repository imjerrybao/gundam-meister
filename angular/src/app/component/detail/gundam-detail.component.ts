import {
  Component,
  OnInit
} from '@angular/core';
import {
  Gundam
} from '../../model/gundam';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import { GundamService } from '../../service/gundam.service';
import 'rxjs/add/operator/switchMap';

@Component({
  template: `
    <div *ngIf="selectedGundam">
      <span>{{selectedGundam.name}}</span>
      <span>{{selectedGundam.type}}</span>
    </div>
  `,
})

export class GundamDetailComponent implements OnInit {
  selectedGundam: Gundam;
  gundamStr: string;
  gundamId: number;
  constructor(
    private route: ActivatedRoute,
    private gundamService: GundamService,
  ) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.gundamService.getGundamById(+params['id']))
      .subscribe( gundam => this.selectedGundam = gundam );
  }


}
