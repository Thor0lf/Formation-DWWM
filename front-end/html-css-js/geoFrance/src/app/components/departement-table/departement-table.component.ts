import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowDown19, faArrowUp91, faArrowDownAZ, faArrowUpZA, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Departement } from 'src/app/models/departement.model';

@Component({
  selector: 'app-departement-table',
  templateUrl: './departement-table.component.html',
  styleUrls: ['./departement-table.component.css']
})
export class DepartementTableComponent implements OnInit {
  faArrowDownL = faArrowDownAZ;
  faArrowUpL = faArrowUpZA;
  faArrowUp = faArrowUp91;
  faArrowDown = faArrowDown19;
  faMagnifyingGlass = faMagnifyingGlass;

  // Permet de gérer les entrées et sorties dans la balise HTML de commune.component.html
  @Input() departements: Departement[] = [];
  @Input() departementsIsLoading: boolean = false;
  @Input() departementsIsLoaded: boolean = false;
  @Output() loadDepartements: EventEmitter<{}> = new EventEmitter;
  @Output() loadCommunes: EventEmitter<string> = new EventEmitter;

  currentPage: number = 1; // Pour la pagination, l'état de la page actuelle qui ommence à 1
  search: string = ""; // L'input de la barre de recherche

  constructor() { }

  ngOnInit(): void {
  }

  // Permet d'obtenir la longueur du tableau 'departements' et de convertir en lowerCase les données pour faire fonctionner la barre de recherche
  getLength(): number {
    return this.departements
    .filter(departement =>
      departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      departement.code.includes(this.search)
    )
    .length;
  }

  getDepartements(): Departement[] {
    return this.departements
    .filter(departement =>
      departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      departement.code.includes(this.search)
    )
    .slice((this.currentPage - 1) * 10, this.currentPage * 10)
  }

  nomAsc(): Departement[] {
    return this.departements
    .sort((x,y) => {
      let a = x.nom.toLowerCase(),
          b = y.nom.toLowerCase();
          return a === b ? 0 : a > b ? 1 : -1;
    })
  }

  nomDesc(): Departement[] {
    return this.departements
    .sort((x,y) => {
      let a = x.nom.toLowerCase(),
          b = y.nom.toLowerCase();
      return a === b ? 0 : a < b ? 1 : -1;
    })
  }

  codeAsc(): Departement[] {
    return this.departements
    .sort((x,y) => {
      let a = x.code.toLowerCase(),
          b = y.code.toLowerCase();
          return a === b ? 0 : a > b ? 1 : -1;
    })
  }

  codeDesc(): Departement[] {
    return this.departements
    .sort((x,y) => {
      let a = x.code.toLowerCase(),
          b = y.code.toLowerCase();
      return a === b ? 0 : a < b ? 1 : -1;
    })
  }

  regionAsc(): Departement[] {
    return this.departements
    .sort((x,y) => {
      let a = x.codeRegion.toLowerCase(),
          b = y.codeRegion.toLowerCase();
          return a === b ? 0 : a > b ? 1 : -1;
    })
  }

  regionDesc(): Departement[] {
    return this.departements
    .sort((x,y) => {
      let a = x.codeRegion.toLowerCase(),
          b = y.codeRegion.toLowerCase();
          return a === b ? 0 : a < b ? 1 : -1;
    })
  }

}
