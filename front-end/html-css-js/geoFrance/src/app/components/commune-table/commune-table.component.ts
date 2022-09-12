import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Commune } from 'src/app/models/commune.model';
import { faArrowDown19, faArrowDownAZ, faArrowUp91, faArrowUpZA } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})
export class CommuneTableComponent implements OnInit {
  faArrowDownL = faArrowDownAZ;
  faArrowUpL = faArrowUpZA;
  faArrowUp = faArrowUp91;
  faArrowDown = faArrowDown19;

  @Input() communes: Commune[] = [];
  @Input() communesIsLoading: boolean = false;
  @Input() communesIsLoaded: boolean = false;

  page = 1;
  currentPage: number = 1; // Pour la pagination, l'état de la page actuelle qui ommence à 1
  search: string = ""; // L'input de la barre de recherche

  constructor() {}

  ngOnInit(): void {}

  getLengthCommune(): number {
    return this.communes
    .filter(commune =>
      commune.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      commune.codesPostaux.includes(this.search)
    )
    .length;
  }

  codeAsc(): Commune[] {
    return this.communes
    .sort((x,y) => {
      let a = x.code.toLowerCase(),
          b = y.code.toLowerCase();
          return a === b ? 0 : a > b ? 1 : -1;
    })
  }

  codeDesc(): Commune[] {
    return this.communes
    .sort((x,y) => {
      let a = x.code.toLowerCase(),
          b = y.code.toLowerCase();
      return a === b ? 0 : a < b ? 1 : -1;
    })
  }

  communesAsc(): Commune[] {
    return this.communes
    .sort((a,b) => {
      return a.population - b.population
    })
  }

  communesDesc(): Commune[] {
    return this.communes
    .sort((a,b) => {
      return a.population - b.population
    })
    .reverse()
  }

  getCommunes(): Commune[] {
    return this.communes
    .filter(commune =>
      commune.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      commune.codesPostaux.includes(this.search)
    )
    .slice((this.currentPage - 1) * 10, this.currentPage * 10)
  }
}
